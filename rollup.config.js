import resolve from '@rollup/plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import note from './script-note.js';

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
