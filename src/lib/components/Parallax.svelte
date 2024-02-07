<script lang="ts">
  import { onMount } from "svelte";

  export let speed = 0.5;
  export let imageURL = "";
  export let height = "50vh";
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
    right: 1rem;
    width: fit-content;
    height: 80%;
    margin-top: 1rem;
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

  @media (max-width: 768px) {
    .text-content {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      left: 1rem;
      width: auto;
      height: auto; /* Adjust height automatically */
      margin-top: 0;
      justify-content: flex-start; /* Align content to the top */
      padding: 1rem 0; /* Adjust padding */
      flex-direction: column-reverse; /* Flip direction to put the title on top */
    }
  }
</style>
