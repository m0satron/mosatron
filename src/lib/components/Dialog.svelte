<script>
  import Card from "$lib/components/Card.svelte";
  export let image = "";
  export let title = "";
  export let content = "";

  export let isOpen = false;
  export let isLoading = true;

  function closeDialog() {
    isOpen = false;
  }
</script>

{#if isOpen}
  <div class="dialog-container">
    <div class="dialog-backdrop" on:click={closeDialog}></div>
    {#if $$slots.default}
      <div class="dialog-content">
        <slot />
      </div>
    {:else}
      <Card {title} {content} class="dialog-content" {image} />
    {/if}
  </div>
{/if}

<style>
  .dialog-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
  }
  .dialog-content {
    width: fit-content;
    height: auto;
    position: relative;
    background: transparent;
    z-index: 2;
  }
</style>
