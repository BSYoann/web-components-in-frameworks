import { createApp } from "vue";
import App from "./App.vue";
import { ChartCard } from "@bsyoann/chartcard";

customElements.define("ce-chart-card", ChartCard);

createApp(App).mount("#app");
