<script lang="ts">
import {type Button } from '../types/types';

 const RandomButton: Button = {
  text: 'Fetch Random Beer',
 
};
</script>

<button on:click>
  {RandomButton.text}
</button>

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

 