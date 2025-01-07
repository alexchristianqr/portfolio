import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: false, // Desactiva completamente los source maps
  },
  plugins: [vue()],
  base: '/portfolio/', // Set the base path
})
