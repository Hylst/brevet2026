import fs from 'fs';
import path from 'path';

function findIssues() {
  const issues = [];
  const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
      const dirFile = path.join(dir, file);
      if (fs.statSync(dirFile).isDirectory()) {
         filelist = walkSync(dirFile, filelist);
      } else {
         filelist.push(dirFile);
      }
    });
    return filelist;
  };

  const mdFiles = walkSync('src/content').filter(f => f.endsWith('.md'));
  
  for (const file of mdFiles) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Proper parsing of options attribute.
    // It's options="something" or options='something'
    const quizMatches = content.matchAll(/<mini-quiz[\s\S]*?options=(['"])([\s\S]*?)\1[\s\S]*?correctAnswer=(['"])(.*?)\3/g);
    for (const match of quizMatches) {
        let optionsStr = match[2];
        let correctStr = match[4];
        try {
            let optionsLength = 0;
            if (optionsStr.startsWith('[')) {
                // To parse, we must handle &apos; or &quot; maybe?
                // actually JSON.parse handles \", but HTML entity? It might fail.
                let toParse = optionsStr.replace(/&quot;/g, '"').replace(/&apos;/g, "'");
                try {
                    const parsed = JSON.parse(toParse);
                    optionsLength = parsed.length;
                } catch(e) {
                   issues.push(`Real JSON parse error: ${e.message} in ${file} : |${optionsStr}|`);
                   continue;
                }
            } else {
                optionsLength = optionsStr.split('|').length;
            }
            const correctIdx = parseInt(correctStr, 10);
            if (isNaN(correctIdx) || correctIdx < 0 || correctIdx >= optionsLength) {
                issues.push(`Invalid correctAnswer "${correctStr}" for options len ${optionsLength} in ${file}`);
            }
        } catch(e) {
            issues.push(`Error parsing options "${optionsStr}" in ${file}: ${e.message}`);
        }
    }
  }
  console.log("Found issues:\n" + issues.join('\n'));
}
findIssues();
