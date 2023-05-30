<script lang="ts">
    import Favourite from "./Favourite.svelte";
    import { removeFromFavourite } from "./utils/savedBeersUtils";

    let savedBeers = JSON.parse(localStorage.getItem('savedBeers')) || [];
</script>

<h3>Your favourite beers</h3>
<section class="saved-beers">
{#each savedBeers as beer}
    <div class="favourite-beers">
        <p>{beer.name}</p>
        {#if beer.image_url}
        <img src = {beer.image_url} class ="custom-image" alt = "beer">
        {:else}
       <img class = "error-image" src = "./no-image-available.jpeg" alt = "no beer img availabe">
        {/if}
        <Favourite fill="#FFD400" on:click={() => removeFromFavourite(beer, savedBeers)}/>
    </div>
{/each}
</section>

<style>
    .saved-beers {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        text-align: center;
        padding-left: 10px;
        padding-bottom: 10px;
        border: 1px solid black;
    }
    img {
        height: 120px;
    }
</style>