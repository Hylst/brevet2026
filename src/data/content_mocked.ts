import { Subject } from '../types';
import { maths } from './maths';
import { francais } from './francais';
import { histoire } from './histoire';
import { geo } from './geo';
import { emc } from './emc';
import { physique } from './physique';
import { svt } from './svt';
import { techno } from './techno';
import { oral } from './oral';
import { methodologie } from './methodologie';

// Load all markdown files from cycles and levels
const markdownFiles = global.import_meta_glob("", {});

function slugify(text: string) {
  return text.toString().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Cache bust: 2
export const SUBJECTS: Subject[] = [
  maths,
  francais,
  histoire,
  geo,
  emc,
  physique,
  svt,
  techno,
  oral,
  methodologie
];

// Attach markdown content to topics
for (const subject of SUBJECTS) {
  for (const topic of subject.topics) {
    if (topic.type === 'sheet') {
      const level = topic.level || '3eme';
      const cycle = ['6eme', 'cm1', 'cm2'].includes(level) ? 'cycle-3' : 'cycle-4';
      
      const slug = slugify(topic.title);
      // Find the file that matches the slug, regardless of the exact index prefix
      const expectedPathSegment = `/${cycle}/${subject.folderId || subject.id}/${level}/chapters/`;
      const matchingPath = Object.keys(markdownFiles).find(path => {
        const normalizedPath = path.split('?')[0]; // Handle ?raw in Vite
        return normalizedPath.includes(expectedPathSegment) && normalizedPath.includes(slug);
      });

      if (matchingPath) {
        topic.content = (markdownFiles[matchingPath] as any).default as string;
      } else {
        console.warn(`Markdown file not found for topic ${topic.id} with slug ${slug}`);
      }
    }
  }
}

export const getSubjectById = (id: string) => SUBJECTS.find(s => s.id === id);