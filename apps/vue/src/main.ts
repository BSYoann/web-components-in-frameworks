import { createApp } from "vue";
import App from "./App.vue";
import { ChartCard } from "@bsyoann/chartcard";
import { VueChartCard } from "@bsyoann/vue-component-lib";

customElements.define("ce-chart-card", ChartCard);
customElements.define("ce-vue-chart-card", VueChartCard);

createApp(App).mount("#app");
