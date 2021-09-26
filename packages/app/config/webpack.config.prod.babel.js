import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpackConfigBase from './webpack.config.base';
// import ESBuildMinifierWebpackPlugin from 'esbuild-minifier-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
var SentryPlugin = require('webpack-sentry-plugin');

import {
  lessModifyVars,
  loginProdHost,
  logoutProdHost,
  loginProdHostPassport,
  logoutProdHostPassport,
  appCode,
} from './config';

const release = (function getDate() {
  const t = new Date();
  return `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
})();

export default merge.smart(webpackConfigBase, {
  mode: 'production',
  output: {
    publicPath: `${appCode}`,
    filename: `js/[name].js?v=[hash:8]`,
    chunkFilename: `js/[name].chunk.js?v=[hash:8]`,
    sourceMapFilename: 'js/[name].chunk.js.map?v=[hash:8]',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: lessModifyVars,
              paths: [path.resolve(__dirname, 'node_modules')],
            },
          },
        ],
        exclude: /\.module\.less$/,
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[hash:8][name].[ext]?v=[hash:8]',
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use: ['url-loader?limit=10000&name=/fonts/[name].[ext]?[hash]'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        exclude: /node_modules/,
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      path: '',
    }),
    new webpack.DefinePlugin({
      __HOST: `'http://c2m-open-ps.jd.com/'`,
      __RELEASE: `'${release}'`,
      __LoginHost: `'${loginProdHost}'`,
      __LogoutHost: `'${logoutProdHost}'`,
      __LoginHostPassport: `'${loginProdHostPassport}'`,
      __LogoutHostPassport: `'${logoutProdHostPassport}'`,
      // __GraphQLHost: `'https://c2m-open-erp-test.jd.com/graphql'`, // 预发测试
      __GraphQLHost: `'http://c2m-open-erp.jd.com/graphql'`, // 生产
      __CreateDataRange: `'http://c2m-open-ps-marketing.jd.com/'`, //创建数据范围
      'process.env': {
        NODE_ENV: `'production'`,
      },
    }),
    new LodashModuleReplacementPlugin(),
    // new SentryPlugin({
    //   // Sentry options are required
    //   organization: 'rmb',
    //   project: 'npd-platform-fe',
    //   deleteAfterCompile: true,
    //   baseSentryURL: 'http://sentry-ark.jdcloud.com/api/0',
    //   apiKey: '3df312448c6646a5a8b7a69f16839aba2883d67ff9924001a6a7445cb457eabb',
    //   // Release version name/hash is required
    //   release: release,
    //   filenameTransform: function (filename) {
    //     return '~/' + filename;
    //   },
    // }),

    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    // }),
  ],
});
