import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: ['animejs/lib/anime.min.js'],
  },
  // SPA routing: all routes fallback to index.html
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
})
