<!-- App.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import Home from './Home.svelte';
  import BeerPage from './BeerPage.svelte';

  let currentPage = null;
  let showElements = true;

  onMount(() => {
    // Set the initial page/component
    currentPage = Home;
  });

  function goToBeerPage() {
    currentPage = BeerPage;
    showElements = false; // Hide the elements
  }
</script>

<div>
  {#if showElements}
    <h1 style="color: black;">Welcome to beer heaven</h1>
    <button on:click={goToBeerPage}>Get me a random beer</button>
  {/if}
</div>

{#if currentPage}
  <svelte:component this={currentPage} />
{/if}