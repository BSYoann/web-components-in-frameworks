import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ChartCard } from '../../shared/dist/chartcard.min.js';

customElements.define("chart-card", ChartCard);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
