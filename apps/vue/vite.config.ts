import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("ce-"),
        },
      },
    }),
    viteCommonjs({
      include: ["bsyoann/chartcard"],
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: "es6",
    // Leave minification up to applications.
    minify: false,
  },
});
