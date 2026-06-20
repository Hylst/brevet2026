import fs from 'fs';
import path from 'path';

const dir = 'src/data';
const files = ['physique.ts', 'maths.ts', 'francais.ts', 'histoire.ts', 'geo.ts', 'emc.ts', 'svt.ts', 'techno.ts', 'oral.ts', 'methodologie.ts'];

const allTitles: Record<string, string[]> = {};

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  let match;
  const regex = /title:\s*['"](.*?)['"]/g;
  while ((match = regex.exec(content)) !== null) {
      const title = match[1];
      if (!allTitles[title]) allTitles[title] = [];
      allTitles[title].push(file);
  }
}

let foundDuplicates = false;
for (const [title, occurrences] of Object.entries(allTitles)) {
    if (occurrences.length > 1) {
        console.log(`Duplicate Title found: "${title}" occurs ${occurrences.length} times in [${occurrences.join(', ')}]`);
        foundDuplicates = true;
    }
}

if (!foundDuplicates) {
    console.log("No duplicate titles found. Data is clean!");
}
