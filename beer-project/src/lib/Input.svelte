<script lang="ts">
    import { createQuery } from '@tanstack/svelte-query';
    import {type Beer, type Input } from '../types/types';

    const input:Input = {
      placeholder: "Search for beer"

    };

    let intervalMs: number = 1000;
  
    const endpoint: string = 'https://api.punkapi.com/v2/beers';
    
    //variable to store the beer name
    let beerName: string = '';


    //dollar-sign makes sure its reactive 
    $: query = createQuery({
    queryKey: ['refetch'],
    queryFn: async () => {
      if (beerName) {
        //fetch the beer_name endpoint
        const url = `${endpoint}?beer_name=${encodeURIComponent(beerName)}`;
        return await fetch(url).then((r) => r.json()) as Promise <Beer[]>;
      } else {
        return [];
      }
    },
    refetchInterval: intervalMs,
  });
  </script>
  <!-- input bind value makes sure that the variable beerName will be updated with the current value of the input element-->
  <input bind:value={beerName} type="text" placeholder={input.placeholder} />


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