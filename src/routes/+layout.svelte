<script>
  import NavBar from "$lib/components/NavBar.svelte";
  import "../styles/global.scss";
</script>

<NavBar />

<div class="content">
  <slot />
</div>

<style lang="scss">
  .content {
    margin-top: 2rem;
  }
</style>
