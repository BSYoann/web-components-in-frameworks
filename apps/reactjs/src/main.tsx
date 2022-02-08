import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ChartCard } from '@bsyoann/chartcard';
import { VueChartCard } from '../../../libs/vue-component-lib/dist/vue-ce.es.js';

customElements.define("chart-card", ChartCard);
customElements.define("vue-chart-card", VueChartCard);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
