// mini.js
import { exec } from 'child_process';
import { readFile, writeFile } from 'fs/promises';
import postcss from 'postcss';
import cssnano from 'cssnano';

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error || stderr) {
        reject(error || stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};

const minifyJsFile = (input, output) => {
  const command = `npx terser ${input} -o ${output} -c arguments,dead_code,directives,arrows,drop_console -m keep_classnames=true,keep_fnames=true`;
  return runCommand(command);
};

const minifyCssFile = async (input, output) => {
  try {
    const css = await readFile(input, 'utf8');
    const result = await postcss([
      // keep nesting
      cssnano({ preset: 'default' })
    ]).process(css, { from: input, to: output });
    await writeFile(output, result.css, 'utf8');
    console.log(`✅ CSS minified: ${output}`);
  } catch (err) {
    throw `❌ CSS minify error: ${err.message || err}`;
  }
};

const minifyAll = async () => {
  try {
    await minifyJsFile('./dist/js/orca.js', './dist/js/orca.min.js');
    await minifyJsFile('./dist/js/orca.esm.js', './dist/js/orca.esm.min.js');
    await minifyJsFile('./dist/js/orca.cjs.js', './dist/js/orca.cjs.min.js');

    // use cssnano replace cleancss
    await minifyCssFile('./dist/css/orca.css', './dist/css/orca.min.css');

    console.log('✅ All minification complete.');
  } catch (error) {
    console.error(`❌ Error during minification: ${error}`);
  }
};

minifyAll();
