<script>
  export let title = "";
  export let content = "";
  export let image = "";

  export let src = image;
</script>

<div class="card {$$props.class}">
  {#if image}
    <div class="card-image">
      <img {src} alt="Card" />
    </div>
  {/if}

  <div class="card-content">
    <h2 class="title">{title}</h2>
    <div class="divider"></div>
    <p>{content}</p>
  </div>
</div>

<style lang="scss">
  .card {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(10px);
    border-radius: 0.6rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .card-image {
      width: 50%;
    }

    img {
      border-radius: 8px;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .card-content {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      .title {
        width: 100%;
        text-align: center;
        font-weight: bold;
      }
    }
  }

  @media (min-width: 768px) {
    .card {
      flex-direction: row;
    }
  }

  .divider {
    width: 40%;
    height: 1px;
    background: #3a4f7f;
    margin: 1rem 0;
  }
</style>
