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

// 1. Collect all markdown files
const baseContentPaths = ['cycle-3', 'cycle-4'];
const markdownFiles = [];

function findMdFiles(dir: string) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            findMdFiles(p);
        } else if (p.endsWith('.md')) {
            // make it look like expected by normalizer
            markdownFiles.push('/' + p.replace(/\\/g, '/'));
        }
    }
}

for (const c of baseContentPaths) {
    findMdFiles(path.join('src/content', c));
}

// 2. Read physique.ts
const physiqueContent = fs.readFileSync('src/data/physique.ts', 'utf-8');

// A primitive way to parse the topics: just extract all titles and levels and ids
// For pc-6 specifically:
const id = 'pc-6';
const title = "L'Univers et la Gravitation";
const level = '3eme';
const folderId = 'sciences';
const cycle = 'cycle-4';

const slug = slugify(title);
const expectedPathSegment = `/${cycle}/${folderId}/${level}/chapters/`;

const match = markdownFiles.find(p => {
    return p.includes(expectedPathSegment) && (p.includes(slug) || p.includes(id));
});

console.log("Expected Path Segment:", expectedPathSegment);
console.log("Slug:", slug);
console.log("Match found:", match);

if (!match) {
    console.log("Files checking for expectedPathSegment:");
    markdownFiles.filter(p => p.includes(expectedPathSegment)).forEach(p => console.log(p));
}
