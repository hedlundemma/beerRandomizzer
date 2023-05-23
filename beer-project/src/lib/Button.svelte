<script lang = "ts">
   import { createQuery } from '@tanstack/svelte-query';
   import { SvelteComponentTyped } from 'svelte';
   import Layout from './Layout.svelte';
   export let role = 'button';
</script>

<button {role} on:click>
  <slot/>
</button>

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