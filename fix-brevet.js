import fs from 'fs';
import path from 'path';

function fixDir(dir) {
   let files = fs.readdirSync(dir);
   for (let file of files) {
      let fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
         fixDir(fullPath);
      } else if (fullPath.endsWith('.md')) {
         let content = fs.readFileSync(fullPath, 'utf8');
         let newContent = content.replace(/<brevet-exercise([^>]+)>/g, (match, attrs) => {
             return `<brevet-exercise${attrs.replace('text=', 'question=').replace('correction=', 'solution=')}>`;
         });

         if (content !== newContent) {
             fs.writeFileSync(fullPath, newContent, 'utf8');
             console.log(`Replaced text/correction in ${fullPath}`);
         }
      }
   }
}

fixDir('src/content');
