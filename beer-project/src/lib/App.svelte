<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  
  import Layout from './Layout.svelte';
  import Button from './Button.svelte';
  import Input from './Input.svelte';
  import type { Beer } from '../types/types';
  import '../app.css';
 
 

  const queryClient = new QueryClient();

async function fetchBeer(): Promise<Beer[]> {
  const data = await queryClient.fetchQuery(['beers']);
  return data as Beer[];
  
}
</script>
<Layout>
<QueryClientProvider client={queryClient}>
  <section class = "beer-section">
  <Button on:click={fetchBeer}></Button>
  <Input/>
</section>

</QueryClientProvider>


</Layout>