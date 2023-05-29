<script>
  export let buttonText;
</script>

<button on:click>{buttonText}</button>

<style>
  button {
    background-color: black;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem;
    color: white;
    margin-bottom: 2rem;
  }
</style>