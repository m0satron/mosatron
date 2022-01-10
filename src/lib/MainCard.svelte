<script lang="ts">
</script>

<div class="main-card">
  <slot />
</div>

<style lang="sass">

.main-card

  @media (min-width: 600px)
    height: 600px
    width: 600px


  width: 100%
  height: 300px

   
  // border-radius: 6px
  // margin: 12px
  // padding: 6px
  -webkit-box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.55)
  box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.55)
  background-color: white
</style>
