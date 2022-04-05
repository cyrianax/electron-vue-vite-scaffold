import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron-renderer'

export default defineConfig({
  root: __dirname,
  resolve: {
    alias: {
      '@': './src',
    }
  },
  plugins: [
    vue(),
    electron()
  ],
  build: {
    sourcemap: true,
    outDir: './dist',
  },
  server: {
    host: 'localhost',
    port: 3333
  }
})
