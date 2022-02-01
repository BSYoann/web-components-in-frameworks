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
      include: ["../../shared/dist/ChartCard.js"],
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
