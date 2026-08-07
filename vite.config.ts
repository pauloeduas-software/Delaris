import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  base: '/Delaris/',
  plugins: [
    react(), 
    tailwindcss(),
    legacy({
      targets: ['defaults', 'not IE 11', 'Safari >= 12', 'iOS >= 12']
    })
  ],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: {
        safari: (12 << 16),
        ios_saf: (12 << 16)
      }
    }
  },
  build: {
    target: 'es2015',
    cssTarget: 'safari12',
    cssMinify: 'lightningcss'
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
