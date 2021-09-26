import license from 'rollup-plugin-license';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
// import replace from '@rollup/plugin-replace';
import babelConfig from './.babelrc';

const config = {
  input: './src/components/entry/WcShell.tsx',
  output: { format: 'es' },
  plugins: [
    babel(babelConfig),
    json(),
    image(),
    commonjs(),
    resolve({
      // customResolveOptions: {
      //   moduleDirectory: 'src'
      // },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.css']
    }),
    postcss({
      extract: `wc-app.css`,
      extensions: ['.css', '.less'],
      use: {
        less: {
          javascriptEnabled: true
        }
      },
      minimize: true
    }),
    license({
      banner: `/*!
 * @scf/wc-sales v${require('../style/package.json').version}
 * (c) yuhongda
 */`
    })
  ]
};

export default config;
