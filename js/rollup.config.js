import { terser } from 'rollup-plugin-terser';
import { base64 } from 'rollup-plugin-base64';

export default {
  input: 'src/p8g.js',
  output: { file: 'dist/p8g.js', format: 'es', plugins: [terser()] },
  plugins: [
    base64({
      include: '../c/p8g.wasm',
    }),
  ],
};
