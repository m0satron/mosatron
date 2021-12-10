<script lang="ts">
  let count: number = 0

  const increment = () => {
    count += 1
  }

  const remove = () => {
    count -= 1
  }

  $:doubled = count * 2

  $:if (count >= 10) {
	alert(`count is dangerously high!`);
	count = 9;
}
</script>

<button on:click={increment}>
  Clicks: {count}
  <br>
  Doubled: {doubled}
</button>

{#if count > 0}
<button on:click={remove}>
  Remove 
</button>
{/if}

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
