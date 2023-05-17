<script lang="ts">
    import { createQuery } from '@tanstack/svelte-query'
  
    // This data is cached by prefetchQuery in +page.ts so no fetch actually happens here
    const query = createQuery({
      queryKey: ['beers'],
      queryFn: async () => (await fetch('/https://api.punkapi.com/v2/beers')).json()
    })
  </script>