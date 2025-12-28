import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
    },
  },
})
