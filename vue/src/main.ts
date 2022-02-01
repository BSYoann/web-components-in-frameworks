import { createApp } from "vue";
import App from "./App.vue";
import { ChartCard } from "../../shared/dist/index.js";

customElements.define("ce-chart-card", ChartCard);

createApp(App).mount("#app");
