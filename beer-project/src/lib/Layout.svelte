<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query';
  import { type Beer } from '../types/types';

    type Beer = {
    id: number,
    name: string,
    description: string,
    image_url?: string
  }

  const query = createQuery({
    queryKey: ['beers'],
    queryFn: () =>
      fetch('https://api.punkapi.com/v2/beers/random').then(
        (res) => res.json() as Promise <Beer[]>,
      ),
  }) 

  console.log(query);
  
  </script>
  
  <div>
    {#if $query.isLoading}
      <p>Loading...</p>
    {:else if $query.isError}
      <img src="./no-image-available" alt="No beer available">
      <p>Error: {$query.error}</p>
    {:else if $query.isSuccess}
      {#each $query.data as beer}
      <img src = {beer.image_url} alt = "beer">
       <p>{beer.name}</p>
      {/each}
    {/if}
  </div>