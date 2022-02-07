<template>
  <div>{{ serie }}{{ typeof serie }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    serie: Object as PropType<number[]>,
  },
});
</script>
