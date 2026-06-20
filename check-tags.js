import fs from 'fs';
import path from 'path';

function checkDir(dir) {
   let files = fs.readdirSync(dir);
   for (let file of files) {
      let fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
         checkDir(fullPath);
      } else if (fullPath.endsWith('.md')) {
         let content = fs.readFileSync(fullPath, 'utf8');
         checkTags(fullPath, content);
      }
   }
}

function checkTags(file, content) {
    let components = ['mini-quiz', 'method-box', 'brevet-exercise', 'definition-box', 'concept-card'];
    for (let comp of components) {
       let opens = (content.match(new RegExp(`<${comp}\\s`, 'g')) || []).length;
       opens += (content.match(new RegExp(`<${comp}>`, 'g')) || []).length;
       let closes = (content.match(new RegExp(`</${comp}>`, 'g')) || []).length;
       let selfCloses = (content.match(new RegExp(`<${comp}[^>]*/>`, 'g')) || []).length;
       
       if (opens !== closes) {
           console.log(`Mismatch in ${file} for ${comp}: ${opens} opens vs ${closes} closes vs ${selfCloses} self-closes`);
       }
    }
}

checkDir('src/content');
