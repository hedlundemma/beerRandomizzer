<script type = "ts">
   
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