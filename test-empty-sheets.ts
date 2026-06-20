import { SUBJECTS } from './src/data/content';

const emptySheets = [];
const allSheets = [];

for (const subject of SUBJECTS) {
  for (const topic of subject.topics) {
    if (topic.type === 'sheet') {
      allSheets.push({ subject: subject.name, title: topic.title, id: topic.id });
      if (!topic.content) {
        emptySheets.push({ subject: subject.name, title: topic.title, id: topic.id });
      }
    }
  }
}

console.log(`Total sheets: ${allSheets.length}`);
console.log(`Empty sheets: ${emptySheets.length}`);
if (emptySheets.length > 0) {
  console.log("Empty sheets:", emptySheets);
}
