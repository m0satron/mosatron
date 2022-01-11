<script lang="ts">
  import MainCard from "./lib/MainCard.svelte";
  import Image from "./lib/Image.svelte";
  import { photos } from "./lib/photos.js";

  $: pic = 0;
  $: img = {
    src: `https://ucarecdn.com/${photos[pic].id}/`,
    alt: photos[pic].title,
  };

  setInterval(() => {
    pic = Math.floor(Math.random() * photos.length);
  }, 5000);
</script>

<div class="main">
  <div class="title-wrapper">
    <h3 class="title">Mosa Mazroui-Sebdani</h3>
    <h3 class="title">{img.alt}</h3>
  </div>
  <MainCard>
    <Image {img} />
  </MainCard>
</div>

<style lang="sass">

  .main
    display: flex
    flex-direction: column
    align-items: center

  .title
    color: white
    font-weight: 200
  
  .title-wrapper
    display: flex
    width: 100%
    max-width: 600px
    justify-content: space-between
    
  :root 
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif
    background-color: #c5decd
  p 
    max-width: 14rem
    margin: 1rem auto
    line-height: 1.35
  

  @media (min-width: 480px)     
    p 
      max-width: none
</style>
