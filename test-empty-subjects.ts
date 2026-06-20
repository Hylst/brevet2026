import fs from 'fs';
import path from 'path';

// Mock import
(globalThis as any).import = {
    meta: {
        glob: () => ({})
    }
};

const contentFile = fs.readFileSync('src/data/content.ts', 'utf-8');
const index = contentFile.indexOf('export const SUBJECTS');
if (index > -1) {
    console.log("SUBJECTS definition found");
}

// Just checking manually:
import { SUBJECTS } from './src/data/content.ts';
for (const s of SUBJECTS) {
    if (s.topics.length === 0) {
        console.log(`WARNING: Subject ${s.name} has no topics!`);
    } else {
        console.log(`Subject ${s.name} has ${s.topics.length} topics.`);
    }
}
