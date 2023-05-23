<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
  import Layout from './Layout.svelte';
  import Button from './Button.svelte';

  const queryClient = new QueryClient();

</script>

<QueryClientProvider client={queryClient}>
  <Layout />
 <Button on:click></Button>
</QueryClientProvider>

  


