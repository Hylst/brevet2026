import fs from 'fs';
import path from 'path';

let files = fs.readdirSync('public/assets');
let countMissing = 0;
for (let file of files) {
   if (file.endsWith('.svg')) {
       let full = path.join('public/assets', file);
       let content = fs.readFileSync(full, 'utf8');
       if (!content.includes('viewBox')) {
           countMissing++;
           console.log("Missing viewBox:", file);
       }
   }
}
console.log("Total missing:", countMissing);
