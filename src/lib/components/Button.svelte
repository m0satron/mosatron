<script>
  export let icon = null; // Optional icon URL or SVG path
  export let label = ""; // Button label text
</script>

<button class="button">
  {#if icon}
    <span class="button-icon">{icon}</span>
  {/if}
  {label}
</button>

<style>
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px; /* Space between icon and text */
    padding: 8px 16px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white; /* Adjust based on your design */
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .button-icon {
    width: 24px;
    height: 24px;
    font-family: "Material Icons";
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>
