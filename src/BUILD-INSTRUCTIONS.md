# 📦 Instructions de Build et Déploiement - Cursiva

## 🚀 Build de Production

### 1. Commandes de build
```bash
# Installer les dépendances
npm install

# Build de production
npm run build

# Prévisualiser le build localement
npm run preview
```

### 2. Fichiers générés
Le build créera un dossier `/dist` contenant :
- ✅ Tous les fichiers HTML, CSS, JS optimisés
- ✅ Fichiers SEO copiés depuis `/public` :
  - `sitemap.xml`
  - `robots.txt`
  - `manifest.json`
  - `favicon.svg`
  - `favicon.ico`
  - `.htaccess`
  - `send-email.php`

### 3. Vérification du build
Après le build, vérifiez que le dossier `/dist` contient :
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [autres assets]
├── favicon.svg
├── favicon.ico
├── sitemap.xml
├── robots.txt
├── manifest.json
├── .htaccess
└── send-email.php
```

---

## 🌐 Déploiement

### Option 1 : Hébergement traditionnel (cPanel, FTP)

#### Via FTP/SFTP :
1. Connectez-vous à votre serveur via FTP
2. Uploadez **tout le contenu du dossier `/dist`** (pas le dossier lui-même)
3. Placez les fichiers dans le dossier racine (généralement `public_html` ou `www`)

#### Structure finale sur le serveur :
```
public_html/
├── index.html
├── assets/
├── favicon.svg
├── favicon.ico
├── sitemap.xml
├── robots.txt
├── manifest.json
├── .htaccess
└── send-email.php
```

### Option 2 : Netlify (Recommandé - Gratuit)

#### Déploiement automatique :
1. Créez un compte sur netlify.com
2. Connectez votre repository Git
3. Configuration :
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Netlify déploiera automatiquement à chaque push

#### Configuration Netlify (netlify.toml) :
Créez un fichier `netlify.toml` à la racine :
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### Option 3 : Vercel (Gratuit)

1. Installez Vercel CLI : `npm i -g vercel`
2. Dans le dossier du projet : `vercel`
3. Suivez les instructions

Ou via interface web :
1. Connectez votre repository sur vercel.com
2. Vercel détectera automatiquement Vite
3. Déploiement automatique

### Option 4 : GitHub Pages

1. Installez gh-pages : `npm install -D gh-pages`
2. Ajoutez dans `package.json` :
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Exécutez : `npm run deploy`

---

## ✅ Checklist après déploiement

### 1. Tests fonctionnels
- [ ] Le site s'affiche correctement
- [ ] Toutes les pages sont accessibles
- [ ] Le formulaire de contact fonctionne
- [ ] Les animations fonctionnent
- [ ] Le site est responsive (mobile/tablette/desktop)

### 2. Tests SEO
- [ ] Favicon visible dans l'onglet
- [ ] `https://votresite.ca/robots.txt` accessible
- [ ] `https://votresite.ca/sitemap.xml` accessible
- [ ] Balises meta visibles (clic droit > Afficher le code source)
- [ ] Google Search Console configuré
- [ ] Sitemap soumis à Google

### 3. Tests de performance
- [ ] Google PageSpeed Insights (score > 90)
- [ ] Site chargé en < 3 secondes
- [ ] Images optimisées
- [ ] HTTPS actif (cadenas vert)

### 4. Tests compatibilité
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓
- [ ] Mobile iOS ✓
- [ ] Mobile Android ✓

---

## 🔧 Configuration du serveur PHP (pour formulaire contact)

### Si vous utilisez un serveur PHP :

Le fichier `send-email.php` doit être configuré avec votre serveur SMTP.

**Option 1 : Utiliser mail() PHP natif**
- Fonctionne sur la plupart des hébergeurs
- Le fichier actuel utilise cette méthode

**Option 2 : Utiliser un service SMTP (recommandé)**
1. Installez PHPMailer ou utilisez un service comme SendGrid, Mailgun
2. Configurez les credentials dans `send-email.php`

### Test de l'envoi d'email :
1. Remplissez le formulaire de contact
2. Vérifiez les emails à contact@cursiva.ca
3. Vérifiez aussi le dossier spam

---

## 📊 Après le déploiement

### 1. Google Search Console
1. Allez sur : https://search.google.com/search-console
2. Ajoutez votre propriété : `cursiva.ca`
3. Soumettez le sitemap : `https://cursiva.ca/sitemap.xml`

### 2. Google Analytics (optionnel)
1. Créez une propriété GA4
2. Ajoutez le script de tracking dans `/index.html`

### 3. Google My Business
1. Créez votre profil : https://business.google.com
2. Vérifiez votre entreprise
3. Ajoutez des photos et informations

---

## 🐛 Résolution de problèmes

### Favicon ne s'affiche pas
1. Videz le cache : `Ctrl+Shift+R` ou `Cmd+Shift+R`
2. Vérifiez que `favicon.svg` et `favicon.ico` sont à la racine
3. Attendez 24-48h (cache DNS)

### Sitemap non accessible
1. Vérifiez que `sitemap.xml` est bien dans `/dist`
2. Accédez directement : `https://votresite.ca/sitemap.xml`
3. Vérifiez les permissions de fichier (644)

### Routes 404
1. Vérifiez que `.htaccess` est présent (Apache)
2. Pour Nginx, configurez les rewrites
3. Pour Netlify/Vercel, ajoutez les redirects

### Formulaire ne fonctionne pas
1. Vérifiez que PHP est activé sur le serveur
2. Vérifiez les permissions de `send-email.php` (644)
3. Consultez les logs PHP du serveur

---

## 📞 Support

Pour toute question technique :
- Documentation Vite : https://vitejs.dev
- Documentation React : https://react.dev
- Documentation React Router : https://reactrouter.com

---

**✨ Votre site est prêt à être déployé ! Bon lancement ! 🚀**
