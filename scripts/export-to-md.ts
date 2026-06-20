import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '../print-version');
const CONTENT_DIR = path.join(__dirname, '../src/content');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function slugify(text: string) {
  return text.toString().toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

async function exportToMarkdown() {
  let masterMd = `# Brevet 2026 - Fiches de Révisions et Quiz\n\nCe document contient l'intégralité du programme de révision pour le Brevet 2026.\n\n`;
  masterMd += `## Table des matières\n\n`;
  
  const subjects = fs.readdirSync(CONTENT_DIR).filter(f => fs.statSync(path.join(CONTENT_DIR, f)).isDirectory());

  for (const subject of subjects) {
    masterMd += `- [${subject.toUpperCase()}](#${slugify(subject)})\n`;
  }
  masterMd += `\n---\n\n`;

  for (const subject of subjects) {
    console.log(`Génération du Markdown pour : ${subject}...`);
    let subjectMd = `# ${subject.toUpperCase()}\n\n`;
    
    const chaptersDir = path.join(CONTENT_DIR, subject, 'chapters');
    if (fs.existsSync(chaptersDir)) {
      const chapters = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.md'));
      for (const chapter of chapters) {
        const content = fs.readFileSync(path.join(chaptersDir, chapter), 'utf-8');
        subjectMd += content + `\n\n---\n\n`;
      }
    }
    
    // Write individual subject file
    const fileName = `${slugify(subject)}.md`;
    fs.writeFileSync(path.join(OUTPUT_DIR, fileName), subjectMd, 'utf-8');
    
    // Append to master file
    masterMd += subjectMd;
  }

  // Write master file
  fs.writeFileSync(path.join(OUTPUT_DIR, 'Brevet_2026_Complet.md'), masterMd, 'utf-8');
  
  // Write a README with Pandoc instructions
  const readmeMd = `# Instructions d'impression (Pandoc)\n\nPour convertir ces fichiers Markdown en documents imprimables (DOCX ou PDF), vous pouvez utiliser [Pandoc](https://pandoc.org/).\n\n## Exemples de commandes\n\n**Vers DOCX (Word) :**\n\`\`\`bash\npandoc Brevet_2026_Complet.md -o Brevet_2026_Complet.docx\n\`\`\`\n\n**Vers PDF :**\n\`\`\`bash\npandoc Brevet_2026_Complet.md -o Brevet_2026_Complet.pdf --pdf-engine=xelatex\n\`\`\`\n\n*(Note : la conversion PDF nécessite un moteur LaTeX comme texlive ou miktex installé sur votre machine).*`;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'LISEZMOI.md'), readmeMd, 'utf-8');

  console.log(`\n✅ Export terminé avec succès dans le dossier 'print-version/' !`);
}

exportToMarkdown().catch(console.error);
