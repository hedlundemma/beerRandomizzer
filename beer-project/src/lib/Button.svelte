<script lang="ts">

import { type Beer, type Button } from '../types/types';

const randomButton: Button = {
  text: 'Fetch Beer',
  onClick: () => {
    // Perform submit action
  },
};
  
</script>

<button on:click = {randomButton.onClick}>{randomButton.text}</button>





  <style>
    button {
      background-color: black;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      padding: 1rem;
      color: white;
    }
  </style>