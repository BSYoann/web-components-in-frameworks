<script lang="ts">
  function generateRandomArray(): number[] {
    const arrayLength = 20;
    return Array.from({ length: arrayLength }, () =>
      Math.floor(Math.random() * 100)
    );
  }

  let serie: number[] = generateRandomArray();
  let bgColor = "#191919"
  let lineColor = "#2220a4"
  let width: number | string = 200;
  let height: number | string = 50;

  $: balance = serie.length > 0 ? serie[serie.length - 1] : 0;
</script>

<main>
  <div class="controls">
    <label for="width-range">Width</label>
    <input
      type="range"
      name="height-range"
      id="width-range"
      min="100"
      max="300"
      bind:value={width}
    />
    <label for="height-range">Height</label>
    <input
      type="range"
      name="height-range"
      id="height-range"
      min="40"
      max="150"
      bind:value={height}
    />
    <label for="bg-color">Background color: </label>
    <input id="bg-color" type="color" bind:value={bgColor} />
    <label for="line-color">Line color: </label>
    <input id="line-color" type="color" bind:value={lineColor} />
    <input
      type="button"
      on:click={() => serie = generateRandomArray()}
      value="Generate data"
    />
  </div>
  <chart-card
    class="balance-card"
    serie={serie}
    background-color={bgColor}
    line-color={lineColor}
    chart-width={width}
    chart-height={height}
  >
    <h2 class="balance-card__title">Balance:</h2>
    <div class="balance-card__amount">{balance} €</div>
  </chart-card>
</main>

<style>
:global(body) {
  background-color: #222;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #eaeaea;
}
.controls {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.balance-card {
  display: inline-block;
  border-radius: 1rem;
}
.balance-card__title {
  color: #e9e9e9;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.balance-card__amount {
  text-align: center;
  color: #e9e9e9;
  margin-bottom: 1rem;
}
</style>
