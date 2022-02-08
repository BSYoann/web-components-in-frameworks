import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { ChartCard } from '@bsyoann/chartcard';
import { VueChartCard } from '@bsyoann/vue-component-lib';

customElements.define('chart-card', ChartCard);
customElements.define('vue-chart-card', VueChartCard);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
