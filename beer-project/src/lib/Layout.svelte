<script lang="ts">
  import { createQuery } from '@tanstack/svelte-query';
  import { type Beer } from '../types/types';

  

  const query = createQuery({
    queryKey: ['beers'],
    queryFn: () =>
      fetch('https://api.punkapi.com/v2/beers/11').then(
        (res) => res.json() as Promise <Beer[]>
      ),
  })
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