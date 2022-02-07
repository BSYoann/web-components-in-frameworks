import { createApp, defineCustomElement } from "vue";
import App from "./App.vue";
import { ChartCard } from "@bsyoann/chartcard";
// import VueChartCard from "./components/VueChartCard.ce.vue";
import VueChartCard from "./components/VueChartCard.ce.vue";
customElements.define("ce-chart-card", ChartCard);

const VueChartCardCE = defineCustomElement(VueChartCard);

customElements.define("ce-vue-chart-card", VueChartCardCE);

createApp(App).mount("#app");
