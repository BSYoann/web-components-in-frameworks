import App from "./App.svelte";

import ChartCard from "../../shared/src/components/ChartCard";

customElements.define("chart-card", ChartCard);

const app = new App({
  target: document.getElementById("app"),
});

export default app;
