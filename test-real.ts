import fs from 'fs';
import path from 'path';

(globalThis as any).import = {
    meta: {
        glob: () => ({})
    }
};

import { SUBJECTS } from './src/data/content';


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


let emptyCount = 0;
let totalSheets = 0;

for (const subject of SUBJECTS) {
  for (const topic of subject.topics) {
    if (topic.type === 'sheet') {
       totalSheets++;
       
       const slug = slugify(topic.title);
       let matchingPath = markdownFiles.find(p => p.includes(slug));
       if (!matchingPath) {
           matchingPath = markdownFiles.find(p => p.includes(slugify(topic.id)));
       }
       
       if (!matchingPath) {
           emptyCount++;
           console.log(`[EMPTY] ID: ${topic.id} | Title: ${topic.title} | Slug: ${slug}`);
       }
    }
  }
}

console.log(`\nTotal Sheets Checked: ${totalSheets}`);
console.log(`Empty Sheets: ${emptyCount}`);
