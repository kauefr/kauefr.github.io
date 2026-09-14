import { resolve } from "node:path";
import { defineConfig } from "vite";

const root = import.meta.dirname;
const docs = resolve(import.meta.dirname, "../../../docs");

export default defineConfig({
  root: root,
  build: {
    lib: {
      entry: resolve(root, "app-dispatcher.ts"),
      name: "AppDispatcher",
      formats: ["iife"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    outDir: docs,
    emptyOutDir: false,
  },
});
