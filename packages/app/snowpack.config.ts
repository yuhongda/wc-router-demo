export default {
  extends: '@snowpack/app-scripts-react',
  plugins: [
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
        transformOptions: {},
      },
    ],
    // ['@snowpack/plugin-run-script', { cmd: 'sass src/ --no-source-map', watch: '$1 --watch' }],
    ['@snowpack/plugin-sass'],
    ['snowpack-plugin-less-y', { javascriptEnabled: true }],
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-postcss',
      {
        input: ['.css', '.scss'],
      },
    ],
    // [
    //   '@snowpack/plugin-optimize',
    //   {
    //     preloadModules: true,
    //   },
    // ],
    ['@snowpack/plugin-react-refresh'],
    ['snowpack-plugin-hmr-appender'],
  ],
  exclude: ['**/__tests__/*', '**/*.@(spec|test).@(js|mjs)'],
  alias: {
    '@': './src',
    '@scf/ui': '@scf/ui/lib',
  },
  // mount: {
  //   'src': '/',
  // },
  installOptions: {
    polyfillNode: true,
    env: { NODE_ENV: 'development', IS_SNOWPACK: true },
    namedExports: ['mobx-react-router'],
    sourceMap: false,
    rollup: {
      plugins: [require('rollup-plugin-less')({ exclude: [] }), require('@rollup/plugin-image')({ dom: true })],
    },
  },
  devOptions: {
    port: 8203,
    hmrErrorOverlay: false,
  },
  proxy: {
    '/api': {
      target: 'http://c2m-open-service-pre-jdos.jd.com/',
      secure: false,
      changeOrigin: true,
    },
  },
  install: [
    '@babel/runtime/helpers/slicedToArray',
    '@babel/runtime/helpers/toConsumableArray',
    '@babel/runtime/helpers/defineProperty',
    '@babel/runtime/regenerator',
    '@babel/runtime/helpers/applyDecoratedDescriptor',
    '@babel/runtime/helpers/getPrototypeOf',
    '@babel/runtime/helpers/possibleConstructorReturn',
    '@babel/runtime/helpers/inherits',
    '@babel/runtime/helpers/assertThisInitialized',
    '@babel/runtime/helpers/createClass',
    '@babel/runtime/helpers/classCallCheck',
    '@babel/runtime/helpers/asyncToGenerator',
    '@babel/runtime/helpers/taggedTemplateLiteral',
    '@babel/runtime/helpers/extends',
    '@babel/runtime/helpers/initializerWarningHelper',
    '@babel/runtime/helpers/initializerDefineProperty',
    '@babel/runtime/helpers/objectWithoutProperties',
    'lodash/cloneDeep',
    '@babel/runtime/helpers/typeof',
    'nornj-react/mobx/formData/esm',
    '@babel/runtime/helpers/get',
  ],
};
