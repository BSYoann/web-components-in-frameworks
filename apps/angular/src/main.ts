import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { ChartCard } from '@bsyoann/chartcard';
// @ts-ignore
import { VueChartCard } from '../../../libs/vuechartcard/dist/index.es.js';

customElements.define('chart-card', ChartCard);
customElements.define('vue-chart-card', VueChartCard);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
