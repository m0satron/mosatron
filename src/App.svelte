<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import MainCard from "./lib/MainCard.svelte";

  const photos = [
    {
      id: "9160f315-387c-4cda-b67c-474f343afc36",
      title: "Colors are fun 2",
    },
    {
      id: "e37e611d-fefb-4a6d-bef2-40fbef0893e0",
      title: "Things etc",
    },
    {
      id: "41e84568-a090-4660-b11d-6812cf0edb96",
      title: "Fake moray and stuff",
    },
    {
      id: "112bb03b-f003-460f-ad52-4ab696888a12",
      title: "Why is reality escaping entropy",
    },
    {
      id: "c70f3058-0c5a-4f48-a48b-1c760434bdb1",
      title: "Colors are fun",
    },
  ];
  $: pic = 0;
  $: img = {
    src: `https://ucarecdn.com/${photos[pic].id}/-/preview/600x600/-/quality/best/`,
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
    <img src={img.src} alt={img.alt} />
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
    width: 600px
    justify-content: space-between
    
  :root 
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif
    background-color: #c5decd

  // main 
  //   text-align: center
  //   padding: 1em
  //   margin: 0 auto

  // h1 
  //   color: #ff3e00
  //   text-transform: uppercase
  //   font-size: 4rem
  //   font-weight: 100
  //   line-height: 1.1
  //   margin: 2rem auto
  //   max-width: 14rem
  

  p 
    max-width: 14rem
    margin: 1rem auto
    line-height: 1.35
  

  @media (min-width: 480px) 
    // h1 
    //   max-width: none
    

    p 
      max-width: none
</style>
