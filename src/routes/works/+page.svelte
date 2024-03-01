<script lang="ts">
  import ThumbNail from "$lib/components/ThumbNail.svelte";
  import Dialog from "$lib/components/Dialog.svelte";
  import { images } from "$lib/images.js";

  const cdnUrl = import.meta.env.VITE_CDN_URL;

  let isDialogOpen = false;
  const showDialog = () => (isDialogOpen = true);

  interface Image {
    id: string;
    title: string;
    content: string;
    image: string;
  }

  let selectedImage: Image = {
    id: "",
    title: "",
    content: "",
    image: "",
  };

  function selectImage(image: Partial<Image>) {
    selectedImage = {
      ...image,
      image: `${cdnUrl}/${image.id}/-/resize/600x/`,
    };
    showDialog();
  }
</script>

<div class="thumnail-container">
  {#each images as img}
    <ThumbNail
      class="thumbnail-item"
      src={`${cdnUrl}/${img.id}/-/resize/400x/`}
      on:click={() => selectImage(img)}
    />
  {/each}

  <Dialog bind:isOpen={isDialogOpen} {...selectedImage}></Dialog>
</div>

<style lang="scss">
  .thumnail-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
