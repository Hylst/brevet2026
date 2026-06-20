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

const dir = 'src/data';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'content.ts' && f !== 'mock-questions.ts');

let foundEmpty = false;

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const titles = [...content.matchAll(/title:\s*['"](.*?)['"]/g)].map(m => m[1]);
  for (const title of titles) {
    const slug = slugify(title);
    if (!slug) {
      console.log("EMPTY SLUG FOR:", file, title);
      foundEmpty = true;
    }
  }
}

if (!foundEmpty) {
  console.log("No empty slugs found.");
}
