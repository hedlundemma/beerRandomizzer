<script lang="ts">
    import { createQuery } from '@tanstack/svelte-query';

  const query = createQuery({
    queryKey: ['beers'],
    queryFn: () =>
      fetch('https://api.punkapi.com/v2/beers/random').then(
        (res) => res.json(),
      ),
  });

  console.log(query);

  </script>
  
  <div>
    {#if $query.isLoading}
      <p>Loading...</p>
    {:else if $query.isError}
      
      <p>Error: {$query.error}</p>
    {:else if $query.isSuccess}
      {#each $query.data as beer}
      {#if beer.image_url}
      <img src={beer.image_url} alt = "beer">
      {:else}
      <img class = "error" src="./no-image-available.jpeg" alt="no img available">
      
      {/if}
      
       <p>{beer.name}</p>
       <p>{beer.food_pairing}</p> 
      {/each}
    {/if}

  </div>

  <style>
    .error {
      width: 400px;
      height: 400px;
    }
  </style>

  