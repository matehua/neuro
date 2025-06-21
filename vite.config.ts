import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080, // Updated port from 3000 to 8080
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react',
      'date-fns',
      'clsx',
      'tailwind-merge'
    ],
    exclude: ['lovable-tagger']
  },
  css: {
    devSourcemap: true,
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'development',
    minify: mode === 'production' ? 'terser' : false,
    cssMinify: mode === 'production',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      },
      output: {
        // Let Vite handle chunking automatically to prevent empty chunks
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    terserOptions: mode === 'production' ? {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          'console.log',
          'console.info',
          'console.debug',
          'console.trace',
          'console.warn',
          'console.error',
          'console.assert',
          'console.clear',
          'console.count',
          'console.countReset',
          'console.dir',
          'console.dirxml',
          'console.group',
          'console.groupCollapsed',
          'console.groupEnd',
          'console.table',
          'console.time',
          'console.timeEnd',
          'console.timeLog',
          'console.profile',
          'console.profileEnd'
        ],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_symbols: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        dead_code: true,
        side_effects: false
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false
      }
    } : undefined,
  },
}));
