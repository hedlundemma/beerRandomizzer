<script lang="ts">
    import { createQuery } from '@tanstack/svelte-query';
    import {type Button, type Beer } from '../types/types';

  
    let intervalMs = 1000
  
    const endpoint = 'https://api.punkapi.com/v2/beers';
    
    //variable to store the beern name
    let beerName = ''
  
    $: query = createQuery({
      queryKey: ['refetch'],
      queryFn: async () => await fetch(endpoint).then((r) => r.json()),
      refetchInterval: intervalMs,
    })

    const searchButton: Button = {
        text: "Search Beer"
    }
  </script>
  
  <input bind:value={beerName} type="text" placeholder="Enter beer name" />
  <button on:click>{searchButton.text}</button>

  {#if $query.isLoading}
  <p>Loading...</p>
{:else}
  {#if $query.isSuccess && $query.data.length > 0}
    <ul>
      {#each $query.data as beer}
        <li>{beer.name}</li>
      {/each}
    </ul>
  {:else}
    <p>No beers found.</p>
  {/if}
{/if}