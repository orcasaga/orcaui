// mini.js
import { exec } from 'child_process';

// 用于执行命令的函数
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

// 定义压缩 JavaScript 的通用命令
//-c表示压缩精简，-m表示混淆变量
const minifyJsFile = (input, output) => {
  const command = `npx terser ${input} -o ${output} -c arguments,dead_code,directives,arrows,drop_console -m keep_classnames=true,keep_fnames=true`;
  return runCommand(command);
};

// 定义压缩任务
const minifyJs = async () => {
  try {
    // 执行 JavaScript 文件压缩
    await minifyJsFile('./dist/js/orca.js', './dist/js/orca.min.js');
    await minifyJsFile('./dist/js/orca.esm.js', './dist/js/orca.esm.min.js');
    await minifyJsFile('./dist/js/orca.cjs.js', './dist/js/orca.cjs.min.js');
    
    // 压缩 CSS 文件
    await runCommand('cleancss -o ./dist/css/orca.min.css ./dist/css/orca.css');
    
    console.log('Minification complete.');
  } catch (error) {
    console.error(`Error during minification: ${error}`);
  }
};

// 执行压缩任务
minifyJs();
