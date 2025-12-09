// Build script to bundle the service worker using Vite
import { build } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(__dirname, '..');

await build({
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    lib: {
      entry: resolve(root, 'src/sw.ts'),
      formats: ['es'],
      fileName: () => 'sw.js',
    },
    outDir: resolve(root, 'dist'),
    emptyOutDir: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        entryFileNames: 'sw.js',
      },
    },
  },
});

