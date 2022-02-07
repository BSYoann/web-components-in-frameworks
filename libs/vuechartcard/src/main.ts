import { createApp, defineCustomElement } from "vue";
import App from "./App.vue";
import VueChartCardCE from "./components/VueChartCard.ce.vue";

const VueChartCard = defineCustomElement(VueChartCardCE);
customElements.define("ce-vue-chart-card", VueChartCard);

createApp(App).mount("#app");
