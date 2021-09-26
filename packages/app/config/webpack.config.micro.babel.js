import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import opn from 'opn';
import webpackConfigBase from './webpack.config.base';
import {
  dev,
  mock,
  lessModifyVars,
  loginTestHost,
  loginProdHost,
  logoutProdHost,
  loginProdHostPassport,
  logoutProdHostPassport,
  graphQLHost,
} from './config';

const useBrowser = process.env.BROWSER != 'none';
// 是否启用 why-did-you-render 工具，见 main.jsx，命令：yarn start --WHY_RENDER
const useWhyDidYouRender = !!process.env.npm_config_WHY_RENDER;

//---add mock server begin ---
const devProxy = [];
//add local mock server proxy
const mockServers = [mock.local, ...mock.remote];
//add remote mock server proxy
mockServers.forEach((mockServer) => {
  devProxy.push({
    ...mockServer,
    ...{
      context: mockServer.context,
      target: mockServer.target,
      secure: mockServer.secure || false,
      changeOrigin: mockServer.changeOrigin || true,
    },
  });
});
//---add mock server end ---

export default merge.smart(webpackConfigBase, {
  mode: 'development',
  output: {
    publicPath: 'http://c2m-open-ps-test.jd.com:8203/microapp/',
    libraryTarget: 'umd',
    library: `npd-platform-internal`,
    jsonpFunction: `webpackJsonp_npd-platform-internal`,
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: {
      verbose: true,
      rewrites: [{ from: /^\//, to: 'http://c2m-open-ps-test.jd.com:8203/microapp/' + 'index.html' }],
    },
    host: 'c2m-open-ps-test.jd.com',
    port: dev.port,
    proxy: devProxy,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    after: () => {
      useBrowser && opn(`http://${dev.host}:${dev.port}/`);
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
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
        exclude: /\.(module|theme)\.less$/,
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[hash:8][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        use: ['url-loader?limit=10000&name=fonts/[name].[ext]?[hash]'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      path: '/dist/',
    }),
    new webpack.DefinePlugin({
      __HOST: `'http://${dev.host}:${dev.port}'`,
      __LoginHost: `'${loginProdHost}'`,
      __LogoutHost: `'${logoutProdHost}'`,
      __LoginHostPassport: `'${loginProdHostPassport}'`,
      __LogoutHostPassport: `'${logoutProdHostPassport}'`,
      __GraphQLHost: `'http://localhost:4000/graphql'`,
      'process.env': {
        NODE_ENV: `'development'`,
        WHY_RENDER: `${useWhyDidYouRender}`,
      },
    }),
  ],
});
