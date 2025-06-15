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
        manualChunks: (id) => {
          // React core
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
            return 'react-vendor';
          }

          // Radix UI components (split by usage frequency)
          if (id.includes('@radix-ui')) {
            // Core UI components used frequently
            if (id.includes('dialog') || id.includes('popover') || id.includes('dropdown-menu') ||
                id.includes('select') || id.includes('tabs') || id.includes('accordion')) {
              return 'ui-core';
            }
            // Form-related components
            if (id.includes('checkbox') || id.includes('radio-group') || id.includes('switch') ||
                id.includes('slider') || id.includes('label')) {
              return 'ui-forms';
            }
            // Navigation components
            if (id.includes('navigation-menu') || id.includes('menubar') || id.includes('context-menu')) {
              return 'ui-navigation';
            }
            // Other UI components
            return 'ui-misc';
          }

          // Form libraries
          if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
            return 'form-vendor';
          }

          // Query libraries
          if (id.includes('@tanstack/react-query') || id.includes('react-query')) {
            return 'query-vendor';
          }

          // Animation libraries
          if (id.includes('framer-motion') || id.includes('lottie') || id.includes('gsap')) {
            return 'animation-vendor';
          }

          // Chart libraries
          if (id.includes('recharts') || id.includes('d3') || id.includes('chart')) {
            return 'chart-vendor';
          }

          // Utility libraries
          if (id.includes('date-fns') || id.includes('clsx') || id.includes('tailwind-merge') ||
              id.includes('class-variance-authority') || id.includes('lucide-react')) {
            return 'utility-vendor';
          }

          // Page-specific chunks for better caching
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('/')[0].split('.')[0];
            return `page-${pageName}`;
          }

          // Component chunks for large components
          if (id.includes('/components/') && id.includes('.tsx')) {
            const componentPath = id.split('/components/')[1];
            if (componentPath.includes('ui/')) {
              return 'ui-components';
            }
            if (componentPath.includes('forms/')) {
              return 'form-components';
            }
          }

          // Large third-party libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize chunk naming for caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/[name]-[hash].js`;
        },
        assetFileNames: 'assets/[name]-[hash].[ext]'
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
