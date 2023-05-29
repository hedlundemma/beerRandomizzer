<script lang="ts">
  import  '../app.css';
</script>

<nav>
  <h1>BEER</h1>
</nav>
<!-- slot is a indication that more things will be here-->

<slot />

<footer>
  <h2>BYE</h2>
</footer>

<style>
  nav, footer {
    display:flex;
    align-items: center;
    height: 9rem;
    background-color: black;
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  footer {
    margin-top: 2rem;
    color: white;
  }
</style>