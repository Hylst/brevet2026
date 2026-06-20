import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content');
const OUTPUT_DIR = path.join(__dirname, '../print-version');
const ASSETS_OUT_DIR = path.join(OUTPUT_DIR, 'assets');

// Ensure output directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(ASSETS_OUT_DIR)) {
  fs.mkdirSync(ASSETS_OUT_DIR, { recursive: true });
}

async function buildBook() {
  console.log('📚 Début de la génération du livre numérique...');
  
  let masterMd = `# Le Grand Livre du Brevet 2026\n\n`;
  masterMd += `Ce document contient l'intégralité des fiches de révision pour le Brevet.\n\n`;
  masterMd += `## Table des matières\n\n`;

  const subjects = fs.readdirSync(CONTENT_DIR).filter(f => fs.statSync(path.join(CONTENT_DIR, f)).isDirectory());

  // 1. Generate Table of Contents
  for (const subject of subjects) {
    masterMd += `- [${subject.toUpperCase()}](#${subject})\n`;
  }
  masterMd += `\n---\n\n`;

  // 2. Concatenate content and copy assets
  for (const subject of subjects) {
    console.log(`Traitement de la matière : ${subject}...`);
    masterMd += `<h1 id="${subject}" style="page-break-before: always;">${subject.toUpperCase()}</h1>\n\n`;
    
    const chaptersDir = path.join(CONTENT_DIR, subject, 'chapters');
    const assetsDir = path.join(CONTENT_DIR, subject, 'assets');

    // Copy assets
    if (fs.existsSync(assetsDir)) {
      const assets = fs.readdirSync(assetsDir);
      for (const asset of assets) {
        fs.copyFileSync(
          path.join(assetsDir, asset),
          path.join(ASSETS_OUT_DIR, `${subject}-${asset}`)
        );
      }
    }

    // Read chapters
    if (fs.existsSync(chaptersDir)) {
      const chapters = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.md'));
      for (const chapter of chapters) {
        let content = fs.readFileSync(path.join(chaptersDir, chapter), 'utf-8');
        
        // Rewrite asset paths: ../assets/file.svg -> ./assets/subject-file.svg
        content = content.replace(/\.\.\/assets\/([^)]+)/g, `./assets/${subject}-$1`);
        
        // Increase heading levels so they nest under the subject
        // # Title -> ## Title
        // We do this carefully to avoid messing up code blocks, but a simple replace is usually fine for this content.
        content = content.replace(/^### /gm, '#### ');
        content = content.replace(/^## /gm, '### ');
        content = content.replace(/^# /gm, '## ');

        masterMd += content + `\n\n---\n\n`;
      }
    }
  }

  // Write master file
  fs.writeFileSync(path.join(OUTPUT_DIR, 'Brevet_2026_Livre.md'), masterMd, 'utf-8');
  
  // Write a README with Pandoc instructions
  const readmeMd = `# Instructions d'impression (Pandoc)\n\nPour convertir ce fichier Markdown en document imprimable (PDF ou DOCX), vous pouvez utiliser [Pandoc](https://pandoc.org/).\n\n## Exemples de commandes\n\n**Vers PDF :**\n\`\`\`bash\npandoc Brevet_2026_Livre.md -o Brevet_2026_Livre.pdf --pdf-engine=xelatex\n\`\`\`\n\n**Vers HTML (pour imprimer depuis le navigateur) :**\n\`\`\`bash\npandoc Brevet_2026_Livre.md -o Brevet_2026_Livre.html --self-contained\n\`\`\``;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'LISEZMOI.md'), readmeMd, 'utf-8');

  console.log(`\n✅ Livre numérique généré avec succès dans 'print-version/Brevet_2026_Livre.md' !`);
  console.log(`Les images SVG ont été copiées et renommées dans 'print-version/assets/'.`);
}

buildBook().catch(console.error);
