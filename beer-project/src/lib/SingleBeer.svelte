<script lang="ts">
    import { type Beer } from '../types/types';
    import { createQuery } from '@tanstack/svelte-query';
    import Favourite from './Favourite.svelte';

    // query to fetch a random beer 
    const query = createQuery({
        queryKey: ['beers'],
        queryFn: () =>
          fetch('https://api.punkapi.com/v2/beers/random').then(
            (res) => res.json() as Promise <Beer[]>
          ),
          
          refetchOnWindowFocus:false
      })
    
    function addToFavourites (item: Beer) {
      let savedBeers = JSON.parse(localStorage.getItem('savedBeers')) || [];
      savedBeers.push(item);
      localStorage.setItem('savedBeers', JSON.stringify(savedBeers))
      window.location.reload();
      };
  
</script>
       
<div class ="beer-data">
    {#if $query.isLoading}
    <p>Loading...</p>
    {:else if $query.isError}
    <p>Error: {$query.error}</p>
    {:else if $query.isSuccess}
    {#each $query.data as beer}
    {#if beer.image_url}
    <img src = {beer.image_url} class ="custom-image" alt = "beer">
    {:else}
    <img class = "error-image" src = "./no-image-available.jpeg" alt = "no beer img availabe">
        {/if}
        <Favourite on:click={() => addToFavourites(beer)}/>
        <p>{beer.name}</p>
    {/each}
    {/if}
    <slot/>
</div>

<style>
    .error-image{
        width: 400px;
        height: 400px;
    }

    .custom-image{
    height: 500px;
    margin-bottom: 2rem;
    }

    .beer-data{
        width: 50%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
       
        margin-top: 5rem;
        text-align: center;
        align-self: flex-start; 
        margin-left: 1rem;
    }
</style>
    
     