import { fileURLToPath, URL } from "url";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    coverage: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
      reporter: ["json", "html"],
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/BtComponents.ts",
      formats: ["es", "cjs"],
      name: "BtComponents",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ["src/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: ["vite.config.ts"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
