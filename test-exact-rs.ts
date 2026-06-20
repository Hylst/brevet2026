import { SUBJECTS } from './src/data/content.ts';

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

const topicId = "06-lunivers-et-la-gravitation";
let context = null;

for (const sub of SUBJECTS) {
    let t = sub.topics.find(t => t.id === topicId);
    if (!t && topicId) {
    t = sub.topics.find(t => topicId.includes(slugify(t.title)) || (slugify(t.title) && topicId.endsWith(slugify(t.title))));
    }
    if (t) {
        context = { topic: t, subject: sub };
        break;
    }
}

console.log("Topic:", context?.topic?.id);
console.log("Content:", !!context?.topic?.content);
