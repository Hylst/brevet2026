import fs from 'fs';
import path from 'path';

function fixJsonOptions(file) {
    let content = fs.readFileSync(file, 'utf8');
    let issues = 0;
    
    // Find options='[...]'; if there are unescaped single quotes inside the string...
    // Actually the easiest way to fix the `<mini-quiz>` and `<brevet-exercise>` JSON errors is to parse options attributes.
    // Replace single quotes surrounding options like options='[...]' to options="{['...']}" ... no, it's HTML/JSX inside Markdown.
    // In our markdown parser, we use react-markdown. Attributes let you pass strings options="[\"A\", \"B\"]".
    // Or options='["A", "B", "C"]'
    
    let result = content.replace(/options=['"](\[.*?\])['"]/g, (match, arrayStr) => {
        // Try to parse it
        try {
            JSON.parse(arrayStr);
            return match; // It's fine
        } catch(e) {
            issues++;
            // It might be fine if we replace inner string using something else?
            // Actually many options are separated by pipe: options="A|B|C"
            // Let's check how the source handles it. If it's a JSON array with single quotes, it fails.
            
            // Just replace single quotes inside the array with proper escaped double quotes etc.
            // A common mistake is options='["L'eau", "L'air"]'. We should escape the inner single quotes?
            // Nope, JSON requires double quotes around strings. If there's an apostrophe inside a double-quoted string, it's fine! 
            // example: ["L'eau", "L'air"] -> valid JSON!
            // BUT if the attribute is wrapped in single quotes: options='["L'eau", "L'air"]', the markdown parser sees options='["L' and the rest is garbage!
            // THAT is the issue!
            
            // So we should wrap options in double quotes, and HTML-encode any double quotes inside the string?
            // Yes, options="[&quot;A&quot;, &quot;B&quot;]"
            // OR even better: just change options to pipe separated string! options="A|B|C"
            
            try {
                // If it was meant to be JSON but got truncated or messed up...
                // let's just make it pipe-separated
                let clean = arrayStr.replace(/^\[/, '').replace(/\]$/, '');
                // It looks like "A", "B, C", "D"
                // split by "," ... this is hard.
                // Just let's use a regex to match string literals
                let items = [...clean.matchAll(/["'](.*?)["']/g)].map(m => m[1]);
                if (items.length > 0) {
                   return `options="${items.join('|')}"`;
                }
            } catch(ex) {}
            return match;
        }
    });

    if (issues > 0) {
        fs.writeFileSync(file, result, 'utf8');
    }
}

// 2. Fix Index out of bounds
function fixOutOfBounds(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    content = content.replace(/<(mini-quiz|brevet-exercise)([\s\S]*?)correctAnswer=['"](\d+)['"]([\s\S]*?)>/g, (match, tag, before, correctStr, after) => {
        let full = before + after;
        let optionsMatch = full.match(/options=['"](.*?)['"]/);
        if (optionsMatch) {
            let optionsStr = optionsMatch[1];
            let len = 0;
            if (optionsStr.startsWith('[')) {
                try {
                   len = JSON.parse(optionsStr).length;
                } catch(e) {
                   // if parsing fails, maybe it's pipe separated?
                   len = optionsStr.split('|').length;
                }
            } else {
                len = optionsStr.split('|').length;
            }
            
            let correctIdx = parseInt(correctStr, 10);
            if (correctIdx >= len) {
               // fix it to len - 1
               correctIdx = Math.max(0, len - 1);
               console.log(`Fixing out of bounds in ${file}: was ${correctStr}, set to ${correctIdx} (len ${len})`);
               return `<${tag}${before}correctAnswer="${correctIdx}"${after}>`;
            }
        }
        return match;
    });
    
    fs.writeFileSync(file, content, 'utf8');
}

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
for (const f of mdFiles) {
    fixJsonOptions(f);
    fixOutOfBounds(f);
}
