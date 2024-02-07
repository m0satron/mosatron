<script>
  export let src = "";
</script>

<div on:click>
  <img {src} alt="thumbnail" class="thumbnail {$$props.class}" />
</div>

<style lang="scss">
  .thumbnail {
    width: 200px;
    max-width: 100%;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .thumbnail {
      width: 100%;
    }
  }
</style>
