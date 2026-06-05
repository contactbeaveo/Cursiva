# 🚀 Guide Rapide de Déploiement - Cursiva

## ⚡ En 5 minutes

### 1️⃣ Build
```bash
npm install
npm run build:verify
```

Cela va :
- Installer les dépendances
- Créer le dossier `/dist` avec tous les fichiers optimisés
- Vérifier que tous les fichiers SEO sont présents ✅

### 2️⃣ Vérifier le build
Après le build, vous devriez voir :
```
✅ index.html
✅ favicon.svg
✅ favicon.ico
✅ sitemap.xml
✅ robots.txt
✅ manifest.json
✅ send-email.php
✅ 404.html
✅ .htaccess
📦 Dossier assets: XX fichiers
```

### 3️⃣ Test local (optionnel)
```bash
npm run preview
```
Ouvrez http://localhost:4173 pour tester le build

---

## 🌐 Déploiement

### Option A : Netlify (RECOMMANDÉ - 2 minutes)

1. **Créez un compte gratuit** : https://netlify.com
2. **Glissez-déposez** le dossier `/dist` sur Netlify
3. **C'est fait !** Votre site est en ligne

**OU via Git (automatique) :**
1. Poussez votre code sur GitHub
2. Connectez Netlify à votre repo
3. Netlify build et déploie automatiquement

### Option B : Serveur traditionnel (FTP)

1. **Connectez-vous via FTP** à votre hébergement
2. **Uploadez le CONTENU de `/dist`** (pas le dossier lui-même)
3. **Placez dans `public_html`** ou équivalent

**Structure finale :**
```
public_html/
├── index.html          ← À la racine !
├── assets/
├── favicon.svg
├── sitemap.xml
└── robots.txt
```

---

## ✅ Après le déploiement (IMPORTANT)

### 1. Testez votre site
- [ ] Ouvrez https://votresite.ca
- [ ] Vérifiez que le favicon s'affiche
- [ ] Testez toutes les pages
- [ ] Testez le formulaire de contact

### 2. Vérifiez les fichiers SEO
- [ ] Allez sur : **https://votresite.ca/sitemap.xml**
  → Devrait afficher le XML
- [ ] Allez sur : **https://votresite.ca/robots.txt**
  → Devrait afficher le texte
- [ ] Vérifiez le code source (clic droit > Voir le code source)
  → Les balises meta doivent être présentes

### 3. Google Search Console (CRITIQUE)
1. Allez sur : https://search.google.com/search-console
2. Cliquez "Ajouter une propriété"
3. Entrez : `https://votresite.ca`
4. Vérifiez la propriété (méthode HTML recommandée)
5. Dans le menu "Sitemaps", ajoutez : `https://votresite.ca/sitemap.xml`
6. Cliquez "Soumettre"

**✅ Fait ! Google va maintenant indexer votre site**

### 4. Google My Business (SEO local)
1. Créez un profil : https://business.google.com
2. Remplissez toutes les infos :
   - Nom : **Cursiva**
   - Catégorie : **Agence web**
   - Téléphone : **581 446 7277**
   - Site web : **https://votresite.ca**
   - Adresse au Québec
3. Vérifiez votre entreprise (par courrier ou téléphone)

---

## 🐛 Problèmes fréquents

### ❌ Favicon ne s'affiche pas
**Solution :**
1. Videz le cache : `Ctrl+Shift+R` (Windows) ou `Cmd+Shift+R` (Mac)
2. Vérifiez que `favicon.svg` est bien à la racine de votre site
3. Attendez 24-48h (cache DNS)

### ❌ Sitemap.xml donne 404
**Solution :**
1. Vérifiez que `sitemap.xml` est à la racine (pas dans un sous-dossier)
2. Vérifiez l'URL : `https://votresite.ca/sitemap.xml` (pas `/public/sitemap.xml`)
3. Sur certains serveurs, vérifiez les permissions : `644`

### ❌ Pages donnent 404 (sauf accueil)
**Solution pour Apache :**
1. Vérifiez que `.htaccess` est présent
2. Si manquant, créez-le avec :
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Pour Netlify :** Déjà configuré ✅

### ❌ Formulaire de contact ne fonctionne pas
**Solution :**
1. Vérifiez que PHP est activé sur le serveur
2. Testez un simple fichier PHP : `<?php phpinfo(); ?>`
3. Vérifiez les logs d'erreur PHP
4. Assurez-vous que `send-email.php` a les bonnes permissions (644)

---

## 📊 Statistiques SEO

Après 7-14 jours, vérifiez dans Google Search Console :
- **Impressions** : Nombre de fois votre site apparaît dans Google
- **Clics** : Nombre de clics depuis Google
- **Position moyenne** : Votre position dans les résultats

**Objectif :** 
- Semaine 1-2 : Indexation complète
- Mois 1 : Premières impressions (100+)
- Mois 2-3 : Position page 2-3 pour vos mots-clés
- Mois 4-6 : Position page 1 (top 10)

---

## 🎯 Checklist finale

- [ ] Build créé avec `npm run build:verify`
- [ ] Tous les fichiers SEO présents (✅ dans le terminal)
- [ ] Site déployé sur serveur
- [ ] Favicon visible
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] Google Search Console configuré
- [ ] Sitemap soumis à Google
- [ ] Google My Business créé
- [ ] Formulaire de contact testé

---

## 📞 Besoin d'aide ?

**Ressources :**
- Guide complet : Voir `BUILD-INSTRUCTIONS.md`
- Guide SEO : Voir `SEO-GUIDE.md`
- Documentation Netlify : https://docs.netlify.com
- Support Netlify : support@netlify.com

**Communauté :**
- Stack Overflow (React/Vite)
- Reddit : r/webdev
- Discord Vite : https://chat.vitejs.dev

---

**🎉 Félicitations ! Votre site Cursiva est maintenant en ligne et optimisé pour Google ! 🚀**

**Prochaine étape :** Commencez à créer du contenu (blog) et demandez des avis Google pour améliorer votre SEO local !