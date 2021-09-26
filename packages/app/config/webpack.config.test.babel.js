import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpackConfigBase from './webpack.config.base';
import { lessModifyVars, loginTestHost } from './config';

export default merge.smart(webpackConfigBase, {
  mode: 'production',
  output: {
    publicPath: '',
  },
  devtool: '#inline-cheap-source-map',
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
            },
          },
        ],
        exclude: /\.m\.less$/,
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '/images/[hash:8][name].[ext]',
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
      __HOST: `'/'`,
      __LoginHost: `'${loginTestHost}'`,
      'process.env': {
        NODE_ENV: `'production'`,
      },
    }),
  ],
});
