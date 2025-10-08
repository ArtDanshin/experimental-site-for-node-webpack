/// <reference types="vitest/config" />
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.ts', 'src/**/*.test.ts'],
      compilerOptions: {
        declarationMap: false,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      name: 'UI',
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          entryFileNames: '[name].js',
          chunkFileNames: 'chunks/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return '[name].css';
            }
            return 'assets/[name].[ext]';
          },
          preserveModules: true,
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: '[name].cjs',
          chunkFileNames: 'chunks/[name]-[hash].cjs',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith('.css')) {
              return '[name].css';
            }
            return 'assets/[name].[ext]';
          },
          preserveModules: true,
        },
      ],
    },
    sourcemap: true,
  },
  test: {
    globals: true,
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      instances: [{
        browser: 'chromium',
      }],
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.stories.ts',
        '**/*.d.ts',
        '*.config.ts',
        '*.config.js',
        '.storybook/',
        'dist/',
      ],
    },
  },
});
