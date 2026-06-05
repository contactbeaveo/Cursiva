# ✅ Checklist de Déploiement - Cursiva

## 📋 Avant le Build

- [ ] Toutes les pages fonctionnent en local
- [ ] Le formulaire de contact est testé
- [ ] Les animations sont fluides
- [ ] Le site est responsive (mobile/tablette/desktop)
- [ ] Aucune erreur dans la console
- [ ] Les images sont optimisées

---

## 🔨 Build

- [ ] `npm install` exécuté sans erreur
- [ ] `npm run build` réussi
- [ ] `npm run verify` affiche tous les ✅
- [ ] Dossier `/dist` créé
- [ ] Fichiers présents dans `/dist` :
  - [ ] `index.html`
  - [ ] `favicon.svg`
  - [ ] `favicon.ico`
  - [ ] `sitemap.xml`
  - [ ] `robots.txt`
  - [ ] `manifest.json`
  - [ ] `.htaccess`
  - [ ] `send-email.php`
  - [ ] Dossier `assets/`

---

## 🚀 Déploiement

### Serveur
- [ ] Site uploadé via FTP/SFTP
- [ ] Fichiers placés à la racine (`public_html` ou `www`)
- [ ] Permissions correctes (644 pour fichiers, 755 pour dossiers)
- [ ] PHP activé sur le serveur (pour formulaire)

### URL et Domaine
- [ ] Domaine configuré (cursiva.ca)
- [ ] DNS propagés (peut prendre 24-48h)
- [ ] HTTPS actif (certificat SSL)
- [ ] Redirection HTTP → HTTPS fonctionne
- [ ] Redirection www → non-www (ou inverse) fonctionne

---

## 🧪 Tests Post-Déploiement

### Tests de base
- [ ] Site accessible : `https://cursiva.ca`
- [ ] Favicon visible dans l'onglet
- [ ] Toutes les pages accessibles :
  - [ ] Accueil : `/`
  - [ ] Services : `/services`
  - [ ] Tarifs : `/tarifs`
  - [ ] À propos : `/a-propos`
  - [ ] Contact : `/contact`
  - [ ] Politique cookies : `/politique-temoins`
  - [ ] Confidentialité : `/politique-confidentialite`
  - [ ] Plaintes : `/politique-plaintes`

### Tests fichiers SEO
- [ ] Sitemap accessible : `https://cursiva.ca/sitemap.xml`
- [ ] Robots accessible : `https://cursiva.ca/robots.txt`
- [ ] Manifest accessible : `https://cursiva.ca/manifest.json`

### Tests fonctionnels
- [ ] Navigation fonctionne (menu, liens)
- [ ] Formulaire de contact fonctionne
- [ ] Email reçu à contact@cursiva.ca
- [ ] Bandeau cookies s'affiche
- [ ] Animations fonctionnent
- [ ] Liens externes s'ouvrent dans nouvel onglet

### Tests responsive
- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablette (768px)
- [ ] Mobile (375px)
- [ ] Mobile landscape

### Tests navigateurs
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 🔍 SEO - Configuration Google

### Google Search Console
- [ ] Compte créé sur : https://search.google.com/search-console
- [ ] Propriété ajoutée : `https://cursiva.ca`
- [ ] Propriété vérifiée (méthode HTML)
- [ ] Sitemap soumis : `https://cursiva.ca/sitemap.xml`
- [ ] Indexation demandée pour toutes les pages
- [ ] Aucune erreur d'exploration
- [ ] Page `robots.txt` détectée

### Google My Business (GMB)
- [ ] Profil créé sur : https://business.google.com
- [ ] Informations complètes :
  - [ ] Nom : Cursiva
  - [ ] Catégorie : Agence web
  - [ ] Description
  - [ ] Téléphone : 581 446 7277
  - [ ] Email : contact@cursiva.ca
  - [ ] Site web : https://cursiva.ca
  - [ ] Adresse au Québec
  - [ ] Heures d'ouverture : Lun-Ven 9h-17h
- [ ] Photos ajoutées (logo, bureau, équipe)
- [ ] Vérification demandée

### Google Analytics (optionnel)
- [ ] Propriété GA4 créée
- [ ] Code de tracking installé dans `index.html`
- [ ] Suivi actif visible dans GA4

---

## 📊 Performance

### Google PageSpeed Insights
Testez sur : https://pagespeed.web.dev

**Objectifs :**
- [ ] Score Mobile > 85
- [ ] Score Desktop > 90
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

### Tests de vitesse
- [ ] GTmetrix : https://gtmetrix.com
- [ ] Pingdom : https://tools.pingdom.com
- [ ] WebPageTest : https://webpagetest.org

---

## 🔒 Sécurité

- [ ] HTTPS actif et valide
- [ ] Certificat SSL à jour
- [ ] Headers de sécurité actifs (vérifier avec securityheaders.com)
- [ ] Pas d'erreurs mixtes HTTP/HTTPS
- [ ] `.htaccess` protège les fichiers sensibles
- [ ] Aucune information sensible dans le code source

---

## 📱 Réseaux Sociaux (optionnel)

### Configuration Open Graph
Testez sur : https://www.opengraph.xyz

- [ ] Titre s'affiche correctement
- [ ] Description s'affiche correctement
- [ ] Image (og:image) s'affiche

### Twitter Cards
Testez sur : https://cards-dev.twitter.com/validator

- [ ] Card s'affiche correctement

### Profils sociaux
- [ ] Page Facebook Business créée
- [ ] Profil LinkedIn Company créé
- [ ] Compte Instagram Business créé
- [ ] Liens ajoutés dans GMB et site web

---

## 🎯 Marketing Initial

### Annuaires en ligne
- [ ] Pages Jaunes (pagesjaunes.ca)
- [ ] Yelp Canada
- [ ] 411.ca
- [ ] Bottin des entreprises du Québec
- [ ] Chambre de commerce locale

### Premiers avis
- [ ] 5 premiers avis Google demandés
- [ ] Répondu à tous les avis
- [ ] Note moyenne > 4.5 étoiles

### Contenu initial
- [ ] 1-2 articles de blog publiés
- [ ] Articles partagés sur réseaux sociaux
- [ ] Liens internes créés

---

## 📈 Suivi (Semaines 1-4)

### Semaine 1
- [ ] Vérifier indexation Google (site:cursiva.ca)
- [ ] Vérifier erreurs Search Console
- [ ] Corriger problèmes détectés

### Semaine 2
- [ ] Analyser premières stats Analytics
- [ ] Vérifier backlinks créés
- [ ] Demander 3-5 avis supplémentaires

### Semaine 3
- [ ] Publier 1 nouvel article blog
- [ ] Partager sur réseaux sociaux
- [ ] Vérifier impressions Search Console

### Semaine 4
- [ ] Analyser mots-clés performants
- [ ] Optimiser pages sous-performantes
- [ ] Planifier contenu mois suivant

---

## 🎓 Ressources

### Documentation
- [ ] `README.md` lu
- [ ] `DEPLOY-QUICK.md` consulté
- [ ] `BUILD-INSTRUCTIONS.md` consulté
- [ ] `SEO-GUIDE.md` consulté

### Outils SEO gratuits
- [ ] Google Search Console configuré
- [ ] Google Analytics configuré
- [ ] Google My Business configuré
- [ ] Ubersuggest pour mots-clés
- [ ] AnswerThePublic pour questions

---

## ✅ Validation Finale

### Tout est OK quand :
- ✅ Site accessible et rapide
- ✅ Toutes les pages fonctionnent
- ✅ Formulaire envoie des emails
- ✅ Sitemap soumis à Google
- ✅ Google My Business vérifié
- ✅ 5+ avis Google
- ✅ Score PageSpeed > 85
- ✅ Aucune erreur Search Console
- ✅ Site apparaît dans Google (site:cursiva.ca)

---

## 🎉 Post-Lancement

### Semaine 1
- [ ] Annoncer le lancement sur réseaux sociaux
- [ ] Envoyer email aux contacts/clients
- [ ] Mettre signature email à jour avec nouveau site

### Mois 1
- [ ] Publier 2 articles de blog
- [ ] Obtenir 10+ backlinks
- [ ] Avoir 10+ avis Google

### Mois 2-3
- [ ] Apparaître en page 2-3 Google
- [ ] 100+ impressions Search Console
- [ ] 20+ backlinks de qualité

### Mois 4-6
- [ ] Top 10 Google pour mots-clés principaux
- [ ] 500+ impressions/mois
- [ ] 50+ backlinks
- [ ] 20+ avis Google

---

**🚀 Félicitations ! Votre site Cursiva est maintenant en ligne et optimisé !**

**📞 Besoin d'aide ?** Consultez les guides dans `/Documentation` ou contactez le support de votre hébergeur.

---

**Dernière mise à jour : 20 février 2026**
