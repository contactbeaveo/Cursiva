#!/usr/bin/env node

/**
 * Script de build complet avec vérifications
 * Exécute toutes les étapes nécessaires pour créer un build production
 * Compatible Windows et Linux/Mac
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('\n' + '='.repeat(60));
console.log('🚀 BUILD COMPLET - CURSIVA');
console.log('='.repeat(60) + '\n');

// Étape 1: Nettoyage
console.log('📋 Étape 1/5: Nettoyage du dossier dist...\n');
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
  console.log('✅ Dossier dist nettoyé\n');
} else {
  console.log('ℹ️  Pas de dossier dist à nettoyer\n');
}

// Étape 2: Build Vite
console.log('📋 Étape 2/5: Build avec Vite...\n');
try {
  // Utiliser npm run build qui inclut déjà la copie des fichiers publics
  execSync('npm run build', { stdio: 'inherit', shell: true });
  console.log('\n✅ Build Vite terminé\n');
} catch (error) {
  console.error('❌ Erreur lors du build Vite');
  process.exit(1);
}

// Étape 3: Vérification
console.log('📋 Étape 3/5: Vérification du build...\n');
try {
  execSync('node verify-build.js', { stdio: 'inherit', shell: true });
  console.log('\n✅ Vérification réussie\n');
} catch (error) {
  console.error('❌ Erreur lors de la vérification');
  process.exit(1);
}

// Étape 4: Résumé
console.log('📋 Étape 4/5: Résumé du build...\n');

const assetsPath = path.join(distPath, 'assets');
let totalSize = 0;

// Calculer la taille totale
function getDirSize(dir) {
  let size = 0;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      size += getDirSize(filePath);
    } else {
      size += stats.size;
    }
  });
  
  return size;
}

totalSize = getDirSize(distPath);
const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);

console.log('📊 Statistiques du build:');
console.log(`   Taille totale: ${totalSizeMB} MB`);

// Compter les fichiers
const rootFiles = fs.readdirSync(distPath).filter(f => {
  return fs.statSync(path.join(distPath, f)).isFile();
});

const assetFiles = fs.existsSync(assetsPath) 
  ? fs.readdirSync(assetsPath).length 
  : 0;

console.log(`   Fichiers racine: ${rootFiles.length}`);
console.log(`   Assets: ${assetFiles} fichiers`);

console.log('\n' + '='.repeat(60));
console.log('✅ BUILD TERMINÉ AVEC SUCCÈS !');
console.log('='.repeat(60) + '\n');

console.log('📂 Le dossier /dist est prêt pour le déploiement\n');

console.log('🚀 Prochaines étapes:');
console.log('   1. Testez localement: npm run preview');
console.log('   2. Déployez le contenu de /dist sur votre serveur');
console.log('   3. Vérifiez https://votresite.ca/sitemap.xml');
console.log('   4. Vérifiez https://votresite.ca/robots.txt\n');

process.exit(0);