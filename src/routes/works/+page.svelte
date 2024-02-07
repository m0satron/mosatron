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
      image: `${cdnUrl}/${image.id}/-/resize/400x/`,
    };
    showDialog();
  }
</script>

<div class="thumnail-container">
  {#each images as img}
    <ThumbNail
      src={`${cdnUrl}/${img.id}/-/resize/200x/`}
      on:click={() => selectImage(img)}
    />
  {/each}

  <Dialog bind:isOpen={isDialogOpen} {...selectedImage}></Dialog>
</div>

<style lang="scss">
  .thumnail-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
</style>
