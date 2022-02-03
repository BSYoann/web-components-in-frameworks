import { createApp } from "vue";
import App from "./App.vue";
import ChartCard from "../../shared/src/components/ChartCard";

customElements.define("ce-chart-card", ChartCard);

createApp(App).mount("#app");
