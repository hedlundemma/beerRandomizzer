<script lang="ts">
    import { createQuery } from '@tanstack/svelte-query';
    import {type Beer, type Input } from '../types/types';
    import '../app.css';

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
<div class = "beer-container">
  
  {#if $query.isLoading}
  <p>Loading...</p>
{:else}
  {#if $query.isSuccess && $query.data.length > 0}
    
      {#each $query.data as beer}
     
        <h2>{beer.name}</h2>
        {#if beer.image_url}
        
    <img src = {beer.image_url} class ="custom-image" alt = "beer">
    {:else}
   <img class = "error-image" src = "./no-image-available.jpeg" alt = "no beer img availabe">
 
     {/if}
     <h2>Descripton:</h2>
     <p>{beer.description}</p>
     <h2>Food Paring:</h2>
    <p>{beer.food_pairing}</p>
    <h2>Brewers tips:</h2>
    <p>{beer.brewers_tips}</p>
   
  
      {/each}
    
    

  {/if}

{/if}
</div>


<style>

  .beer-container {
    width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap:wrap;
  text-align: center;
  align-self: right;
  margin-top:8rem;

 
 margin-right: 3rem;


  }

  input {
    position:absolute;
    top:10rem;
    right:10rem;
    background-color: black;
    color:white;
    width: 20rem;
    border:none;
    height: 3rem;
    font-size: 30px;
 

  }
  input::placeholder{
    color:white;
  }

  .beer-container img{
    height:500px;
    width: 200px;
  }

 

</style>