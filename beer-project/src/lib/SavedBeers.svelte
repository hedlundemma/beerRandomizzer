<script lang="ts">
    import Favourite from "./Favourite.svelte";
    import { removeFromFavourite, addToFavourites, savedBeers, savedBeerIds } from "./utils/savedBeersUtils";
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
        <Favourite fill={savedBeerIds.includes(beer.id) ? '#FFD400' : 'none'} on:click={() => {
            if (savedBeerIds.includes(beer.id))
            {
                removeFromFavourite(beer, savedBeers);
            }
            else
                addToFavourites(beer);
        }} />
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

    .favourite-beers {
        margin-left: 1rem;
        margin-right: 1rem;
    }

    img {
        height: 120px;
    }
</style>