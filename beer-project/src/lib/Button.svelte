<script lang = "ts">
   import { createQuery } from '@tanstack/svelte-query';
 
  type Beer = {
    id: number,
    name: string,
    description: string,
    image_url?: string
  }

  // Create a reactive statement to store the fetched beer data
  let beers: Beer[] = [];

  function handleClick() {
    const query = createQuery({
      queryKey: ['beers'],
      queryFn: () =>
        fetch('https://api.punkapi.com/v2/beers/random').then(
          (res) => res.json() as Promise<Beer[]>
        ),
      onSuccess: (data: Beer[]) => {
        beers = data; // Update the beers array with the fetched data
      },
    });

   query.refetch();
  }
</script>

<button on:click={handleClick}>Fetch Beer</button>

{#each beers as beer}
  <div>
    {#if beer.image_url}
      <img src={beer.image_url} alt="beer" />
    {:else}
      <img class="error" src="./no-image-available.jpeg" alt="no img available" />
    {/if}
    <p>{beer.name}</p>
    <p>{beer.description}</p>
  </div>
{/each}

  <style>
    button {
      background-color: black;
      border-radius: 1rem;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      padding: 1rem;
      color: white;
    }
  </style>