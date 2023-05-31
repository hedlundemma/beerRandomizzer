<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import Layout from './Layout.svelte';
  import Button from './Button.svelte';
  import Input from './Input.svelte';
  import SavedBeers from './SavedBeers.svelte';
  import SingleBeer from './SingleBeer.svelte';
  import type { Beer } from '../types/types';
  import '../app.css';
  
  const queryClient = new QueryClient();
  
  async function fetchBeer(): Promise<Beer[]> {
    const data = await queryClient.fetchQuery(['beers']);
    return data as Beer[];
  }

  function goToBeerPage(): void {
    sessionStorage.setItem('showElements', 'false');
    window.location.reload();
  }

  let showElements = sessionStorage.getItem('showElements');
</script>

{#if showElements !== 'false'}
  <div id="welcome-page">
    <h1>Welcome to Beer Explorer</h1>
    <h2>If you crave a beer, but don't know which one, you've come to the right place!</h2>
    <h3>Press the button and be inspired</h3>
    <button on:click={goToBeerPage}>Get me a random beer</button>

<style>
      
  h2 {
     color: white;
  }

  h3 {
     color: white;
  }

  button {
    font-family: Helvetica, Arial, sans-serif;
    color: white;
    background: transparent;
    border: 1px solid #F0A202;
    outline: none;
  }

  button:active {
    background-color: #F0A202;
    transform: translateY(4px);
    transition-duration: 0.2s;
  }
</style>

</div>
{:else}
<Layout>
  <QueryClientProvider client={queryClient}>
    <section class = "beer-section">
      <SingleBeer>
        <Button on:click={fetchBeer} buttonText="Fetch Random Beer"/>
      </SingleBeer>
      <Input/>
    </section>
    <SavedBeers/>
  </QueryClientProvider>
  </Layout>
{/if}

<style>
  .beer-section {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
</style>