# 🚀 Guide de déploiement Cursiva

## Étape 1 : Build du projet

### Sur Linux/Mac :
```bash
chmod +x build.sh
./build.sh
```

### Sur Windows :
```bash
build.bat
```

### OU manuellement :
```bash
npm run build
copy public/.htaccess dist/.htaccess
```

---

## Étape 2 : Vérifier le contenu de `dist/`

Après le build, votre dossier `dist/` doit contenir :

```
dist/
├── index.html              ✅
├── .htaccess              ✅ IMPORTANT!
├── sitemap.xml            ✅
├── robots.txt             ✅
├── favicon.svg            ✅
├── favicon.ico            ✅
├── send-email.php         ✅
└── assets/
    ├── index-[hash].js    ✅
    ├── index-[hash].css   ✅
    └── ...
```

⚠️ **ATTENTION** : Si `.htaccess` n'est pas dans `dist/`, copiez-le manuellement :
```bash
cp public/.htaccess dist/.htaccess
```

---

## Étape 3 : Upload sur votre hébergement .wpdns.ca

### Via cPanel File Manager :

1. **Connexion**
   - Connectez-vous à votre cPanel
   - Cliquez sur **"Gestionnaire de fichiers"** / **"File Manager"**

2. **Nettoyage**
   - Naviguez vers `public_html/` (ou le dossier racine de cursiva.ca)
   - ⚠️ **Supprimez TOUS les anciens fichiers** du site précédent
   - Gardez seulement les dossiers système comme `cgi-bin/` si présents

3. **Upload**
   - Cliquez sur **"Upload"** / **"Téléverser"**
   - Sélectionnez **TOUS les fichiers** du dossier `dist/` (pas le dossier lui-même!)
   - Attendez la fin du téléversement (100%)

4. **Vérification des fichiers cachés**
   - Dans le File Manager, activez l'option **"Show Hidden Files"** (dans Settings)
   - Vérifiez que `.htaccess` est bien présent dans `public_html/`
   - Si absent, uploadez-le manuellement

### Via FTP (FileZilla) :

1. **Connexion FTP**
   - Hôte : `ftp.wpdns.ca` (ou l'adresse fournie par votre hébergeur)
   - Utilisateur : votre nom d'utilisateur cPanel
   - Mot de passe : votre mot de passe cPanel
   - Port : 21

2. **Upload**
   - Naviguez vers `public_html/` ou `/www/`
   - Supprimez les anciens fichiers
   - Glissez-déposez **tout le contenu** de `dist/`
   - ⚠️ Assurez-vous que `.htaccess` est uploadé (activez "Show hidden files" dans FileZilla)

---

## Étape 4 : Test du site

Testez ces URLs dans votre navigateur :

1. ✅ `https://cursiva.ca/` → Page d'accueil
2. ✅ `https://cursiva.ca/services` → Page Services
3. ✅ `https://cursiva.ca/tarifs` → Page Tarifs
4. ✅ `https://cursiva.ca/a-propos` → Page À propos
5. ✅ `https://cursiva.ca/contact` → Page Contact
6. ✅ `https://cursiva.ca/sitemap.xml` → Sitemap XML
7. ✅ `https://cursiva.ca/robots.txt` → Robots.txt

**Si vous avez des erreurs 404 sur les pages** :
- Vérifiez que `.htaccess` est bien uploadé
- Vérifiez que `mod_rewrite` est activé sur votre serveur (contactez le support si besoin)

---

## Étape 5 : Configuration Google Search Console

Une fois le sitemap accessible :

1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Sélectionnez votre propriété `cursiva.ca`
3. Menu de gauche → **"Sitemaps"**
4. Entrez `sitemap.xml` et cliquez **"Soumettre"**
5. Google indexera votre site automatiquement ! 🎯

---

## ⚠️ Problèmes fréquents

### Le sitemap retourne une erreur 404
- Vérifiez que `sitemap.xml` est bien dans `public_html/`
- Videz le cache de votre navigateur (Ctrl+F5)

### Les pages retournent une erreur 404
- Le fichier `.htaccess` est manquant ou mal configuré
- Uploadez-le manuellement depuis `public/.htaccess`

### Les fichiers cachés ne sont pas uploadés
- Activez "Show Hidden Files" dans cPanel ou FileZilla
- Copiez `.htaccess` manuellement après l'upload

---

## 📞 Contact

Si vous avez des problèmes, contactez le support de votre hébergeur .wpdns.ca et mentionnez :
- Vous utilisez un site React avec React Router
- Vous avez besoin que `mod_rewrite` soit activé
- Le fichier `.htaccess` doit être pris en compte

---

## 🎉 C'est terminé !

Votre site Cursiva est maintenant en ligne ! 🚀
