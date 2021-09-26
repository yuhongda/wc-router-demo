export default {
  babelrc: false,
  presets: [['@babel/typescript', { allowNamespaces: true }], '@babel/preset-react'],
  plugins: [
    ['import', { libraryName: 'antd', style: true }],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    '@babel/plugin-proposal-optional-chaining'
  ],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  exclude: /node_modules/
};
