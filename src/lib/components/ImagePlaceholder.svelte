<script lang="ts">
  export let size: { width: number; height: number } = {
    width: 60,
    height: 60,
  };
</script>

<div
  class="placeholder"
  style="width: {size.width}px; height: {size.height}px;"
>
  <svg viewBox="0 0 50 50">
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"
    ></circle>
  </svg>
</div>

<style>
  .placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    animation: rotate 2s linear infinite;
    width: 100%;
    height: 100%;
  }
  .path {
    stroke: #565656;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
</style>
