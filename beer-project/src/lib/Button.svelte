<script lang = "ts">
   import { createQuery } from '@tanstack/svelte-query';
   import { SvelteComponentTyped } from 'svelte';

   export type ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
  }
 
</script>

<button on:click>
    <slot />
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