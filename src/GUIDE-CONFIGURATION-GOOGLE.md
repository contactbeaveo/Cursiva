# 📊 Guide de Configuration Google pour Cursiva

Ce guide vous explique comment configurer tous les outils Google pour le suivi et le référencement de votre site web.

---

## ✅ Ce qui est déjà fait

### 1. Code installé sur le site
- ✅ Google Analytics 4 (GA4) - Code prêt
- ✅ Google Tag Manager (GTM) - Code prêt
- ✅ Google Search Console - Balise de vérification prête
- ✅ Sitemap.xml - Créé et accessible
- ✅ Robots.txt - Créé et configuré
- ✅ Schema.org (Données structurées) - Implémenté
- ✅ Meta tags SEO - Configurés
- ✅ Open Graph (Facebook/LinkedIn) - Configurés
- ✅ Twitter Cards - Configurés

---

## 🔧 Configuration à compléter (ÉTAPE PAR ÉTAPE)

### ÉTAPE 1 : Google Analytics 4 (GA4)

**Objectif :** Suivre les visiteurs de votre site web

1. **Créer un compte Google Analytics**
   - Allez sur https://analytics.google.com
   - Cliquez sur "Commencer à mesurer"
   - Nom du compte : `Cursiva`
   - Nom de la propriété : `Site Web Cursiva`
   - Fuseau horaire : `Canada/Eastern (UTC-05:00)`
   - Devise : `Dollar canadien (CAD)`

2. **Configurer un flux de données Web**
   - Type de flux : Web
   - URL du site web : `https://cursiva.ca`
   - Nom du flux : `cursiva.ca`
   - Cliquez sur "Créer un flux"

3. **Récupérer votre ID de mesure**
   - Vous verrez un ID qui ressemble à : `G-XXXXXXXXXX`
   - Copiez cet ID

4. **Remplacer dans le fichier `/index.html`**
   - Ligne 16 : Remplacez `GTM-XXXXXXX` par votre ID GTM (ou supprimez si pas de GTM)
   - Lignes 20-22 : Remplacez TOUS les `G-XXXXXXXXXX` par votre vrai ID GA4

---

### ÉTAPE 2 : Google Search Console

**Objectif :** Suivre votre positionnement sur Google et indexer votre site

1. **Créer un compte Google Search Console**
   - Allez sur https://search.google.com/search-console
   - Cliquez sur "Ajouter une propriété"
   - Sélectionnez "Préfixe d'URL"
   - Entrez : `https://cursiva.ca`

2. **Vérifier la propriété**
   - Méthode recommandée : "Balise HTML"
   - Google vous donnera un code comme : `<meta name="google-site-verification" content="ABCD1234...">`
   - Copiez uniquement la partie : `ABCD1234...`

3. **Remplacer dans le fichier `/index.html`**
   - Ligne 25 : Remplacez `VOTRE_CODE_VERIFICATION_ICI` par votre code

4. **Soumettre le sitemap**
   - Une fois vérifié, allez dans "Sitemaps"
   - Ajoutez : `https://cursiva.ca/sitemap.xml`
   - Cliquez sur "Envoyer"

---

### ÉTAPE 3 : Google Tag Manager (OPTIONNEL mais recommandé)

**Objectif :** Gérer tous vos tags marketing facilement

1. **Créer un compte Google Tag Manager**
   - Allez sur https://tagmanager.google.com
   - Créez un compte : `Cursiva`
   - Créez un conteneur : `cursiva.ca` (Type: Web)

2. **Récupérer votre ID GTM**
   - Vous verrez un ID qui ressemble à : `GTM-XXXXXXX`
   - Copiez cet ID

3. **Remplacer dans le fichier `/index.html`**
   - Ligne 10 : Remplacez `GTM-XXXXXXX` par votre vrai ID GTM
   - Ligne 61 : Remplacez `GTM-XXXXXXX` par votre vrai ID GTM

**OU si vous ne voulez pas utiliser GTM :**
- Supprimez les lignes 9-13 (section Google Tag Manager du <head>)
- Supprimez les lignes 60-63 (section Google Tag Manager noscript du <body>)

---

### ÉTAPE 4 : Google My Business (Recommandé pour SEO local)

**Objectif :** Apparaître sur Google Maps et les recherches locales

1. **Créer une fiche Google My Business**
   - Allez sur https://www.google.com/business
   - Cliquez sur "Gérer maintenant"
   - Nom de l'entreprise : `Cursiva`
   - Catégorie : `Concepteur de sites web` ou `Agence de marketing`
   - Adresse : Votre adresse au Québec (ou cochez "Je livre des biens...")
   - Téléphone : `581 446 7277`
   - Site web : `https://cursiva.ca`

2. **Vérifier votre entreprise**
   - Google vous enverra un code (par courrier, téléphone ou email)

3. **Compléter votre profil**
   - Ajoutez des photos de vos réalisations
   - Description : Utilisez celle de votre site web
   - Heures d'ouverture
   - Services : WordPress, WooCommerce, Design graphique, etc.

---

## 📈 Vérification et tests

### Vérifier que tout fonctionne :

1. **Sitemap accessible :**
   - Ouvrez : https://cursiva.ca/sitemap.xml
   - Vous devriez voir la liste de vos pages

2. **Robots.txt accessible :**
   - Ouvrez : https://cursiva.ca/robots.txt
   - Vous devriez voir les directives pour les robots

3. **Google Analytics fonctionne :**
   - Visitez votre site web
   - Allez dans Google Analytics
   - Temps réel > Vue d'ensemble
   - Vous devriez voir votre visite

4. **Schema.org valide :**
   - Allez sur https://search.google.com/test/rich-results
   - Entrez : `https://cursiva.ca`
   - Vérifiez qu'il n'y a pas d'erreurs

5. **SEO Meta Tags :**
   - Allez sur https://www.opengraph.xyz/
   - Entrez : `https://cursiva.ca`
   - Vérifiez l'aperçu Facebook/LinkedIn/Twitter

---

## 🎯 Prochaines étapes SEO (après configuration)

### 1. Backlinks et citations
- Inscrivez Cursiva sur les annuaires québécois
- 411.ca
- Pages Jaunes
- Yelp Canada
- Annuaires WordPress

### 2. Contenu régulier
- Blog WordPress : Publiez des articles SEO
  - "Comment créer un site WordPress au Québec"
  - "Prix création site web 2025"
  - "WooCommerce vs Shopify"

### 3. Réseaux sociaux
- Partagez vos projets
- Demandez des avis clients
- Interagissez avec votre audience

### 4. Suivi mensuel
- Consultez Google Analytics
- Vérifiez Search Console
- Analysez les mots-clés
- Ajustez la stratégie

---

## 📞 Support

Si vous avez besoin d'aide pour la configuration, je recommande :
1. Documentation Google Analytics : https://support.google.com/analytics
2. Documentation Search Console : https://support.google.com/webmasters
3. Tester vos données structurées : https://search.google.com/test/rich-results

---

## ✨ Résumé des fichiers modifiés

- ✅ `/index.html` - Google Analytics, GTM, Search Console
- ✅ `/public/sitemap.xml` - Plan du site pour Google
- ✅ `/public/robots.txt` - Instructions pour les robots
- ✅ `/components/SEO.tsx` - Composant SEO avec Schema.org
- ✅ `/components/HomePage.tsx` - SEO intégré
- ✅ `/App.tsx` - HelmetProvider pour gestion SEO

**Votre site est maintenant prêt pour Google ! Il ne reste qu'à ajouter vos vrais identifiants.**
