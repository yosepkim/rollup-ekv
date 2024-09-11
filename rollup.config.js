import copy from 'rollup-plugin-copy-assets';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: './src/main.ts',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    commonjs(),
    resolve(),
    copy({
      assets: [
        './src/bundle.json',
        './src/edgekv_tokens.js',
        './src/edgekv.js',
      ],
    })
  ]
};