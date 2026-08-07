import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',

    // Inline tiny assets as base64
    assetsInlineLimit: 4096,

    // CSS code-splitting
    cssCodeSplit: true,

    // Source maps off in production
    sourcemap: false,

    // Chunk splitting strategy for optimal caching
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — cached independently
          'react-vendor': ['react', 'react-dom'],

          // Router — cached independently
          'router': ['react-router-dom'],

          // Animation library — largest dep, isolated
          'framer': ['framer-motion'],

          // Icons — tree-shaken but still chunked
          'icons': ['react-icons'],

          // Email service
          'email': ['@emailjs/browser'],
        },
        // Asset file naming for long-term caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    // Increase chunk size warning threshold (framer-motion is large)
    chunkSizeWarningLimit: 600,
  },

  // Pre-bundle for faster dev server
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})
