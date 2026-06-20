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


// 2. Mock SUBJECTS by parsing data files
const dataDir = 'src/data';
const dataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'content.ts' && f !== 'mock-questions.ts');

let emptyCount = 0;
let totalSheets = 0;

for (const file of dataFiles) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
  // Simple regex to find objects with type: 'sheet'
  // It's brittle but works for this test
  
  // Actually let's just parse IDs and Titles that are associated with type: 'sheet'
  const sheetMatches = content.matchAll(/id:\s*['"](.*?)['"].*?title:\s*['"](.*?)['"].*?type:\s*['"]sheet['"]/gs);
  
  for (const match of sheetMatches) {
     const id = match[1];
     const title = match[2];
     totalSheets++;
     
     const slug = slugify(title);
     
     let matchingPath = markdownFiles.find(p => p.includes(slug));
     if (!matchingPath) {
         matchingPath = markdownFiles.find(p => p.includes(slugify(id)));
     }
     
     if (!matchingPath) {
         emptyCount++;
         console.log(`[EMPTY] File: ${file} | ID: ${id} | Title: ${title} | Slug: ${slug}`);
     }
  }
}

console.log(`\nTotal Sheets Checked: ${totalSheets}`);
console.log(`Empty Sheets: ${emptyCount}`);
