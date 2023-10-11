import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/ts/notifyme.ts',
  output: {
    file: 'dist/js/notifyme.js', 
    format: 'es'
  },
  plugins: [
    typescript(),
    scss(),
    resolve(),
    commonjs()
  ]
};
