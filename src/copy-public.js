#!/usr/bin/env node

/**
 * Script de copie des fichiers publics vers dist
 * S'assure que TOUS les fichiers du dossier /public sont copiés, y compris les fichiers cachés
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

console.log('📦 Copie des fichiers publics vers /dist...\n');

// Créer le dossier dist s'il n'existe pas
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Liste de tous les fichiers à copier
const filesToCopy = [
  'favicon.svg',
  'favicon.ico',
  'sitemap.xml',
  'robots.txt',
  'manifest.json',
  'send-email.php',
  '404.html',
  '.htaccess'
];

let copiedCount = 0;
let errorCount = 0;

filesToCopy.forEach(file => {
  const srcPath = path.join(publicDir, file);
  const destPath = path.join(distDir, file);
  
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      const stats = fs.statSync(destPath);
      const size = (stats.size / 1024).toFixed(2);
      console.log(`✅ Copié: ${file} (${size} KB)`);
      copiedCount++;
    } else {
      console.log(`⚠️  Non trouvé: ${file}`);
    }
  } catch (error) {
    console.log(`❌ Erreur lors de la copie de ${file}:`, error.message);
    errorCount++;
  }
});

console.log('\n' + '='.repeat(50));
console.log(`✅ ${copiedCount} fichiers copiés avec succès`);

if (errorCount > 0) {
  console.log(`❌ ${errorCount} erreur(s)`);
  process.exit(1);
} else {
  console.log('\n🎉 Tous les fichiers publics ont été copiés vers /dist !');
  process.exit(0);
}
