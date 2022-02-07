import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

import { defineConfig } from "rollup";

const isDev = process.env.ROLLUP_WATCH === "true";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: "./dist/index.js",
      format: "es",
      exports: "named",
      sourcemap: true,
      // plugins: [terser()]
    },
  ],
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
    }),
  ],
});
