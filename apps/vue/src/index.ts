import { defineCustomElement } from "vue";
import VueChartCardCE from "./components/VueChartCard.ce.vue";

export const VueChartCard = defineCustomElement(VueChartCardCE);

export function register(tagName: string) {
  customElements.define(tagName, VueChartCard);
}
