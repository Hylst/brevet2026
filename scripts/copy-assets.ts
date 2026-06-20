import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_DIR = path.join(__dirname, '../src/content');
const PUBLIC_ASSETS_DIR = path.join(__dirname, '../public/assets');

if (!fs.existsSync(PUBLIC_ASSETS_DIR)) {
  fs.mkdirSync(PUBLIC_ASSETS_DIR, { recursive: true });
}

const subjects = fs.readdirSync(CONTENT_DIR).filter(f => fs.statSync(path.join(CONTENT_DIR, f)).isDirectory());

for (const subject of subjects) {
  const assetsDir = path.join(CONTENT_DIR, subject, 'assets');
  if (fs.existsSync(assetsDir)) {
    const assets = fs.readdirSync(assetsDir);
    for (const asset of assets) {
      fs.copyFileSync(
        path.join(assetsDir, asset),
        path.join(PUBLIC_ASSETS_DIR, asset)
      );
    }
  }
}

console.log('Assets copied to public/assets/');
