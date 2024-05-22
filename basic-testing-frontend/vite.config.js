import dns from 'dns';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const server =
    mode === 'development'
      ? {
          host: '0.0.0.0',
          port: 5173,
          hmr: {
            clientPort: 5111,
          },
        }
      : {};
  return {
    plugins: [react(), tsconfigPaths()],
    server,
    test: {
      css: true,
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/setup.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
      },
    },
  };
});
