import { defineConfig } from 'vite';

export default defineConfig({
  base: '/apps/ts/',
  build: {
    outDir: '../../docs/apps/ts',
    emptyOutDir: true,
  },
});