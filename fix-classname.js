import fs from 'fs';

const files = [
  'src/content/cycle-4/francais/3eme/chapters/01-classes-et-fonctions.md',
  'src/content/cycle-4/francais/3eme/chapters/03-le-verbe-et-les-temps.md',
  'src/content/cycle-4/maths/3eme/chapters/10-trigonometrie.md'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/className=/g, 'class=');
  fs.writeFileSync(file, content, 'utf8');
}
console.log('Fixed className attributes');
