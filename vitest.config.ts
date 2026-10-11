import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  // Note: @vitejs/plugin-react is intentionally omitted — it fails to load
  // against the pinned Vite version (vite/internal subpath mismatch).
  // esbuild handles JSX via the automatic runtime instead.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
    },
  },
})
