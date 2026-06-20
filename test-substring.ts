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

const targetId = "06-lunivers-et-la-gravitation";

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const titles = [...content.matchAll(/title:\s*['"](.*?)['"]/g)].map(m => m[1]);
  for (const title of titles) {
    const slug = slugify(title);
    if (slug && targetId.includes(slug)) {
      console.log(`Match found in ${file}: ${title} (slug: ${slug})`);
    }
  }
}
