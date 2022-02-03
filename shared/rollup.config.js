import { terser } from "rollup-plugin-terser";

import { defineConfig } from "rollup";

const isDev = process.env.ROLLUP_WATCH === "true";

export default defineConfig({
  input: "./src/index.js",
  output: [
    {
      file: "./dist/index.js",
      format: "es",
      sourcemap: isDev,
    },
    {
      file: "./dist/chartcard.min.js",
      format: "es",
      sourcemap: isDev,
      plugins: [terser()],
    },
  ],
});
