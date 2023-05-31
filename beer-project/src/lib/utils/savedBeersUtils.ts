import { type Beer } from "../../types/types";

export function removeFromFavourite(item: Beer, array: Beer[]) {
    const beerIndex = array.findIndex((beer: Beer) => beer.name === item.name);
    if (beerIndex !== -1) {
    array.splice(beerIndex, 1);
    localStorage.setItem('savedBeers', JSON.stringify(array));
    window.location.reload();
    }
};

export function addToFavourites (item: Beer) {
    let savedBeers = JSON.parse(localStorage.getItem('savedBeers')) || [];
    savedBeers.push(item);
    localStorage.setItem('savedBeers', JSON.stringify(savedBeers))
    window.location.reload();
    };

export let savedBeers: Beer[] = JSON.parse(localStorage.getItem('savedBeers')) || [];

export let savedBeerIds: (string | number)[] = savedBeers.map((beer) => beer.id);

