// mini.js
import { exec } from 'child_process';

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`exec error: ${error}`);
        return;
      }
      if (stderr) {
        reject(`stderr: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });
};

const minifyJsFile = (input, output) => {
  const command = `npx terser ${input} -o ${output} -c arguments,dead_code,directives,arrows,drop_console -m keep_classnames=true,keep_fnames=true`;
  return runCommand(command);
};

const minifyJs = async () => {
  try {
    await minifyJsFile('./dist/js/orca.js', './dist/js/orca.min.js');
    await minifyJsFile('./dist/js/orca.esm.js', './dist/js/orca.esm.min.js');
    await minifyJsFile('./dist/js/orca.cjs.js', './dist/js/orca.cjs.min.js');
    
    await runCommand('cleancss -o ./dist/css/orca.min.css ./dist/css/orca.css');
    
    console.log('Minification complete.');
  } catch (error) {
    console.error(`Error during minification: ${error}`);
  }
};

minifyJs();
