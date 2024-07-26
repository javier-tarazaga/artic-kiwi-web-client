import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['module:@preact/signals-react-transform']],
      },
    })
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@signals': path.resolve(__dirname, 'src/signals'),
      '@styles': path.resolve(__dirname, 'src/styles')
    },
  },
});
