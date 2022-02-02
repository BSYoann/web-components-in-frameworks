// import chartistStyle from "../style/chartist.min.css";
import Chartist from "https://cdn.skypack.dev/chartist";

const template = document.createElement("template");
template.innerHTML = /*html*/ `
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
    }
    :host {
      --bg-color: #191919;
      --line-color: #2220a4;

      display: block;
    }
    .card {
      min-width: min-content;
      width: fit-content;
      padding: 0.5rem;
      border-radius: 1rem;
      background: var(--bg-color, #FFF);
    }
    .chart, .ct-chart-line {
      width: 100%;
      height: 100%;
    }
    .ct-line {
      stroke: var(--line-color, #000);
      stroke: url(#Gradient1);
      fill: none;
      stroke-width: 5px;
    }

    .grad-bg {
      color: var(--bg-color, #FFF);
    }
    .grad-line {
      color: var(--line-color, #000);
    }
  </style>
  <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" >
    <defs>
      <linearGradient id="Gradient1">
        <stop class="grad-bg" offset="0%" stop-color="currentColor"/>
        <stop class="grad-line" offset="10%" stop-color="currentColor"/>
        <stop class="grad-line" offset="90%" stop-color="currentColor"/>
        <stop class="grad-bg" offset="100%" stop-color="currentColor"/>
      </linearGradient>
    </defs>
  </svg>
  <div id="card-root" class="card">
    <div class="header">
      <slot></slot>
    </div>
    <div id="chart-container" class="chart"></div>
  </div>
`;

export default class ChartCard extends HTMLElement {
  static get observedAttributes() {
    return ["serie", "line-color", "background-color", "width", "height"];
  }

  get width() {
    return this._width;
  }
  set width(value) {
    this._width = value;
    this.setAttribute("width", value);
  }
  get height() {
    return this._height;
  }
  set height(value) {
    this._height = value;
    this.setAttribute("height", value);
  }

  get serie() {
    return this._serie;
  }
  set serie(value) {
    if (typeof value === "string") {
      value = value.split(", ").map((e) => parseInt(e, 10));
    }
    this._serie = value;
    this.setAttribute("serie", value);
  }

  get series() {
    return this.serie ? [this.serie] : [[]];
  }

  get lineColor() {
    return this._lineColor;
  }
  set lineColor(value) {
    this._lineColor = value;
    this.setAttribute("line-color", value);
  }

  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    this._backgroundColor = value;
    this.setAttribute("background-color", value);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // we don't really need the library style since we simply use line chart
    // chartistStyle.use({ target: this.shadowRoot });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const chartContainer = this.shadowRoot.querySelector("#chart-container");

    const data = {
      series: this.series,
    };

    const options = {
      height: this.height,
      width: this.width,
      showPoint: false,
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 20,
      },
      axisX: {
        offset: 0,
        showGrid: false,
        showLabel: false,
      },
      axisY: {
        offset: 0,
        showGrid: false,
        showLabel: false,
      },
    };

    this._chart = new Chartist.Line(chartContainer, data, options);

    this._chart.on("draw", (data) => {
      if (data.type === "line") {
        let fromAnimation = data.path
          .clone()
          .scale(1, 0)
          .translate(0, data.chartRect.height())
          .stringify();
        if (this._oldData) {
          fromAnimation = this._oldData.path.clone().stringify();
        }
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: fromAnimation,
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint,
          },
        });
        this._oldData = data;
      }
    });
  }

  /**
   *  triggered on mount, and every time an observed attribute change
   * @param {string} attributeName
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (this._chart && attributeName === "serie") {
      this._chart.update({ series: this.series });
    } else if (attributeName === "line-color") {
      this.style.setProperty("--line-color", newValue);
    } else if (attributeName === "background-color") {
      this.style.setProperty("--bg-color", newValue);
    } else if (this._chart && attributeName === "width") {
      this._chart.update(null, { width: newValue }, true);
    } else if (this._chart && attributeName === "height") {
      this._chart.update(null, { height: newValue }, true);
    }
  }
}
