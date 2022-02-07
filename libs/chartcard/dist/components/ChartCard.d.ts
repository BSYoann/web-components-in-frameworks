declare const observedAttributesArray: readonly ["serie", "line-color", "background-color", "chart-width", "chart-height"];
declare type ObservedAttribute = typeof observedAttributesArray[number];
export default class ChartCard extends HTMLElement {
    private _serie;
    private _chartWidth;
    private _chartHeight;
    private _lineColor;
    private _backgroundColor;
    private _chart;
    private _oldData;
    private _shadowRoot;
    static get observedAttributes(): readonly ["serie", "line-color", "background-color", "chart-width", "chart-height"];
    get chartWidth(): string | number;
    set chartWidth(value: string | number);
    get chartHeight(): string | number;
    set chartHeight(value: string | number);
    get serie(): string | number[];
    set serie(value: string | number[]);
    private get series();
    get lineColor(): string;
    set lineColor(value: string);
    get backgroundColor(): string;
    set backgroundColor(value: string);
    constructor();
    connectedCallback(): void;
    /**
     *  triggered on mount, and every time an observed attribute change
     * @param {ObservedAttribute} attributeName
     * @param {string} oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(attributeName: ObservedAttribute, oldValue: string, newValue: string): void;
}
export {};
//# sourceMappingURL=ChartCard.d.ts.map