<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import Layout from './Layout.svelte';
  import Button from './Button.svelte';

  const queryClient = new QueryClient();

  async function fetchBeer(): Promise<void> {
  await queryClient.refetchQueries(['beers']);
}
</script>

<QueryClientProvider client={queryClient}>
  <Layout />
 <Button on:click={fetchBeer}>Fetch Beer</Button>
</QueryClientProvider>