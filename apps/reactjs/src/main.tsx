import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ChartCard } from '@bsyoann/chartcard';
import { VueChartCard, VueTest } from '../../../libs/vuechartcard/dist/index.es.js';

console.log(VueChartCard);

customElements.define("chart-card", ChartCard);
// customElements.define("vue-chart-card", VueChartCard);
customElements.define("vue-test", VueTest);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
