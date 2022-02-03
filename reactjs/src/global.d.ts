import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "chart-card": any;
      // React.DetailedHTMLProps<
      //   React.HTMLAttributes<HTMLElement>,
      //   HTMLElement
      // >;
    }
  }
}
