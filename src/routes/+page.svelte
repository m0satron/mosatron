<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Button from "$lib/components/Button.svelte";
  import Parallax from "$lib/components/Parallax.svelte";
  import { images } from "$lib/images.js";

  export let image = "";
  export let title = "";
  export let content = "";

  const index = Math.floor(Math.random() * images.length);
  const currentImage = images[index];

  const imageURL = `${import.meta.env.VITE_CDN_URL}/${
    currentImage.id
  }/-/quality/smart_retina/-/format/auto/`;

  const text = currentImage.title;
</script>

<Parallax speed={0.3} {imageURL}>
  <div>
    <h1>{text}</h1>
    <a href="/works">
      <Button label="See all works" icon="arrow_forward"></Button></a
    >
  </div>
</Parallax>
