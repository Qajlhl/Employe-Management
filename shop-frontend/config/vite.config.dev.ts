import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      port: 8080,
      fs: {
        strict: true,
      },
      // date:2022/10/10
      proxy: {
        '/api/v1': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
        '/public': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        },
      },
    },
    plugins: [],
  },
  baseConfig
);
