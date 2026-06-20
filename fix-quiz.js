import fs from 'fs';
import path from 'path';

function fixOptions(dir) {
   let files = fs.readdirSync(dir);
   for (let file of files) {
      let fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
         fixOptions(fullPath);
      } else if (fullPath.endsWith('.md')) {
         let content = fs.readFileSync(fullPath, 'utf8');
         let newContent = content.replace(/options="([^"]*?\|[^"]*?)"/g, (match, optsStr) => {
             let arr = optsStr.split("|");
             return `options='${JSON.stringify(arr)}'`;
         });
         // In case there are quotes inside the array strings, JSON.stringify handles them (they become \"). 
         // But my outer delimiter is single quote so it's safe.
         // Let's also check for single quotes in the array elements just in case they clash with the outer HTML single quotes.
         newContent = newContent.replace(/options='([^']*)'/g, (match, innerJson) => {
             // to be ultra safe, let's just make sure inner single quotes are escaped or just use &apos;
             try {
                // If it is valid JSON, check for single quotes that might be inside. Wait, JSON.stringify doesn't escape single quotes. 
                // So if an element contains ' , it will break the HTML attribute parsing.
                let arr = JSON.parse(innerJson);
                let safeInner = JSON.stringify(arr).replace(/'/g, "&apos;");
                return `options='${safeInner}'`;
             } catch(e) {
                return match; 
             }
         });

         if (content !== newContent) {
             fs.writeFileSync(fullPath, newContent, 'utf8');
             console.log("Fixed in: " + fullPath);
         }
      }
   }
}
fixOptions('src/content');
