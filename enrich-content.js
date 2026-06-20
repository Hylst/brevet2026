import fs from 'fs';
import path from 'path';

function processFile(fullPath) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let titleMatch = content.match(/^#\s(.*?)$/m);
    let title = titleMatch ? titleMatch[1] : "Ce chapitre";
    
    // Extract H2s and H3s
    let headers = [];
    let hRegex = /^(##|###)\s(.*?)$/gm;
    let match;
    while ((match = hRegex.exec(content)) !== null) {
       let clean = match[2].replace(/[🌍🛡️🔮]/g, '').trim();
       if (clean && !clean.toLowerCase().includes('entraînement') && !clean.toLowerCase().includes('annexe')) {
           headers.push(clean);
       }
    }
    
    let checklistStr = '';
    if (!content.includes('<brevet-checklist')) {
       // create checklist from headers
       let items = headers.slice(0, 4).map(h => `Je maîtrise les notions de : ${h}`);
       if (items.length === 0) items = [`Je connais le contenu du cours sur ${title}`];
       let itemsJson = JSON.stringify(items).replace(/'/g, "&apos;");
       checklistStr = `\n<brevet-checklist items='${itemsJson}'></brevet-checklist>\n`;
    }

    let insertDidYouKnow = !content.includes('savais-tu') && !content.includes('Zoom sur');
    let enrichStr = '';
    if (insertDidYouKnow) {
        // extract a cool sentence or make a generic one
        enrichStr = `\n<callout type="tip" title="💡 Le savais-tu ?">\nCe chapitre sur **${title}** contient des éléments indispensables pour bien comprendre les bases du programme. Maîtriser ces notions te fait gagner un temps précieux pour la suite de ton apprentissage !\n</callout>\n\n<concept-card title="🔍 Zoom sur..." icon="PlusCircle" description="L'enjeu majeur de ce thème est de lier ces notions avec les exemples concrets vus en classe. Prends le temps de relire les définitions clés avant de passer aux quiz !"></concept-card>\n`;
    }

    if (checklistStr || enrichStr) {
        let lines = content.split('\n');
        let entrainementIdx = lines.findIndex(l => l.includes('📝 Entraînement'));
        if (entrainementIdx !== -1) {
            lines.splice(entrainementIdx, 0, enrichStr);
            // insert checklist at the end
            lines.push(checklistStr);
            content = lines.join('\n');
        } else {
            content += enrichStr + checklistStr;
        }
        
        // fix any double newlines
        content = content.replace(/\n{3,}/g, '\n\n');
        fs.writeFileSync(fullPath, content, 'utf8');
    }
}

function traverse(dir) {
   let files = fs.readdirSync(dir);
   for (let file of files) {
      let fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
         traverse(fullPath);
      } else if (fullPath.endsWith('.md')) {
         processFile(fullPath);
      }
   }
}

traverse('src/content');
console.log("Processed all files!");
