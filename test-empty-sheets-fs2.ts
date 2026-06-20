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

// Mock SUBJECTS by importing content.ts and avoiding vite globals
const contentFile = fs.readFileSync('src/data/content.ts', 'utf-8');
const modifiedContentFile = contentFile.replace(/import\.meta\.glob\(.*?\);/, '{}');
fs.writeFileSync('src/data/content.tmp.ts', modifiedContentFile);
