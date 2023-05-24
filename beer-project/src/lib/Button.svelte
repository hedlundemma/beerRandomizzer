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
     <p>{beer.name}</p>
     <p>{beer.description}</p>
    {/each}
  {/if}


<button on:click> {RandomButton.text} </button>
</div>

  <style>
    button {
      background-color: black;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      padding: 1rem;
      color: white;
      margin-bottom: 2rem;
    }

    .error-image{
      width: 400px;
      height: 400px;
    }

    .custom-image{
    height: 600px;
    }

    .beer-data{
      width: 80%;
      height: 1000px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 3rem;
      margin-top: 5rem;
      text-align: center;
    }

    
  </style>

 