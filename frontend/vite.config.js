import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve }     from 'path';
// https://vite.dev/config/
// Bread: Added Proxy to avoid CORS issues during development
// At the SPA level we just call /api/whatever and that will map it to this proxy
// the command below only works for dev, proxy dropped when building app
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
resolve:{
  alias:{
    "~": resolve(__dirname,"src")
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


