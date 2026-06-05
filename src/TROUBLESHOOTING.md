# 🔧 Guide de Dépannage - Cursiva

Solutions rapides aux problèmes courants.

---

## 🔨 Problèmes de Build

### ❌ Erreur : "Command 'vite' not found"

**Cause :** Dépendances non installées.

**Solution :**
```bash
npm install
npm run build:complete
```

---

### ❌ Fichiers manquants dans /dist

**Symptôme :** Seulement `index.html` et `assets/` dans `/dist`.

**Cause :** Fichiers publics non copiés.

**Solution 1 - Rebuild complet :**
```bash
rm -rf dist
npm run build:complete
```

**Solution 2 - Copie manuelle :**
```bash
node copy-public.js
```

**Vérification :**
```bash
npm run verify
```

Vous devriez voir :
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
```

---

### ❌ Erreur : "Cannot find module"

**Solution :**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build:complete
```

---

### ❌ Build réussit mais site ne fonctionne pas

**Vérifiez avec preview :**
```bash
npm run preview
```

Ouvrez : http://localhost:4173

Si ça ne fonctionne pas :
1. Vérifiez la console pour les erreurs
2. Vérifiez que React Router est bien configuré
3. Rebuilder : `npm run build:complete`

---

## 🌐 Problèmes de Déploiement

### ❌ Site accessible mais pages donnent 404

**Symptôme :** Accueil fonctionne, mais `/services` → 404

**Cause :** Routing React non configuré sur le serveur.

**Solution pour Apache :**

Vérifiez que `.htaccess` existe à la racine :
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

**Solution pour Netlify :**

Le fichier `netlify.toml` devrait contenir :
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

C'est déjà configuré ! ✅

**Solution pour Nginx :**

Ajoutez dans votre config :
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

### ❌ Favicon ne s'affiche pas

**Cause :** Cache navigateur ou fichier manquant.

**Solution 1 - Vider le cache :**
- Windows/Linux : `Ctrl + Shift + R`
- Mac : `Cmd + Shift + R`

**Solution 2 - Vérifier le fichier :**
```bash
# Vérifiez que favicon.svg existe dans /dist
ls -la dist/favicon.svg
```

**Solution 3 - Attendre :**
Le cache DNS peut prendre 24-48h à se propager.

**Solution 4 - Mode incognito :**
Ouvrez votre site en navigation privée.

---

### ❌ Sitemap.xml donne 404

**Vérifications :**

1. **Fichier existe ?**
```bash
ls -la dist/sitemap.xml
```

2. **URL correcte ?**
- ✅ Correct : `https://cursiva.ca/sitemap.xml`
- ❌ Incorrect : `https://cursiva.ca/public/sitemap.xml`

3. **Permissions ?**
```bash
chmod 644 dist/sitemap.xml
```

4. **Rebuild si nécessaire :**
```bash
npm run build:complete
```

---

### ❌ HTTPS ne fonctionne pas

**Symptôme :** Le site charge en HTTP au lieu de HTTPS.

**Solution pour Netlify :**
1. Allez dans Settings → Domain management
2. Activez "Force HTTPS"
3. Certificat SSL automatique

**Solution pour Apache (.htaccess) :**
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Déjà inclus dans `.htaccess` ! ✅

**Solution pour serveur partagé :**
Contactez votre hébergeur pour activer le certificat SSL.

---

## 📧 Problèmes de Formulaire

### ❌ Formulaire ne s'envoie pas

**Vérifications :**

1. **PHP activé ?**
Créez `test.php` :
```php
<?php phpinfo(); ?>
```
Uploadez et visitez : `https://cursiva.ca/test.php`

2. **Fichier send-email.php existe ?**
```bash
ls -la dist/send-email.php
```

3. **Permissions correctes ?**
```bash
chmod 644 dist/send-email.php
```

4. **Logs d'erreur PHP ?**
Consultez les logs de votre hébergeur (généralement dans cPanel).

---

### ❌ Emails non reçus

**Vérifications :**

1. **Spam ?**
Vérifiez le dossier spam de contact@cursiva.ca

2. **Configuration SMTP ?**
Certains hébergeurs bloquent `mail()` PHP.
→ Utilisez un service SMTP (SendGrid, Mailgun)

3. **Email valide ?**
Vérifiez que contact@cursiva.ca existe et fonctionne.

4. **Testez manuellement :**
```php
<?php
$to = "contact@cursiva.ca";
$subject = "Test";
$message = "Test message";
$headers = "From: noreply@cursiva.ca";

if(mail($to, $subject, $message, $headers)) {
    echo "Email envoyé!";
} else {
    echo "Erreur!";
}
?>
```

---

## 🔍 Problèmes SEO

### ❌ Site non indexé par Google

**Symptôme :** `site:cursiva.ca` ne donne aucun résultat sur Google.

**Durée normale :** 7-14 jours pour l'indexation.

**Solutions :**

1. **Soumettez le sitemap :**
   - Google Search Console
   - Sitemaps → Ajouter : `https://cursiva.ca/sitemap.xml`

2. **Demandez l'indexation :**
   - Google Search Console
   - Inspection de l'URL
   - Demander l'indexation

3. **Vérifiez robots.txt :**
   - Visitez : `https://cursiva.ca/robots.txt`
   - Doit contenir :
   ```
   User-agent: *
   Allow: /
   Sitemap: https://cursiva.ca/sitemap.xml
   ```

4. **Attendez :**
   Première indexation : 1-2 semaines
   Indexation complète : 2-4 semaines

---

### ❌ Meta tags non visibles

**Vérification :**
1. Clic droit sur la page → "Afficher le code source"
2. Cherchez `<meta name="description"`
3. Cherchez `<meta property="og:title"`

**Si absents :**
Les meta tags sont dans `index.html`. Vérifiez que vous avez bien buildé :
```bash
npm run build:complete
```

---

### ❌ Page 404 personnalisée ne s'affiche pas

**Vérifications :**

1. **Fichier 404.html existe ?**
```bash
ls -la dist/404.html
```

2. **.htaccess configuré ?**
```apache
ErrorDocument 404 /404.html
```

3. **Pour Netlify :**
Ajoutez dans `netlify.toml` :
```toml
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

4. **Testez :**
Allez sur : `https://cursiva.ca/page-qui-existe-pas`

---

## ⚡ Problèmes de Performance

### ❌ Site lent à charger

**Diagnostics :**
1. Testez sur : https://pagespeed.web.dev
2. Objectif : Score > 90

**Solutions :**

**1. Optimiser les images :**
```bash
# Convertir en WebP
# Compresser avec TinyPNG
# Utiliser des tailles appropriées
```

**2. Activer la compression (déjà dans .htaccess) :**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

**3. Activer le cache (déjà dans .htaccess) :**
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
</IfModule>
```

**4. Utiliser un CDN :**
- Netlify a un CDN intégré ✅
- Pour autres : Cloudflare gratuit

---

### ❌ Animations saccadées

**Causes :**
- Device lent
- Trop d'animations simultanées
- Images non optimisées

**Solutions :**
1. Désactiver les animations sur mobile
2. Utiliser `will-change` CSS
3. Réduire la complexité des animations

---

## 🔒 Problèmes de Sécurité

### ❌ Avertissement "Site non sécurisé"

**Cause :** Pas de certificat SSL.

**Solutions :**

**Netlify :**
1. Settings → Domain management
2. HTTPS → Provision certificate
3. Force HTTPS

**Hébergement traditionnel :**
1. cPanel → SSL/TLS
2. Let's Encrypt (gratuit)
3. AutoSSL

---

### ❌ Headers de sécurité manquants

**Vérifiez sur :** https://securityheaders.com

**Solution :** Déjà dans `.htaccess` :
```apache
Header set X-XSS-Protection "1; mode=block"
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set Strict-Transport-Security "max-age=31536000"
```

---

## 🎨 Problèmes d'Affichage

### ❌ Design cassé / pas de styles

**Vérifications :**

1. **Fichiers CSS chargés ?**
   - Ouvrez la console (F12)
   - Onglet Network
   - Rechargez la page
   - Cherchez les erreurs 404

2. **Tailwind configuré ?**
   - Vérifiez `styles/globals.css`
   - Vérifiez que les imports Tailwind sont présents

3. **Build correct ?**
```bash
npm run build:complete
npm run preview
```

---

### ❌ Responsive ne fonctionne pas

**Vérifiez le viewport :**
Dans `index.html` :
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Déjà inclus ! ✅

---

## 🛠️ Outils de Diagnostic

### Commandes utiles

```bash
# Vérifier Node.js
node --version        # Doit être >= 18

# Vérifier npm
npm --version

# Nettoyer et rebuilder
rm -rf dist node_modules package-lock.json
npm install
npm run build:complete

# Vérifier le build
npm run verify

# Tester localement
npm run preview

# Copier fichiers publics seulement
npm run copy-public

# Voir les fichiers dans dist
ls -la dist/
```

### Tests en ligne

- **PageSpeed** : https://pagespeed.web.dev
- **Security Headers** : https://securityheaders.com
- **SSL Check** : https://www.ssllabs.com/ssltest/
- **Mobile-Friendly** : https://search.google.com/test/mobile-friendly
- **Structured Data** : https://search.google.com/test/rich-results
- **Open Graph** : https://www.opengraph.xyz

---

## 📞 Obtenir de l'Aide

### Avant de demander de l'aide :

1. ✅ Vérifiez ce guide de dépannage
2. ✅ Consultez les logs d'erreur
3. ✅ Essayez `npm run build:complete`
4. ✅ Testez avec `npm run preview`
5. ✅ Vérifiez la console navigateur (F12)

### Informations à fournir :

- Version Node.js : `node --version`
- Version npm : `npm --version`
- Système d'exploitation
- Message d'erreur exact (screenshot)
- Étapes pour reproduire le problème

### Ressources :

- **Documentation** : Voir [DOCS-INDEX.md](./DOCS-INDEX.md)
- **Stack Overflow** : Recherchez React/Vite
- **Discord Vite** : https://chat.vitejs.dev
- **Reddit** : r/webdev

---

## ✅ Checklist de Dépannage

Quand quelque chose ne fonctionne pas :

- [ ] Vidé le cache navigateur (`Ctrl+Shift+R`)
- [ ] Testé en mode incognito
- [ ] Vérifié la console pour erreurs (F12)
- [ ] Exécuté `npm run build:complete`
- [ ] Exécuté `npm run verify`
- [ ] Testé avec `npm run preview`
- [ ] Vérifié que tous les fichiers sont dans `/dist`
- [ ] Consulté ce guide de dépannage
- [ ] Consulté la documentation

---

**💡 Astuce :** 90% des problèmes se résolvent avec un rebuild complet :

```bash
rm -rf dist node_modules package-lock.json
npm install
npm run build:complete
```

---

**🎉 La plupart des problèmes ont une solution simple !**

**Si le problème persiste, consultez [DOCS-INDEX.md](./DOCS-INDEX.md) pour plus de ressources.**
