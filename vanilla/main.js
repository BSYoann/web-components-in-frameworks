import "./style.css";

import { ChartCard } from "../shared/dist/index.js";

customElements.define("chart-card", ChartCard);

const balanceCard = document.createElement("chart-card");
balanceCard.serie = [12, 30, 15, 50, 35, 54, 12, 65, 35, 15];
balanceCard.backgroundColor = "#4F4540";
balanceCard.lineColor = "#A22920";
balanceCard.chartWidth = 200;
balanceCard.chartHeight = 50;
balanceCard.innerHTML = `
<h2 class="balance-card__title">Balance:</h2>
<div class="balance-card__amount">15 €</div>
`;

document.body.appendChild(balanceCard);
