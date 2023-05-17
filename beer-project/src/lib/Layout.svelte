<script lang="ts">
    import { createQuery } from '@tanstack/svelte-query';

  const query = createQuery({
    queryKey: ['beers'],
    queryFn: () =>
      fetch('https://api.punkapi.com/v2/beers/random').then(
        (res) => res.json(),
      ),
  })

  console.log(query);
  

  </script>
  
  <div>
    {#if $query.isLoading}
      <p>Loading...</p>
    {:else if $query.isError}
      <p>Error: {$query.error}</p>
    {:else if $query.isSuccess}
      {#each $query.data as beer}
        <p>{beer.beer_name}</p>
      {/each}
    {/if}
  </div>