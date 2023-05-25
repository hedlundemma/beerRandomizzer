<script lang="ts">
    import { createQuery } from '@tanstack/svelte-query';
    import {type Button, type Beer } from '../types/types';

    let intervalMs = 1000
  
    const endpoint = 'https://api.punkapi.com/v2/beers';
    
    //variable to store the beer name
    let beerName = ''

    $: query = createQuery({
    queryKey: ['refetch'],
    queryFn: async () => {
      if (beerName) {
        //fetch the beer_name endpoint
        const url = `${endpoint}?beer_name=${encodeURIComponent(beerName)}`;
        return await fetch(url).then((r) => r.json());
      } else {
        return [];
      }
    },
    refetchInterval: intervalMs,
 
  });
  </script>
  
  <input bind:value={beerName} type="text" placeholder="Enter beer name" />


  {#if $query.isLoading}
  <p>Loading...</p>
{:else}
  {#if $query.isSuccess && $query.data.length > 0}
    <ul>
      {#each $query.data as beer}
        <li>{beer.name}</li>
      {/each}
    </ul>

  {/if}
{/if}