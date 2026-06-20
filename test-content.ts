import { SUBJECTS } from './src/data/content';
console.log("Physique topics:", SUBJECTS.find(s => s.id === 'physique')?.topics.map(t => ({ id: t.id, title: t.title, hasContent: !!t.content })));
