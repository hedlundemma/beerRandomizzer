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
    <h1 class="welcome-page">Welcome to Beer Explorer</h1>
    <h2 class="welcome-page">If you crave a beer, but don't know which one, you've come to the right place!</h2>
    <h3 class="welcome-page">Press the button and be inspired</h3>
    <button class="welcome-button" on:click={goToBeerPage}>Get me a random beer</button>
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