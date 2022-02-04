import App from "./App.svelte";

import { ChartCard } from "../../shared/src/index";

customElements.define("chart-card", ChartCard);

const app = new App({
  target: document.getElementById("app"),
});

export default app;
