const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name.endsWith('.md')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract all mini-quiz and brevet-exercise tags
  const quizRegex = /<mini-quiz[\s\S]*?<\/mini-quiz>/g;
  const exerciseRegex = /<brevet-exercise[\s\S]*?<\/brevet-exercise>/g;
  const checklistRegex = /<brevet-checklist[\s\S]*?><\/brevet-checklist>/g;

  let quizzes = [];
  let match;
  while ((match = quizRegex.exec(content)) !== null) {
    quizzes.push(match[0]);
  }
  let exercises = [];
  while ((match = exerciseRegex.exec(content)) !== null) {
    exercises.push(match[0]);
  }
  let checklists = [];
  while ((match = checklistRegex.exec(content)) !== null) {
    checklists.push(match[0]);
  }

  // Remove them from the content
  content = content.replace(quizRegex, '').replace(exerciseRegex, '').replace(checklistRegex, '');

  // Remove trailing whitespace and multiple newlines
  content = content.replace(/\n{3,}/g, '\n\n').trim();

  // Remove empty Entraînement sections if they exist
  content = content.replace(/## 📝 Entraînement(\sSupplémentaire)?\n?/g, '').trim();
  content = content.replace(/## 4. Exercices Interactifs 📝\n?/g, '').trim();
  content = content.replace(/## 6. Exercices Type Brevet 📝\n?/g, '').trim();
  content = content.replace(/#+ 📝 Entraînement.*\n?/g, '').trim();

  // Re-build the content
  let newContent = content + '\n\n';

  if (quizzes.length > 0 || exercises.length > 0) {
    newContent += '## 📝 Entraînement\n\n';
    
    for (const ex of exercises) {
      newContent += ex + '\n\n';
    }
    for (const q of quizzes) {
      newContent += q + '\n\n';
    }
  }

  if (checklists.length > 0) {
    newContent += checklists[0] + '\n\n';
  }

  fs.writeFileSync(filePath, newContent.trim() + '\n', 'utf8');
}

processDir('src/content');
console.log('Done!');
