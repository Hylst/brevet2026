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
         filesList.push(fullPath);
      }
   }
}

findFiles('src/content');
console.log(filesList.length);
