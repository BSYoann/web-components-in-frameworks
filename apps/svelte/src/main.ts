import App from "./App.svelte";

import { ChartCard } from "@bsyoann/chartcard";
import { VueChartCard } from "@bsyoann/vue-component-lib";

customElements.define("chart-card", ChartCard);
// @ts-ignore
customElements.define("vue-chart-card", VueChartCard);

const app = new App({
  target: document.getElementById("app"),
});

export default app;
