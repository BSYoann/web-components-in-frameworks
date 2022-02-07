<template>
  <div id="card-root" ref="rootRef" class="card">
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="display: block">
      <defs>
        <linearGradient id="Gradient1">
          <stop class="grad-bg" offset="0%" stop-color="currentColor" />
          <stop class="grad-line" offset="10%" stop-color="currentColor" />
          <stop class="grad-line" offset="90%" stop-color="currentColor" />
          <stop class="grad-bg" offset="100%" stop-color="currentColor" />
        </linearGradient>
      </defs>
    </svg>
    <div class="header">
      <slot></slot>
    </div>
    <div id="chart-container" ref="chartContainerRef" class="chart"></div>
  </div>
</template>

<script lang="ts" setup>
import Chartist, { IChartistLineChart } from "chartist";
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps<{
  serie: number[];
  backgroundColor?: string;
  lineColor?: string;
  chartWidth?: number | string;
  chartHeight?: number | string;
}>();

const chart = ref<IChartistLineChart>();
const rootRef = ref<HTMLElement>();
const chartContainerRef = ref<HTMLElement | undefined>();
let oldData: any = null;

const series = computed(() => (props.serie ? [props.serie] : [[]]));

watch(
  () => props.serie,
  () => {
    chart.value?.update({ series: series.value });
  }
);
watch(
  () => props.lineColor,
  (newValue) => {
    if (rootRef.value?.style && newValue) {
      rootRef.value.style.setProperty("--line-color", newValue);
    }
  }
);
watch(
  () => props.backgroundColor,
  (newValue) => {
    if (rootRef.value?.style && newValue) {
      rootRef.value.style.setProperty("--bg-color", newValue);
    }
  }
);
watch(
  () => props.chartWidth,
  (newValue) => {
    // @ts-ignore
    chart.value?.update(null, { width: newValue }, true);
  }
);
watch(
  () => props.chartHeight,
  (newValue) => {
    // @ts-ignore
    chart.value?.update(null, { height: newValue }, true);
  }
);

onMounted(() => {
  const data = {
    series: series.value,
  };
  const options = {
    height: props.chartHeight,
    width: props.chartWidth,
    showPoint: false,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 20,
    },
    axisX: {
      offset: 0,
      showGrid: false,
      showLabel: false,
    },
    axisY: {
      offset: 0,
      showGrid: false,
      showLabel: false,
    },
  };

  chart.value = new Chartist.Line(chartContainerRef.value, data, options);

  chart.value.on("draw", (data: any) => {
    if (data.type === "line") {
      let fromAnimation = data.path
        .clone()
        .scale(1, 0)
        .translate(0, data.chartRect.height())
        .stringify();
      if (oldData !== null) {
        fromAnimation = oldData.path.clone().stringify();
      }
      data.element.animate({
        d: {
          begin: 2000 * data.index,
          dur: 2000,
          from: fromAnimation,
          to: data.path.clone().stringify(),
          easing: Chartist.Svg.Easing.easeOutQuint,
        },
      });
      oldData = data;
    }
  });
});
</script>

<style>
:host {
  --bg-color: #191919;
  --line-color: #2220a4;

  display: inline-block;
  overflow: hidden;
  border-radius: 1rem;
}
.card {
  min-width: min-content;
  width: fit-content;
  padding: 0.5rem;
  background: var(--bg-color, #fff);
}
.chart,
.ct-chart-line {
  width: 100%;
  height: 100%;
}
.ct-line {
  stroke: var(--line-color, #000);
  stroke: url(#Gradient1);
  fill: none;
  stroke-width: 5px;
}

.grad-bg {
  color: var(--bg-color, #fff);
}
.grad-line {
  color: var(--line-color, #000);
}
</style>
