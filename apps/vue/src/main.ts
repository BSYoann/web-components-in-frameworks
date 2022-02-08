import { createApp, defineCustomElement } from "vue";
import App from "./App.vue";
import { ChartCard } from "@bsyoann/chartcard";
import { VueChartCard } from "../../../libs/vue-component-lib/dist/vue-ce.es.js";

customElements.define("ce-chart-card", ChartCard);
customElements.define("ce-vue-chart-card", VueChartCard);

createApp(App).mount("#app");
