# 🔨 Guide de Build - Cursiva

## 🚀 Commandes de Build

### Option 1 : Build Complet (RECOMMANDÉ)
```bash
npm run build:complete
```
Cette commande exécute automatiquement :
1. ✅ Nettoyage du dossier `/dist`
2. ✅ Build avec Vite
3. ✅ Copie des fichiers SEO
4. ✅ Vérification complète
5. ✅ Affichage des statistiques

**C'est la commande la plus simple et la plus fiable !**

### Option 2 : Build Standard avec Vérification
```bash
npm run build:verify
```
Exécute :
1. Build Vite + copie automatique
2. Vérification des fichiers

### Option 3 : Build Simple
```bash
npm run build
```
Build standard avec copie automatique des fichiers publics.

---

## 📋 Résultat Attendu

Après le build, vous devriez voir dans le terminal :

```
✅ Build vérifié avec succès!

📋 Prochaines étapes:
   1. Testez localement: npm run preview
   2. Déployez le contenu de /dist sur votre serveur
   3. Vérifiez https://votresite.ca/sitemap.xml
   4. Vérifiez https://votresite.ca/robots.txt
   5. Soumettez le sitemap à Google Search Console
```

### Structure du dossier /dist
```
dist/
├── index.html              ← Page principale
├── 404.html                ← Page d'erreur 404
├── favicon.svg             ← Favicon principal
├── favicon.ico             ← Favicon fallback
├── sitemap.xml             ← Sitemap SEO
├── robots.txt              ← Directives crawlers
├── manifest.json           ← PWA manifest
├── send-email.php          ← Script formulaire
├── .htaccess               ← Config Apache
└── assets/                 ← CSS, JS, images
    ├── index-[hash].js
    ├── index-[hash].css
    └── [autres fichiers]
```

---

## ✅ Vérification du Build

### Vérification Automatique
```bash
npm run verify
```
Affiche tous les fichiers présents dans `/dist` avec leur taille.

### Vérification Manuelle
Ouvrez le dossier `/dist` et vérifiez que tous ces fichiers sont présents :

- [ ] `index.html` (HTML principal)
- [ ] `404.html` (Page erreur)
- [ ] `favicon.svg` (Icône site)
- [ ] `favicon.ico` (Icône fallback)
- [ ] `sitemap.xml` (Sitemap SEO)
- [ ] `robots.txt` (Robots)
- [ ] `manifest.json` (PWA)
- [ ] `send-email.php` (Formulaire)
- [ ] `.htaccess` (Apache config)
- [ ] `assets/` (Dossier avec JS/CSS)

---

## 🧪 Test Local

Après le build, testez localement :

```bash
npm run preview
```

Puis ouvrez : **http://localhost:4173**

### Tests à faire :
- [ ] Page d'accueil s'affiche
- [ ] Favicon visible dans l'onglet
- [ ] Navigation fonctionne
- [ ] Formulaire fonctionne
- [ ] Page 404 s'affiche (allez sur `/page-inexistante`)
- [ ] Fichiers SEO accessibles :
  - http://localhost:4173/sitemap.xml
  - http://localhost:4173/robots.txt
  - http://localhost:4173/manifest.json

---

## 🐛 Résolution de Problèmes

### ❌ Problème : Fichiers manquants dans /dist

**Solution 1 : Recréer le build**
```bash
rm -rf dist node_modules
npm install
npm run build:complete
```

**Solution 2 : Copier manuellement**
```bash
npm run copy-public
```

### ❌ Problème : .htaccess non copié

Le fichier `.htaccess` commence par un point, certains systèmes le cachent.

**Vérification :**
```bash
ls -la dist/
```
Vous devriez voir `.htaccess` dans la liste.

**Solution :**
Le script `copy-public.js` copie spécifiquement `.htaccess`.
Exécutez :
```bash
node copy-public.js
```

### ❌ Problème : Build échoue

**Vérifiez Node.js :**
```bash
node --version  # Doit être >= 18
```

**Réinstallez les dépendances :**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Rebuild :**
```bash
npm run build:complete
```

### ❌ Problème : Dossier dist vide ou incomplet

**Nettoyez et reconstruisez :**
```bash
rm -rf dist
npm run build:complete
```

---

## 📦 Déploiement

Une fois le build vérifié, déployez le **CONTENU du dossier /dist** :

### Netlify (Drag & Drop)
1. Glissez-déposez le dossier `/dist` sur netlify.com
2. ✅ C'est tout !

### FTP/SFTP
1. Connectez-vous à votre serveur
2. Uploadez **le contenu de /dist** (pas le dossier lui-même)
3. Placez les fichiers dans `public_html` ou `www`

### Ligne de commande (exemple avec rsync)
```bash
rsync -avz --delete dist/ user@server:/path/to/public_html/
```

---

## 📊 Taille du Build

Un build typique de Cursiva fait environ **300-600 KB** :

- **index.html** : ~15 KB
- **CSS** : ~50-100 KB (minifié)
- **JavaScript** : ~150-300 KB (minifié)
- **Fichiers SEO** : ~10 KB total
- **Images** : Variable selon le contenu

**Objectif Performance :**
- Score PageSpeed > 90
- Temps de chargement < 2 secondes
- First Contentful Paint < 1.5s

---

## 🔄 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production standard |
| `npm run build:complete` | ⭐ Build complet avec vérifications |
| `npm run build:verify` | Build + vérification |
| `npm run preview` | Prévisualiser le build |
| `npm run verify` | Vérifier le build existant |
| `npm run copy-public` | Copier fichiers publics seulement |

---

## 📝 Checklist Pre-Déploiement

Avant de déployer, vérifiez :

### Build
- [ ] `npm run build:complete` réussi
- [ ] Tous les fichiers présents dans `/dist`
- [ ] `npm run preview` fonctionne
- [ ] Pas d'erreurs dans la console

### Contenu
- [ ] Toutes les pages s'affichent
- [ ] Formulaire de contact fonctionne
- [ ] Images se chargent
- [ ] Liens fonctionnent

### SEO
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] manifest.json valide
- [ ] Favicon visible
- [ ] Meta tags présents (View Source)

### Performance
- [ ] Build < 1 MB
- [ ] Pas de console.log en production
- [ ] CSS/JS minifiés

---

## 🎯 Après le Déploiement

1. **Testez le site en ligne**
   - Ouvrez https://votresite.ca
   - Testez toutes les pages
   - Vérifiez le formulaire

2. **Vérifiez les fichiers SEO**
   - https://votresite.ca/sitemap.xml ✅
   - https://votresite.ca/robots.txt ✅
   - https://votresite.ca/manifest.json ✅

3. **Google Search Console**
   - Soumettez le sitemap
   - Demandez l'indexation

4. **Performance**
   - Testez sur PageSpeed Insights
   - Objectif : Score > 90

---

## 💡 Conseils

### Pour un build optimal :
1. Utilisez toujours `npm run build:complete`
2. Vérifiez avec `npm run preview` avant de déployer
3. Testez sur mobile ET desktop
4. Videz le cache navigateur pour tester

### Pour le développement :
1. Utilisez `npm run dev` pour développer
2. Testez régulièrement avec `npm run build:complete`
3. Commitez souvent votre code

### Pour la production :
1. Ne modifiez jamais directement les fichiers dans `/dist`
2. Faites toujours un build complet avant de déployer
3. Gardez une copie de backup du build précédent

---

**✅ Votre build est maintenant prêt pour le déploiement !**

**📞 Besoin d'aide ?** Consultez `DEPLOY-QUICK.md` pour le déploiement.
