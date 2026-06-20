import fs from 'fs';
import path from 'path';

function slugify(text: string) {
  if (!text) return '';
  return text.toString().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// 1. Read all markdown files
function findMdFiles(dir: string, fileList: string[] = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            findMdFiles(p, fileList);
        } else if (p.endsWith('.md')) {
            fileList.push('/' + p.replace(/\\/g, '/'));
        }
    }
    return fileList;
}

const markdownFiles = findMdFiles('src/content');


// 2. Parse TS files line by line
const dataDir = 'src/data';
const dataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'content.ts' && f !== 'mock-questions.ts');

let emptyCount = 0;
let totalSheets = 0;

for (const file of dataFiles) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
  const blocks = content.split(/\{(?:[^{}]|(?:\{[^{}]*\}))*\}/);
  // Actually, standard regex for blocks is hard.
  // Let's find index of "type: 'sheet'" and then look around for title and id.
  
  const lines = content.split('\n');
  let currentId: string | null = null;
  let currentTitle: string | null = null;
  
  for (let i = 0; i < lines.length; i++) {
     const line = lines[i];
     const idMatch = line.match(/id:\s*['"](.*?)['"]/);
     if (idMatch) currentId = idMatch[1];
     
     const titleMatch = line.match(/title:\s*['"](.*?)['"]/);
     if (titleMatch) currentTitle = titleMatch[1];
     
     const typeMatch = line.match(/type:\s*['"]sheet['"]/);
     if (typeMatch) {
         if (currentId && currentTitle) {
             totalSheets++;
             const slug = slugify(currentTitle);
             let matchingPath = markdownFiles.find(p => p.includes(slug));
             if (!matchingPath) {
                 matchingPath = markdownFiles.find(p => p.includes(slugify(currentId!)));
             }
             if (!matchingPath) {
                 emptyCount++;
                 console.log(`[EMPTY] ID: ${currentId} | Title: ${currentTitle} | File: ${file}`);
             }
         }
     }
     
     // Reset on end of object
     if (line.includes('},')) {
         // rough, but works mostly
         currentId = null;
         currentTitle = null;
     }
  }
}

console.log(`\nTotal Sheets Checked: ${totalSheets}`);
console.log(`Empty Sheets: ${emptyCount}`);
