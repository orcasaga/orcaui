import fs from 'fs/promises';
import postcss from 'postcss';
import config from './postcss.config.js';
import note from './script-note.js';

const inputPath = './src/styles/orca.css';
const outputPath = './dist/css/orca.css';  


async function build() {
  try {
    let css = await fs.readFile(inputPath, 'utf8');
    const result = await postcss(config.plugins).process(css, { from: inputPath });
    const finalCssContent = note + result.css; 
    await fs.writeFile(outputPath, finalCssContent, 'utf8');
    console.log('✅ Success!');
  } catch (err) {
    console.error('❌ Error: ', err);
  }
}

build();
