import deno from 'rollup-plugin-deno'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
export default {
  input: './src/mod.js',
  output: {
    format: 'esm',
    file: './out/mod.js'
  },
  plugins: [commonjs(), nodeResolve({preferBuiltins: false}), json(), deno()]
}
