import App from "./App.svelte";

import { ChartCard } from "@bsyoann/chartcard";
import { VueChartCard, VueTest } from "../../../libs/vuechartcard/dist/index.es.js";

customElements.define("chart-card", ChartCard);
customElements.define("vue-chart-card", VueChartCard);
customElements.define("vue-test", VueTest);

const app = new App({
  target: document.getElementById("app"),
});

export default app;
