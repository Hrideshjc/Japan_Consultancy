import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
  if (id.includes('node_modules')) {
    if (
      id.includes('react-dom') ||
      id.includes('react-router-dom') ||
      id.includes('/react/')
    ) {
      return 'vendor';
    }
    if (id.includes('framer-motion')) {
      return 'animations';
    }
    if (id.includes('react-icons')) {
      return 'icons';
    }
  }
},
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
  server: {
    middlewareMode: false,
  },
})
