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
         
         // we want to fix <method-box... :<br></method-box> -> <method-box... :<br/>
         let newContent = content.replace(/<method-box([^>]*?)<br><\/method-box>/g, '<method-box$1<br/>');
         newContent = newContent.replace(/<mini-quiz([^>]*?)<br><\/mini-quiz>/g, '<mini-quiz$1<br/>');

         if (content !== newContent) {
             fs.writeFileSync(fullPath, newContent, 'utf8');
             console.log(`Replaced in ${fullPath}`);
         }
      }
   }
}

fixDir('src/content');
