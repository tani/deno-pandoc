import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
export default {
  input: './src/mod.js',
  output: {
    format: 'esm',
    file: './out/mod.js'
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    json(), 
    replace({ 
      punycode: 'https://deno.land/std/node/punycode.ts',
      preventAssignment: true 
    })
  ]
}
