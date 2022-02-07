<template>
  <div class="controls">
    <label for="width-range">Width</label>
    <input type="range" name="height-range" id="width-range" min="100" max="300" v-model="width" />
    <label for="height-range">Height</label>
    <input type="range" name="height-range" id="height-range" min="40" max="150" v-model="height" />
    <label for="bg-color">Background color: </label>
    <input id="bg-color" type="color" v-model="bgColor" />
    <label for="line-color">Line color: </label>
    <input id="line-color" type="color" v-model="lineColor" />
    <input type="button" @click="serie = generateRandomArray()" value="Generate data" />
  </div>
  <ce-chart-card
    class="balance-card"
    :serie.prop="serie"
    :background-color="bgColor"
    :line-color="lineColor"
    :chart-width="width"
    :chart-height="height"
  >
    <h2 class="balance-card__title">Balance:</h2>
    <div class="balance-card__amount">{{ currentBalance }} €</div>
  </ce-chart-card>
  <ChartCardWrapper
    class="balance-card"
    :serie="serie"
    :background-color="bgColor"
    :line-color="lineColor"
    :chart-width="width"
    :chart-height="height"
  >
    <h2 class="balance-card__title">Balance:</h2>
    <div class="balance-card__amount">{{ currentBalance }} €</div>
  </ChartCardWrapper>
  <ce-vue-chart-card
    class="balance-card"
    :serie.prop="serie"
    :background-color="bgColor"
    :line-color="lineColor"
    :chart-width="width"
    :chart-height="height"
  >
    <h2 class="balance-card__title">Balance:</h2>
    <div class="balance-card__amount">{{ currentBalance }} €</div>
  </ce-vue-chart-card>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import ChartCardWrapper from "./components/ChartCardWrapper.vue";

const width = ref(200);
const height = ref(100);

const lineColor = ref("#2220a4");
const bgColor = ref("#191919");

function generateRandomArray() {
  const arrayLength = 20;
  return Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 100));
}

const serie = ref<number[]>(generateRandomArray());
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
