<template>
  <button @click="serie = generateRandomArray()">Generate data</button>
  <label for="width-range">Width</label>
  <input
    type="range"
    name="height-range"
    id="width-range"
    min="100"
    max="300"
    v-model="width"
  />
  <label for="height-range">Height</label>
  <input
    type="range"
    name="height-range"
    id="height-range"
    min="40"
    max="150"
    v-model="height"
  />
  <input type="color" v-model="lineColor" />
  <ce-chart-card
    class="line-chart"
    :serie.prop="serie"
    background-color="#191919"
    :line-color="lineColor"
    :width="width"
    :height="height"
  >
    <h2 class="card-header">Balance:</h2>
    <div style="text-align: center; color: #e9e9e9">
      {{ serie[serie.length - 1] }} €
    </div>
  </ce-chart-card>
  <ce-chart-card serie="13, 54, 34"></ce-chart-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const width = ref(200);
const height = ref(100);

const lineColor = ref("#2220a4");

function generateRandomArray() {
  const arrayLength = 10;
  return Array.from({ length: arrayLength }, () =>
    Math.floor(Math.random() * 100)
  );
}

const serie = ref<Array<number | string>>([
  12, 30, 15, 50, 35, 54, 12, 65, 35, 15,
]);
</script>

<style>
body {
  background-color: #222;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #eaeaea;
}
.card-header {
  color: #e9e9e9;
}
</style>
