<script lang="ts">
    import Favourite from "./Favourite.svelte";
    import { type Beer } from '../types/types';

    let savedBeers = JSON.parse(localStorage.getItem('savedBeers')) || [];

    function removeFromFavourite(item: Beer) {
        const beerIndex = savedBeers.findIndex((beer: Beer) => beer.name === item.name);
        if (beerIndex !== -1) {
        savedBeers.splice(beerIndex, 1);
        localStorage.setItem('savedBeers', JSON.stringify(savedBeers));
        window.location.reload();
        }
    };

</script>

<h3>Favourites</h3>
<section class="saved-beers">
{#each savedBeers as beer}
    <div>
        <p>{beer.name}</p>
        <img src={beer.image_url} alt="Beer.">
        <Favourite on:click={() => removeFromFavourite(beer)}/>
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
    }

    p {
        font-size: 1rem;
    }
    
    img {
        height: 120px;
    }
</style>