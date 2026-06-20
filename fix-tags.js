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
         let newContent = content.replace(/<brevet-exercise(.*?)(\/?)>/gs, (match, attrs, slash) => {
             if (slash === '/') {
                 return `<brevet-exercise${attrs}></brevet-exercise>`;
             }
             return match; // If not self-closing, leave it. But wait, what if it's <brevet-exercise>?
         });
         newContent = newContent.replace(/<brevet-exercise(.*?)(\/?)>\s*<\/brevet-exercise>/gs, (match, attrs) => {
            if (match.includes('</brevet-exercise>') && !match.slice(0, match.indexOf('>')).endsWith('/')) {
                return match; 
            }
            return `<brevet-exercise${attrs.replace(/\/$/, '')}></brevet-exercise>`;
         });
         
         // Fix self closing
         newContent = newContent.replace(/<brevet-exercise([^>]*?)\/>/g, '<brevet-exercise$1></brevet-exercise>');
         newContent = newContent.replace(/<method-box([^>]*?)\/>/g, '<method-box$1></method-box>');
         newContent = newContent.replace(/<mini-quiz([^>]*?)\/>/g, '<mini-quiz$1></mini-quiz>');

         if (content !== newContent) {
             fs.writeFileSync(fullPath, newContent, 'utf8');
             console.log(`Fixed self-closing tags in ${fullPath}`);
         }
      }
   }
}

fixDir('src/content');
