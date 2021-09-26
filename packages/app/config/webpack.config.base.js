import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import opn from 'opn';
import pxToRem from 'postcss-pxtorem';
import { lessModifyVars } from './config';

const useBrowser = process.env.BROWSER != 'none';
const isOnlineBuild = process.env.OnlineBuild == 'true';

export default {
  mode: 'development',
  entry: {
    vendor: [
      './src/utils/polyfills',
      // 'react',
      // 'react-dom',
      'react-router',
      'mobx',
      'mobx-react',
      'mobx-state-tree',
      'nornj',
      'nornj-react',
      '@scf/ui',
    ],
    app: ['./src/index'],
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/dist/',
    filename: `js/[name].js`,
    chunkFilename: `js/[name].chunk.js`,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.css', '.less', '.scss'],
    alias: {
      '@scf/ui/lib': isOnlineBuild
        ? path.resolve(__dirname, '../node_modules/@scf/ui/dist/index.js')
        : path.resolve(__dirname, '../../../node_modules/@scf/ui/dist/index.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/external-helpers'],
              cacheDirectory: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: require.resolve('@open-wc/webpack-import-meta-loader'),
          },
        ],
        exclude: /node_modules/,
      },
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
            },
          },
        ],
        exclude: /\.(module|theme)\.less$/,
      },
      {
        test: /\.theme\.less$/,
        use: [
          {
            loader: 'style-loader/useable',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: lessModifyVars,
            },
          },
        ],
      },
      {
        test: /\.module\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]-[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
        exclude: /\.module\.scss$/,
      },
      {
        test: /\.module\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]-[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(t|nj)\.html(\?[\s\S]+)*$/,
        use: [
          {
            loader: 'nornj-loader',
            options: {
              outputH: true,
              delimiters: 'react',
              extensionConfig: require('nornj-react/mobx/extensionConfig'),
            },
          },
        ],
      },
      {
        test: /\.html(\?[\s\S]+)*$/,
        use: [
          {
            loader: 'nornj-loader',
          },
        ],
        exclude: /\.(t|nj)\.html$/,
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
  optimization: {
    splitChunks: {
      name(module, chunks, cacheGroupKey) {
        const moduleFileName = module
          .identifier()
          .split(/[\\\/]/)
          .reduceRight((item) => item);
        // const allChunksNames = chunks.map((item) => item.name).join('~');
        return `${cacheGroupKey}-${moduleFileName}`;
      },
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'initial',
          priority: 1,
          enforce: true,
        },
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          priority: 2,
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.less$/,
          chunks: 'all',
          priority: 20,
          enforce: true,
        },
      },
    },
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          pxToRem({
            rootValue: 100,
            propWhiteList: [],
            mediaQuery: true,
          }),
        ],
      },
    }),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/[name].css?v=[hash:8]`,
      chunkFilename: `css/[name].css?v=[hash:8]`,
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    new CopyWebpackPlugin([
      {
        context: './public/',
        from: '**/*',
        to: './',
      },
      {
        from: isOnlineBuild
          ? 'node_modules/pdfjs-dist/cmaps/'
          : path.resolve(__dirname, '../../../node_modules/pdfjs-dist/cmaps/'),
        to: 'cmaps/',
      },
    ]),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
  externals: {
    echarts: 'echarts',
    moment: 'moment',
    '../moment': 'moment',
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'antd',
    lodash: '_',
  },
};
