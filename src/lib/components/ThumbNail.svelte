<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let src = "";
</script>

<div on:click>
  <img {src} alt="thumbnail" class="thumbnail" />
</div>

<style lang="scss">
  .thumbnail {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
  }
</style>
