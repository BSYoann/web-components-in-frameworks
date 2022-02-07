import App from "./App.svelte";

import { ChartCard } from "@bsyoann/chartcard";

customElements.define("chart-card", ChartCard);

const app = new App({
  target: document.getElementById("app"),
});

export default app;
