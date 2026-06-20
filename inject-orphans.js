import fs from 'fs';
import path from 'path';

const orphanFiles = [
"src/content/cycle-4/francais/3eme/chapters/14-lanalyse-de-limage.md",
"src/content/cycle-4/francais/3eme/chapters/16-le-present-de-lindicatif.md",
"src/content/cycle-4/francais/3eme/chapters/23-laccord-du-participe-passe.md",
"src/content/cycle-4/francais/3eme/chapters/29-laccord-dans-le-groupe-nominal.md",
"src/content/cycle-4/francais/3eme/chapters/30-limperatif-present.md",
"src/content/cycle-4/francais/3eme/chapters/32-laccord-du-verbe-avec-son-sujet.md",
"src/content/cycle-4/francais/3eme/chapters/34-largumentation-et-lessai.md",
"src/content/cycle-4/francais/3eme/chapters/35-le-sujet-dinvention.md",
"src/content/cycle-4/histoire-geo-emc/3eme/chapters/05-le-monde-depuis-1945-vue-densemble.md",
"src/content/cycle-4/histoire-geo-emc/3eme/chapters/11-lunion-europeenne.md",
"src/content/cycle-4/histoire-geo-emc/3eme/chapters/12-les-espaces-productifs-et-leurs-evolutions.md",
"src/content/cycle-4/histoire-geo-emc/3eme/chapters/13-les-espaces-de-faible-densite.md",
"src/content/cycle-4/histoire-geo-emc/3eme/chapters/19-lengagement-civique-et-social.md",
"src/content/cycle-4/histoire-geo-emc/3eme/chapters/24-lanalyse-de-document.md",
"src/content/cycle-4/histoire-geo-emc/3eme/chapters/25-methodologie-le-developpement-construit.md",
"src/content/cycle-4/histoire-geo-emc/3eme/chapters/27-les-reperes-geographiques-pour-le-brevet.md",
"src/content/cycle-4/histoire-geo-emc/3eme/chapters/33-la-defense-et-laction-internationale.md",
"src/content/cycle-4/methodologie/3eme/chapters/04-conseils-pour-lhistoire-geo.md",
"src/content/cycle-4/oral/3eme/chapters/01-comprendre-lepreuve.md",
"src/content/cycle-4/oral/3eme/chapters/05-maitriser-lentretien.md",
"src/content/cycle-4/sciences/3eme/chapters/05-lenergie.md",
"src/content/cycle-4/sciences/3eme/chapters/06-lunivers-et-la-gravitation.md",
"src/content/cycle-4/sciences/3eme/chapters/07-lenergie-et-la-puissance-electrique.md",
"src/content/cycle-4/sciences/3eme/chapters/20-levolution-du-vivant.md",
"src/content/cycle-4/sciences/3eme/chapters/24-chaines-dinformation-et-daction.md",
"src/content/cycle-4/sciences/3eme/chapters/28-lenergie-et-le-developpement-durable.md",
"src/content/cycle-4/sciences/3eme/chapters/30-methodologie-scientifique-la-demarche-dinvestigation.md"
];

function generateObject(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    let titleMatch = content.match(/^#\s+(.*)/m);
    let title = titleMatch ? titleMatch[1].trim() : "Titre";
    let descMatch = content.match(/^##\s+.*?[\r\n]+(.*?)(?=[\r\n])/m);
    let desc = descMatch ? descMatch[1].trim() : "Description";
    if (desc.startsWith('<') || desc.length < 5) {
       desc = "Chapitre complet avec cours et exercices.";
    }
    if (desc.length > 50) {
        desc = desc.substring(0, 47) + "...";
    }
    
    let subjectMap = {
        'francais': { file: 'francais.ts', cat: 'Grammaire' },
        'histoire-geo-emc': { file: 'histoire.ts', cat: 'Histoire' },
        'methodologie': { file: 'methodologie.ts', cat: 'Méthodologie' },
        'oral': { file: 'oral.ts', cat: 'Oral' },
        'sciences': { file: 'physique.ts', cat: 'Physique-Chimie' }
    };
    
    // Guess category from title or folder
    let cat = subjectMap[filepath.split('/')[3]].cat;
    if (filepath.includes('histoire-geo-emc')) {
      if (filepath.includes('espaces') || filepath.includes('union') || filepath.includes('reperes-geographiques')) cat = 'Géographie';
      else if (filepath.includes('engagement') || filepath.includes('defense')) cat = 'EMC';
    }
    if (filepath.includes('sciences')) {
       if (filepath.includes('evolution')) cat = 'SVT';
       if (filepath.includes('chaines-din') || filepath.includes('modelisation')) cat = 'Technologie';
    }
    
    let subjectFile = false;
    if (cat === 'SVT') subjectFile = 'svt.ts';
    else if (cat === 'Technologie') subjectFile = 'techno.ts';
    else if (cat === 'Géographie') subjectFile = 'geo.ts';
    else if (cat === 'EMC') subjectFile = 'emc.ts';
    else subjectFile = subjectMap[filepath.split('/')[3]].file;
    
    let id = filepath.split('/').pop().replace('.md', '');
    
    return {
       file: 'src/data/' + subjectFile,
       obj: `    { id: '${id}', category: '${cat}', title: '${title.replace(/'/g, "\\'")}', description: '${desc.replace(/'/g, "\\'")}', type: 'sheet', difficulty: 2 },`
    };
}

let toInject = {};

for (const f of orphanFiles) {
    let { file, obj } = generateObject(f);
    if (!toInject[file]) toInject[file] = [];
    toInject[file].push(obj);
}

for (const file of Object.keys(toInject)) {
    let text = fs.readFileSync(file, 'utf8');
    let idx = text.indexOf('topics: [');
    if (idx !== -1) {
        idx += 'topics: ['.length;
        let p1 = text.substring(0, idx);
        let p2 = text.substring(idx);
        let newContent = p1 + '\n' + toInject[file].join('\n') + p2;
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Injected ${toInject[file].length} into ${file}`);
    }
}

