import "./style.css";

import { ChartCard } from "../shared/dist/index.js";

customElements.define("chart-card", ChartCard);

document.querySelector("#app").innerHTML = /*HTML*/ `
<chart-card serie="12, 30, 15, 50, 35, 54, 12, 65, 35, 15"></chart-card>
`;
