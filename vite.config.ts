import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    esbuild: {
      jsxInject: `
      import React from 'react';
    `,
    },
    plugins: [reactRefresh()],
  });
};
