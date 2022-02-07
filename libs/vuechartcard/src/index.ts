import { defineCustomElement } from "vue";
import VueChartCardCE from "./components/VueChartCard.ce.vue";
import VueTestCE from "./components/VueTest.ce.vue";

export const VueChartCard = defineCustomElement(VueChartCardCE);
export const VueTest = defineCustomElement(VueTestCE);

export function register(tagName: string) {
  customElements.define(tagName, VueChartCard);
}
