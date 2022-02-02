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
    :chart-width="width"
    :chart-height="height"
  >
    <h2 class="card-header">Balance:</h2>
    <div class="balance-amount">{{ currentBalance }} €</div>
  </ce-chart-card>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const width = ref(200);
const height = ref(100);

const lineColor = ref("#2220a4");

function generateRandomArray() {
  const arrayLength = 20;
  return Array.from({ length: arrayLength }, () =>
    Math.floor(Math.random() * 100)
  );
}

const serie = ref<Array<number | string>>(generateRandomArray());
const currentBalance = computed(() => {
  const length = serie.value.length;
  return length > 0 ? serie.value[length - 1] : 0;
});
</script>

<style>
body {
  background-color: #222;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #eaeaea;
}
.line-chart {
  display: inline-block;
}
.card-header {
  color: #e9e9e9;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.balance-amount {
  text-align: center;
  color: #e9e9e9;
  margin-bottom: 1rem;
}
</style>
