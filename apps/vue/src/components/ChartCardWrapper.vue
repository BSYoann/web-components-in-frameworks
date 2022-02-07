<template>
  <ce-chart-card
    .serie="serie"
    :background-color="backgroundColor"
    :line-color="lineColor"
    :chart-width="chartWidth"
    :chart-height="chartHeight"
  >
    <slot></slot>
  </ce-chart-card>
</template>

<script lang="ts" setup>
defineProps<{
  serie: number[];
  backgroundColor?: string;
  lineColor?: string;
  chartWidth?: number | string;
  chartHeight?: number | string;
}>();
</script>
