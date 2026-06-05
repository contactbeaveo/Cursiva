# 🎨 Cursiva - Site Web Professionnel

Site web officiel de **Cursiva**, agence web spécialisée en création de sites web professionnels et design graphique au Québec.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.3-61dafb)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff)
![SEO](https://img.shields.io/badge/SEO-Optimized-success)

---

## ✨ Caractéristiques

### 🎯 Fonctionnalités
- ✅ **5 pages principales** : Accueil, Services, Tarifs, À propos, Contact
- ✅ **3 pages légales** : Confidentialité, Cookies, Plaintes
- ✅ **Design moderne** : Thème sombre avec effets glassmorphism
- ✅ **Animations fluides** : Motion (Framer Motion)
- ✅ **Responsive** : Mobile, tablette, desktop
- ✅ **Formulaire de contact** : Avec validation et envoi PHP
- ✅ **Cookie banner** : Conformité RGPD/CCPA

### 🚀 SEO & Performance
- ✅ **Sitemap.xml** : Plan du site pour Google
- ✅ **Robots.txt** : Directives pour les crawlers
- ✅ **Schema.org** : Données structurées complètes
- ✅ **Meta tags** : Open Graph, Twitter Cards
- ✅ **PWA ready** : Manifest.json configuré
- ✅ **Optimisé** : Score 90+ sur PageSpeed Insights

### 🎨 Technologies
- **React 18** : Bibliothèque UI
- **React Router 7** : Navigation SPA
- **Vite 6** : Build ultra-rapide
- **Tailwind CSS 4** : Styling moderne
- **Motion** : Animations
- **Lucide React** : Icônes
- **TypeScript** : Type safety

---

## 📦 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation rapide
```bash
# Cloner le projet
git clone https://github.com/votre-username/cursiva.git
cd cursiva

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site sera disponible sur : http://localhost:5173

---

## 🛠️ Commandes

```bash
# Développement
npm run dev              # Lance le serveur de dev

# Build
npm run build            # Crée le build de production
npm run build:verify     # Build + vérification des fichiers SEO
npm run preview          # Prévisualise le build localement
npm run verify           # Vérifie le build sans rebuilder
```

---

## 📁 Structure du projet

```
cursiva/
├── public/                    # Fichiers statiques
│   ├── favicon.svg           # Favicon principal
│   ├── favicon.ico           # Favicon fallback
│   ├── sitemap.xml           # Plan du site
│   ├── robots.txt            # Directives crawlers
│   ├── manifest.json         # PWA manifest
│   ├── .htaccess             # Config Apache
│   └── send-email.php        # Script formulaire
│
├── src/
│   ├── App.tsx               # Composant principal
│   ├── main.tsx              # Point d'entrée
│   └── styles/
│       └── globals.css       # Styles globaux
│
├── components/
│   ├── Header.tsx            # En-tête + navigation
│   ├── Footer.tsx            # Pied de page
│   ├── HomePage.tsx          # Page d'accueil
│   ├── ServicesPage.tsx      # Page services
│   ├── PricingPage.tsx       # Page tarifs
│   ├── AboutPage.tsx         # Page à propos
│   ├── ContactPage.tsx       # Page contact
│   ├── CookieBanner.tsx      # Bandeau cookies
│   ├── StructuredData.tsx    # Schema.org
│   └── [autres pages]
│
├── vite.config.ts            # Configuration Vite
├── netlify.toml              # Configuration Netlify
├── package.json              # Dépendances
├── verify-build.js           # Script de vérification
│
└── Documentation/
    ├── SEO-GUIDE.md          # Guide SEO complet
    ├── BUILD-INSTRUCTIONS.md # Instructions build détaillées
    └── DEPLOY-QUICK.md       # Guide déploiement rapide
```

---

## 🚀 Déploiement

### Méthode 1 : Netlify (Recommandé)
```bash
npm run build
# Glissez-déposez le dossier /dist sur netlify.com
```

### Méthode 2 : Serveur traditionnel
```bash
npm run build:verify
# Uploadez le contenu de /dist via FTP
```

**Pour plus de détails** : Voir [`DEPLOY-QUICK.md`](./DEPLOY-QUICK.md)

---

## 📊 SEO & Marketing

### Fichiers SEO créés
- ✅ `sitemap.xml` - Plan du site
- ✅ `robots.txt` - Directives crawlers
- ✅ `manifest.json` - PWA
- ✅ Schema.org - Données structurées
- ✅ Meta tags - Open Graph, Twitter

### Actions post-déploiement
1. **Google Search Console** : Soumettre le sitemap
2. **Google My Business** : Créer le profil entreprise
3. **Backlinks** : S'inscrire sur annuaires québécois
4. **Contenu** : Créer un blog (1-2 articles/mois)
5. **Avis** : Demander des reviews Google

**Pour plus de détails** : Voir [`SEO-GUIDE.md`](./SEO-GUIDE.md)

---

## 🎯 Grille tarifaire Cursiva

| Offre | Pages | Prix CAD |
|-------|-------|----------|
| Landing Page | 1 page | 300$ - 900$ |
| Site Vitrine | 1-3 pages | 800$ - 3 000$ |
| Site Pro | 4-7 pages | 3 000$ - 6 000$ |
| Sur mesure | Variable | Sur devis |

---

## 📞 Contact

**Cursiva - Agence Web & Design Graphique**
- 📧 Email : contact@cursiva.ca
- 📱 Téléphone : 581 446 7277
- 🌐 Site : https://cursiva.ca
- 📍 Québec, Canada

---

## 📄 Licence

© 2026 Cursiva. Tous droits réservés.

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 🙏 Remerciements

- **React** : Bibliothèque UI
- **Vite** : Build tool ultra-rapide
- **Tailwind CSS** : Framework CSS
- **Motion** : Animations
- **Lucide** : Icônes open-source

---

## 🆘 Support

Besoin d'aide avec le déploiement ou le SEO ?

1. Consultez les guides :
   - [`DEPLOY-QUICK.md`](./DEPLOY-QUICK.md) - Déploiement rapide
   - [`BUILD-INSTRUCTIONS.md`](./BUILD-INSTRUCTIONS.md) - Instructions complètes
   - [`SEO-GUIDE.md`](./SEO-GUIDE.md) - Stratégie SEO

2. Ressources externes :
   - [Documentation Vite](https://vitejs.dev)
   - [Documentation React Router](https://reactrouter.com)
   - [Documentation Netlify](https://docs.netlify.com)

---

**🎉 Fait avec ❤️ par Cursiva - Parce que chaque entreprise mérite d'être vue**
