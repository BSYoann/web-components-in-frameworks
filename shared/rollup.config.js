import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

import { defineConfig } from "rollup";

const isDev = process.env.ROLLUP_WATCH === "true";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: "./dist/chartcard.js",
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
  plugins: [typescript({ target: "es6" })],
});
