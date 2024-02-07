<script>
  import { onMount } from "svelte";

  export let speed = 0.5; // Control the speed of the foreground text movement
  export let imageURL = ""; // Background image URL passed as a prop
  export let height = "50vh"; // Height of the parallax container
  let yPos = 0;

  const updatePosition = () => {
    yPos = window.scrollY * speed;
  };

  onMount(() => {
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  });
</script>

<div
  class="parallax-container"
  style="background-image: url('{imageURL}'); --height: {height};"
>
  <div class="text-content" style="--yPos: {yPos}">
    <slot />
  </div>
</div>

<style>
  .parallax-container {
    position: relative;
    overflow: hidden;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: var(--height);
    border-radius: 8px;
  }

  .text-content {
    position: absolute;
    right: 2%;
    width: fit-content;
    height: 60%;
    margin-top: 7vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    will-change: transform;
    transform: translate3d(0, calc(var(--yPos) * 1px), 0);
  }
</style>
