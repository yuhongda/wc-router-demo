import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import polyfillNode from 'rollup-plugin-polyfill-node';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const env = process.env.NODE_ENV;
const isProduction = env === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: path.resolve(__dirname, './src') },
  //     { find: '@scf/ui', replacement: '@scf/ui/lib' }
  //   ]
  // },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    proxy: {
      '^/api/.*': {
        target: 'http://c2m-open-service-pre-jdos.jd.com/',
        secure: false,
        changeOrigin: true
      }
    }
  },
  esbuild: false,
  plugins: [
    polyfillNode(),
    commonjs(),
    babel({
      configFile: './build/babel.config.js',
      include: ['./src/**'],
      babelHelpers: 'runtime',
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs'],
      plugins: ['@babel/plugin-transform-runtime']
    }),
    reactRefresh()
  ],
  optimizeDeps: {
    include: [
      'lodash',
      'lodash/isObject',
      'lodash/isEqual',
      'insert-css',
      '@ant-design/icons',
      '@ant-design/colors',
      'classnames'
    ]
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(env)
  }
});
