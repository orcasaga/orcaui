import fs from 'fs/promises';
import less from 'less';
import path from 'path';
import note from './script-note.js';

const inputLessFile = './src/styles/orca.less';
const outputCssFile = './dist/css/orca.css';  

async function resolveLessImports(filePath, baseDir = '') {
  const fullPath = path.join(baseDir, filePath);
  const content = await fs.readFile(fullPath, 'utf8');

  const importRegex = /@import\s+['"](.+?)['"];/g;
  let match;
  let resolvedContent = content;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    const importFullPath = path.join(path.dirname(fullPath), importPath);
    const importedContent = await resolveLessImports(importPath, path.dirname(fullPath));
    resolvedContent = resolvedContent.replace(match[0], importedContent);
  }

  return resolvedContent;
}

async function compileLessToCss(lessFilePath) {
  try {
    const lessContent = await resolveLessImports(lessFilePath); 
    const result = await less.render(lessContent, {
      paths: [path.dirname(lessFilePath)], 
    });
    return result.css; 
  } catch (error) {
    console.error('Error compiling LESS:', error);
    process.exit(1);
  }
}

async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
    process.exit(1);
  }
}

async function writeCssFile(cssContent, outputPath) {
  try {
    await ensureDir(path.dirname(outputPath)); 
    const finalCssContent = note + cssContent; 
    await fs.writeFile(outputPath, finalCssContent, 'utf8');
    console.log(`CSS file saved to: ${outputPath}`);
  } catch (error) {
    console.error('Error writing CSS file:', error);
    process.exit(1);
  }
}

async function main() {
  const cssContent = await compileLessToCss(inputLessFile); 
  await writeCssFile(cssContent, outputCssFile);       
}

main();