import fs from 'fs';

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

const file = fs.readFileSync('src/data/physique.ts', 'utf-8');
const lines = file.split('\n').filter(l => l.includes('title:'));
const allTitles = lines.map(l => {
    const match = l.match(/title:\s*["'](.*?)["']/);
    return match ? match[1] : null;
}).filter(Boolean);

console.log("All titles:");
allTitles.forEach(t => console.log(t, "->", slugify(t)));

const targetId = "06-lunivers-et-la-gravitation";
let match = allTitles.find(title => {
    const slug = slugify(title);
    return targetId.includes(slug) || (slug && targetId.endsWith(slug));
});

console.log("First matched title:", match);
