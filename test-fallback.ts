import fs from 'fs';
import path from 'path';

// Mock import.meta.glob BEFORE importing content
(global as any).import = {
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

const targetId = "06-lunivers-et-la-gravitation";
let matchTopic = null;
let matchSub = null;

for (const sub of SUBJECTS) {
  for (const topic of sub.topics) {
    const slug = slugify(topic.title);
    if (slug && (targetId.includes(slug) || targetId.endsWith(slug))) {
      matchTopic = topic;
      matchSub = sub;
      break;
    }
  }
  if (matchTopic) break;
}

console.log("Matched:", matchSub?.name, matchTopic?.id, matchTopic?.title);
