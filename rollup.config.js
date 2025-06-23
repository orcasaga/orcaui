import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import note from './script-note.js';

// Use postcss only to recognize CSS files in TypeScript without processing the CSS files
const postcssConfig = {
  extract: false,
  inject: false,
  modules: false,
  autoModules: false,
  use: {
    sass: false,
    less: false,
    stylus: false
  },
  plugins: [],
  config: false,
  minimize: false,
  include: /\.css$/,
  exclude: /node_modules/
}

const sharePlugins = [
  {
    name: "remove-comments",
    transform(code) {
      const cleanedCode = code.replace(/\/\*[\s\S]*?\*\//g, "");
      return {
        code: cleanedCode,
        map: null,
      };
    },
  },
  process.env.REPLACE === 'true' && replace({
    preventAssignment: true,
    'console.log': '',
  }),
  resolve(),
  postcss(postcssConfig),
].filter(Boolean);
export default [
  {
    input: './src/scripts/orca.js',
    output:
    {
      dir: './dist/',
      format: 'umd',
      name: 'orca',
      entryFileNames: 'js/[name].js',
      banner: note,
    },
    plugins: [
      ...sharePlugins,
    ],
  },
  {
    input: './src/scripts/modules.js',
    output:
    {
      dir: './dist/',
      format: 'es',
      entryFileNames: 'js/orca.esm.js',
      banner: note,
    },
    plugins: [
      ...sharePlugins
    ],
  },
  {
    input: './src/scripts/modules.js',
    output:
    {
      dir: './dist/',
      format: 'cjs',
      entryFileNames: 'js/orca.cjs.js',
      banner: note,
    },
    plugins: [
      ...sharePlugins
    ],
  },
]
