import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Globe,
  Palette,
  Search,
  Smartphone,
  ShoppingCart,
  FileText,
  PenTool,
  Layout,
  Code,
  Zap,
  Shield,
  Headphones,
  ArrowRight,
  Rocket,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

export function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'web' | 'design'>('web');

  const webServices = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Site WordPress vitrine',
      description: 'Création de site internet WordPress vitrine professionnel pour présenter votre entreprise, vos services et attirer de nouveaux clients au Québec. Design moderne, responsive et optimisé SEO.',
      features: [
        'Design responsive moderne',
        'Optimisation SEO Yoast',
        'Formulaire de contact',
        'Intégration Google Maps',
        'Réseaux sociaux',
        'Admin WordPress facile',
      ],
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Boutique WooCommerce',
      description: 'Développement de boutique en ligne complète avec WooCommerce, gestion des produits, paiement sécurisé et interface d\'administration WordPress intuitive pour vendre en ligne.',
      features: [
        'Gestion produits illimitée',
        'Paiement sécurisé SSL',
        'Panier et checkout optimisé',
        'Gestion des stocks',
        'Coupons et promotions',
        'Rapports de ventes',
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Site WordPress responsive',
      description: 'Sites web WordPress adaptatifs qui s\'affichent parfaitement sur tous les écrans et appareils : ordinateur de bureau, tablette et mobile. Expérience utilisateur optimale.',
      features: [
        'Design mobile-first',
        'Adaptatif tous écrans',
        'Navigation tactile',
        'Images optimisées',
        'Vitesse de chargement',
        'UX mobile parfaite',
      ],
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Optimisation SEO WordPress',
      description: 'Référencement naturel optimisé avec Yoast SEO Premium pour améliorer votre visibilité sur Google et moteurs de recherche. Attirez plus de trafic qualifié au Québec.',
      features: [
        'Configuration Yoast SEO',
        'Mots-clés ciblés',
        'Balises meta optimisées',
        'Sitemap XML',
        'Schema markup',
        'Google Search Console',
      ],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Plugins WordPress personnalisés',
      description: 'Développement de fonctionnalités personnalisées et intégrations de plugins WordPress premium selon vos besoins métier spécifiques. Solutions sur mesure pour votre entreprise.',
      features: [
        'Développement sur mesure',
        'Intégrations API',
        'Plugins premium',
        'Automatisation processus',
        'Formulaires avancés',
        'Fonctionnalités uniques',
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance WordPress',
      description: 'Sites WordPress ultra-rapides optimisés avec système de cache, compression d\'images et CDN pour offrir la meilleure expérience utilisateur et améliorer votre SEO.',
      features: [
        'Cache WordPress avancé',
        'Compression images',
        'Minification CSS/JS',
        'CDN intégré',
        'Lazy loading',
        'Score 90+ Google',
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Hébergement & sécurité WordPress',
      description: 'Hébergement web WordPress sécurisé au Canada, certificat SSL gratuit, sauvegardes automatiques quotidiennes et protection contre les menaces et attaques DDoS.',
      features: [
        'Hébergement Québec/Canada',
        'Certificat SSL gratuit',
        'Sauvegardes quotidiennes',
        'Protection DDoS',
        'Firewall WordPress',
        'Monitoring 24/7',
      ],
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Maintenance WordPress',
      description: 'Support technique continu, mises à jour WordPress régulières, correction de bugs et maintenance complète de votre site web pour garantir son bon fonctionnement.',
      features: [
        'Mises à jour WordPress',
        'Mises à jour plugins/thèmes',
        'Correction de bugs',
        'Support technique 24h',
        'Optimisation continue',
        'Rapports mensuels',
      ],
    },
  ];

  const designServices = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Identité visuelle complète',
      description: 'Création de votre charte graphique complète : logo professionnel, palette de couleurs, typographies et guide d\'utilisation pour une identité de marque forte et cohérente.',
      features: [
        'Logo professionnel unique',
        'Charte graphique PDF',
        'Palette couleurs définie',
        'Typographies personnalisées',
        'Déclinaisons du logo',
        'Guide d\'utilisation',
      ],
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Création logo professionnel',
      description: 'Design de logo unique, moderne et mémorable qui représente parfaitement votre entreprise, vos valeurs et se démarque de la concurrence. Fichiers vectoriels inclus.',
      features: [
        '3 propositions de logo',
        'Révisions illimitées',
        'Fichiers vectoriels AI/EPS',
        'Formats PNG/JPG/SVG',
        'Déclinaisons couleurs',
        'Utilisation tous supports',
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Supports de communication print',
      description: 'Design et impression de tous vos supports de communication print : cartes de visite, flyers, brochures, affiches, dépliants et catalogues professionnels.',
      features: [
        'Cartes de visite premium',
        'Flyers et dépliants',
        'Brochures multi-pages',
        'Affiches publicitaires',
        'Papier à en-tête',
        'Catalogues produits',
      ],
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Design UI/UX web',
      description: 'Conception d\'interface utilisateur attractive et expérience utilisateur optimisée pour vos sites web et applications. Design centré sur l\'utilisateur et la conversion.',
      features: [
        'Maquettes web Figma',
        'Wireframes UX',
        'Prototypes interactifs',
        'Design responsive',
        'Tests utilisateurs',
        'Guide de style',
      ],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Templates réseaux sociaux',
      description: 'Création de templates personnalisés pour vos publications sur Facebook, Instagram, LinkedIn et autres réseaux sociaux. Design cohérent avec votre image de marque.',
      features: [
        '20+ templates sociaux',
        'Stories Instagram',
        'Posts Facebook/LinkedIn',
        'Bannières YouTube',
        'Templates Canva',
        'Guide d\'utilisation',
      ],
    },
  ];

  const currentServices = activeTab === 'web' ? webServices : designServices;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Services création site WordPress et design graphique Québec
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Agence web spécialisée en développement WordPress et design graphique au Québec. De la création de sites vitrine, boutiques WooCommerce à l'identité visuelle complète, nous vous accompagnons dans tous vos projets digitaux avec expertise et créativité.
            </p>
            
            {/* Tab Selector */}
            <div className="inline-flex glass-strong rounded-xl p-1 shadow-2xl border border-white/20">
              <button
                onClick={() => setActiveTab('web')}
                className={`px-8 py-3 rounded-lg transition-all flex items-center gap-2 ${
                  activeTab === 'web'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Globe className="w-5 h-5" />
                Sites WordPress
              </button>
              <button
                onClick={() => setActiveTab('design')}
                className={`px-8 py-3 rounded-lg transition-all flex items-center gap-2 ${
                  activeTab === 'design'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Palette className="w-5 h-5" />
                Design graphique
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white">
              {activeTab === 'web' 
                ? 'Nos services de développement WordPress' 
                : 'Nos services de design graphique et identité visuelle'}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {activeTab === 'web'
                ? 'Solutions WordPress complètes pour créer votre présence en ligne : sites vitrine, e-commerce WooCommerce, SEO, hébergement et maintenance'
                : 'Création d\'identité visuelle, logos professionnels et supports de communication print et web pour renforcer votre image de marque'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-8 rounded-2xl hover:glass-strong transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-6 relative z-10 group-hover:scale-110 transition-transform shadow-lg">
                  {service.icon}
                </div>
                
                <h3 className="mb-3 text-white relative z-10">{service.title}</h3>
                <p className="text-gray-400 mb-6 relative z-10 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-white">Pourquoi choisir Cursiva pour vos projets web et design ?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Agence WordPress et design graphique au Québec combinant expertise technique et créativité
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="w-6 h-6" />,
                title: '100+ projets réalisés',
                description: 'Sites WordPress et designs graphiques créés pour entreprises québécoises',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Livraison rapide',
                description: 'Délais respectés de 1 à 6 semaines selon complexité du projet',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Qualité garantie',
                description: 'Code propre, designs professionnels, révisions illimitées',
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: 'Support 24h',
                description: 'Réponse rapide, formation complète et accompagnement inclus',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-light p-6 rounded-xl hover:glass-strong transition-all text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-12 text-center text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 opacity-90"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-float"></div>
            
            <div className="relative z-10">
              <h2 className="mb-4 text-white">
                Prêt à démarrer votre projet WordPress ou design ?
              </h2>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto">
                Contactez notre agence web pour discuter de votre projet de site WordPress, boutique WooCommerce ou design graphique. Devis gratuit sous 24h et conseils personnalisés pour entreprises au Québec.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105 group"
              >
                <Rocket className="w-5 h-5" />
                Demander un devis gratuit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}