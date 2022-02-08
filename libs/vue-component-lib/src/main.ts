import { createApp, defineCustomElement } from "vue";
import App from "./App.vue";
import VueChartCard from "./components/VueChartCard.ce.vue";

customElements.define("vue-chart-card", defineCustomElement(VueChartCard));

createApp(App).mount("#app");
