import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: 'terser'
  },
  server: {
    open: true,
    port: 5173
  }
})
