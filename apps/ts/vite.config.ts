import { resolve } from "node:path";
import { defineConfig } from "vite";

const docs = resolve(import.meta.dirname, "../../docs");

export default defineConfig({
  build: {
    outDir: resolve(docs, "apps/ts"),
    emptyOutDir: true,
  },
});
