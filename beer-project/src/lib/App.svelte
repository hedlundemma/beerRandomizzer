<!-- App.svelte -->
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

  let showElements = localStorage.getItem('showElements') === 'true';

  function goToBeerPage() {
    localStorage.setItem('showElements', 'false');
  }
  
</script>

  {#if showElements}
    <h1 style="color: black;">Welcome to beer heaven</h1>
    <button on:click={goToBeerPage}>Get me a random beer</button>
{:else}
<Layout>
  <QueryClientProvider client={queryClient}>
    <section class = "beer-section">
    <Input/>
    <SingleBeer>
      <Button on:click={fetchBeer} buttonText="Fetch Random Beer"/>
    </SingleBeer>
    </section>
    <SavedBeers/>
  </QueryClientProvider>
  
  </Layout>
  {/if}

