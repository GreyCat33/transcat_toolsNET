import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Bread: Added Proxy to avoid CORS issues during development
// At the SPA level we just call /api/whatever and that will map it to this proxy
export default defineConfig(({ command }) => ({

  root: "./",
  plugins: [react()],
  build: {
    outDir: '../wwwroot/',
    emptyOutDir: true, 
    rollupOptions: {
      input: "./index.html",  
    }
  },

  //Only add the proxy if we are running the dev server
  ...(command === 'serve' && {
    server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5100',
        changeOrigin: true
      }
    }
  },
  }

  )
}))


