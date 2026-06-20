import fs from 'fs';
import path from 'path';

// Parse TS files line by line for empty quizzes
const dataDir = 'src/data';
const dataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'content.ts' && f !== 'mock-questions.ts');

let emptyQuizzes = 0;
let totalQuizzes = 0;

for (const file of dataFiles) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');

  const lines = content.split('\n');
  let currentId: string | null = null;
  let currentTitle: string | null = null;
  let hasQuestions = false;
  let inQuiz = false;
  
  for (let i = 0; i < lines.length; i++) {
     const line = lines[i];
     const idMatch = line.match(/id:\s*['"](.*?)['"]/);
     if (idMatch && !inQuiz) {
         currentId = idMatch[1];
     }
     
     const titleMatch = line.match(/title:\s*['"](.*?)['"]/);
     if (titleMatch && !inQuiz) currentTitle = titleMatch[1];
     
     const typeMatch = line.match(/type:\s*['"]quiz['"]/);
     if (typeMatch && !inQuiz) {
         inQuiz = true;
         totalQuizzes++;
     }
     
     if (inQuiz && line.includes('questions:')) {
         // See if it's empty
         if (!line.includes('[]')) {
            hasQuestions = true;
         } else {
            hasQuestions = false;
         }
     }
     
     // Reset on end of object, roughly checking indentation or '},'
     if (inQuiz && line.match(/^\s*\},/)) { // End of topic object roughly
         if (!hasQuestions) {
             emptyQuizzes++;
             console.log(`[EMPTY QUIZ] ID: ${currentId} | Title: ${currentTitle} | File: ${file}`);
         }
         inQuiz = false;
         hasQuestions = false;
         currentId = null;
         currentTitle = null;
     }
  }
}

console.log(`\nTotal Quizzes Checked: ${totalQuizzes}`);
console.log(`Empty Quizzes: ${emptyQuizzes}`);
