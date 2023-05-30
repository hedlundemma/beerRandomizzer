<script>
  export let buttonText;
</script>

<button on:click>{buttonText}</button>

<style>
  button {
    width: 20rem;
    height: 4rem;
    background-color: black;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem;
    color: white;
    margin-bottom: 2rem;
  }
</style>