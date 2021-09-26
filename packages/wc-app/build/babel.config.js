module.exports = {
  babelrc: false,
  presets: [['@babel/typescript', { allowNamespaces: true }], '@babel/preset-react'],
  plugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: false }],
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
  exclude: /node_modules/
};
