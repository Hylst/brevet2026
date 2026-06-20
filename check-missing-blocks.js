import fs from 'fs';
import path from 'path';

let filesList = [];
function findFiles(dir) {
   let files = fs.readdirSync(dir);
   for (let file of files) {
      let fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
         findFiles(fullPath);
      } else if (fullPath.endsWith('.md')) {
         let content = fs.readFileSync(fullPath, 'utf8');
         let missingChecklist = !content.includes('<brevet-checklist');
         let missingDidYouKnow = !content.includes('savais-tu') && !content.includes('zoom sur') && !content.includes('Zoom sur');
         filesList.push({ file: fullPath, missingChecklist, missingDidYouKnow });
      }
   }
}

findFiles('src/content');
let tCheck = filesList.filter(f => f.missingChecklist);
let tDid = filesList.filter(f => f.missingDidYouKnow);
console.log("Missing checklist:", tCheck.length);
console.log("Missing did you know:", tDid.length);
console.log("Total:", filesList.length);
