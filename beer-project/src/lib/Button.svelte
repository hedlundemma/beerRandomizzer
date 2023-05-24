<script lang="ts">
import {type Button, type Beer } from '../types/types';
import { createQuery } from '@tanstack/svelte-query';

// button created from type Button
 const RandomButton: Button = {
  text: 'Fetch Random Beer',
 
};

// query to fetch a random beer 
const query = createQuery({
    queryKey: ['beers'],
    queryFn: () =>
      fetch('https://api.punkapi.com/v2/beers/random').then(
        (res) => res.json() as Promise <Beer[]>
      ),
      refetchInterval:  false
  })

  </script>
  
<div>
  {#if $query.isLoading}
    <p>Loading...</p>
  {:else if $query.isError}
   <p>Error: {$query.error}</p>
  {:else if $query.isSuccess}
    {#each $query.data as beer}
    {#if beer.image_url}
    <img src = {beer.image_url} alt = "beer">
    {:else}
   <img class = "error-image" src = "./no-image-available.jpeg" alt = "no beer img availabe">
     <p>{beer.name}</p>
     {/if}
    {/each}
  {/if}
</div>

<button on:click> {RandomButton.text} </button>

  <style>
    button {
      background-color: black;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      padding: 1rem;
      color: white;
    }

    .error-image{
      width: 400px;
      height: 400px;
    }
  </style>

 