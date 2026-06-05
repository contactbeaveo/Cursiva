#!/usr/bin/env node

/**
 * Script de vérification du build
 * Vérifie que tous les fichiers SEO sont présents dans /dist
 */

const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const requiredFiles = [
  'index.html',
  'favicon.svg',
  'favicon.ico',
  'sitemap.xml',
  'robots.txt',
  'manifest.json',
  'send-email.php',
  '404.html',
  '.htaccess'
];

console.log('🔍 Vérification du build...\n');

let allFilesPresent = true;

requiredFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  const exists = fs.existsSync(filePath);
  
  if (exists) {
    const stats = fs.statSync(filePath);
    const size = (stats.size / 1024).toFixed(2);
    console.log(`✅ ${file} (${size} KB)`);
  } else {
    console.log(`❌ ${file} - MANQUANT!`);
    allFilesPresent = false;
  }
});

// Vérifier que le dossier assets existe
const assetsPath = path.join(distPath, 'assets');
if (fs.existsSync(assetsPath)) {
  const files = fs.readdirSync(assetsPath);
  console.log(`\n📦 Dossier assets: ${files.length} fichiers`);
} else {
  console.log('\n❌ Dossier assets manquant!');
  allFilesPresent = false;
}

console.log('\n' + '='.repeat(50));

if (allFilesPresent) {
  console.log('✅ Build vérifié avec succès!');
  console.log('\n📋 Prochaines étapes:');
  console.log('   1. Testez localement: npm run preview');
  console.log('   2. Déployez le contenu de /dist sur votre serveur');
  console.log('   3. Vérifiez https://votresite.ca/sitemap.xml');
  console.log('   4. Vérifiez https://votresite.ca/robots.txt');
  console.log('   5. Soumettez le sitemap à Google Search Console');
  process.exit(0);
} else {
  console.log('❌ Certains fichiers sont manquants!');
  console.log('\n🔧 Solutions:');
  console.log('   1. Vérifiez que tous les fichiers sont dans /public');
  console.log('   2. Relancez: npm run build');
  console.log('   3. Vérifiez vite.config.ts');
  process.exit(1);
}