import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "chart-card": any;
      "vue-chart-card": any;
      "ce-chart-card": any;
      "vue-test": any;
      // React.DetailedHTMLProps<
      //   React.HTMLAttributes<HTMLElement>,
      //   HTMLElement
      // >;
    }
  }
}
