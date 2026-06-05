import React, { useState } from 'react';
import { Link } from 'react-router';
import { Check, ArrowRight, Sparkles, Rocket, Crown, Code, Palette } from 'lucide-react';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';

export function PricingPage() {
  useSEO({
    title: 'Tarifs création site web Québec – Cursiva | 300$ à 6000$ CAD',
    description: 'Tarifs transparents pour création de site web et design graphique au Québec. Sites vitrine de 300$, boutiques en ligne, logos. Devis gratuit personnalisé sous 24h.',
    canonical: 'https://cursiva.ca/tarifs',
  });
  const [activeTab, setActiveTab] = useState<'web' | 'design'>('web');

  const webPricing = [
    {
      name: 'Site 1 page',
      price: '300$ - 900$ CAD',
      description: 'Idéal pour une landing page ou page de présentation simple',
      features: [
        '1 page unique',
        'Design responsive moderne',
        'Optimisation SEO',
        'Formulaire de contact',
        'Intégration réseaux sociaux',
        'Formation de base',
        'Délai : 1 semaine',
      ],
      popular: false,
      icon: Code,
    },
    {
      name: 'Site 1-3 pages',
      price: '800$ - 3000$ CAD',
      description: 'Parfait pour les petites entreprises et professionnels',
      features: [
        '1 à 3 pages',
        'Design moderne et responsive',
        'Optimisation SEO avancée',
        'Formulaires de contact personnalisés',
        'Galerie portfolio / projets',
        'Google Maps et localisation',
        'Hébergement inclus 1 an',
        'Formation complète',
        'Support technique 1 mois',
        'Délai : 2-3 semaines',
      ],
      popular: true,
      icon: Sparkles,
    },
    {
      name: 'Site 4-7 pages',
      price: '3000$ - 6000$ CAD',
      description: 'Solution complète pour une présence web professionnelle',
      features: [
        '4 à 7 pages',
        'Design premium personnalisé',
        'SEO complet',
        'Blog intégré',
        'Espace actualités dynamique',
        'Formulaires multiples avancés',
        'Animations et interactions',
        'Tableau de bord optimisé',
        'Modules premium',
        'Hébergement inclus 1 an',
        'Support technique 3 mois',
        'Formation approfondie',
        'Délai : 4-6 semaines',
      ],
      popular: false,
      icon: Crown,
    },
    {
      name: 'Projet sur mesure',
      price: 'Sur devis',
      description: 'Solution personnalisée pour vos besoins spécifiques',
      features: [
        'Nombre de pages illimité',
        'E-commerce complet',
        'Fonctionnalités personnalisées',
        'Espace membre / connexion',
        'Intégrations API externes',
        'Système de réservation',
        'Paiement en ligne sécurisé',
        'Base de données avancée',
        'Multilingue',
        'Support premium prioritaire',
        'Maintenance incluse',
        'Délai : selon projet',
      ],
      popular: false,
      icon: Rocket,
    },
  ];

  const designPricing = [
    {
      name: 'Logo simple',
      price: '300$ - 600$ CAD',
      description: 'Logo professionnel pour votre entreprise',
      features: [
        '3 propositions de logo',
        '2 révisions incluses',
        'Fichiers vectoriels (AI, EPS)',
        'Formats PNG, JPG, SVG',
        'Utilisation tous supports',
        'Livre de normes de base',
        'Livraison en 1 semaine',
      ],
      popular: false,
      icon: Palette,
    },
    {
      name: 'Identité visuelle',
      price: '800$ - 1500$ CAD',
      description: 'Identité complète pour votre marque',
      features: [
        'Logo professionnel',
        'Charte graphique complète',
        'Palette de couleurs définie',
        'Typographies personnalisées',
        'Déclinaisons du logo',
        'Carte de visite design',
        'Papier à en-tête',
        'Guide d\'utilisation détaillé',
        'Tous formats de fichiers',
        'Livraison en 2-3 semaines',
      ],
      popular: true,
      icon: Crown,
    },
    {
      name: 'Pack communication',
      price: '1500$ - 3000$ CAD',
      description: 'Pack complet pour votre communication visuelle',
      features: [
        'Identité visuelle complète',
        'Cartes de visite premium',
        'Papier à en-tête',
        'Enveloppes personnalisées',
        'Signature email HTML',
        'Templates réseaux sociaux (20+)',
        'Flyer A5 recto-verso',
        'Brochure 8 pages ou catalogue',
        'Bannière web et LinkedIn',
        'Tous formats de fichiers',
        'Support 6 mois',
      ],
      popular: false,
      icon: Sparkles,
    },
    {
      name: 'Design sur mesure',
      price: 'Sur devis',
      description: 'Projets graphiques personnalisés',
      features: [
        'Packaging et étiquettes produit',
        'Affichage et signalétique',
        'Design de stand salon',
        'Habillage de véhicule',
        'Habillage vitrine',
        'Campagnes publicitaires',
        'Design éditorial (magazines)',
        'Illustrations personnalisées',
        'Infographies complexes',
        'Présentations PowerPoint',
        'Accompagnement complet',
      ],
      popular: false,
      icon: Rocket,
    },
  ];

  const currentPricing = activeTab === 'web' ? webPricing : designPricing;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 bg-gradient-to-r from-white via-orange-300 to-cyan-300 bg-clip-text text-transparent">
              Tarifs transparents et adaptés à votre budget
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Des forfaits clairs pour tous les budgets québécois. Tous nos prix incluent la création, l'optimisation SEO et la mise en ligne. Devis personnalisé gratuit sous 24h.
            </p>
            
            {/* Tab Selector */}
            <div className="inline-flex glass-strong rounded-xl p-1 shadow-2xl border border-white/20">
              <button
                onClick={() => setActiveTab('web')}
                className={`px-8 py-3 rounded-lg transition-all ${
                  activeTab === 'web'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Sites web
              </button>
              <button
                onClick={() => setActiveTab('design')}
                className={`px-8 py-3 rounded-lg transition-all ${
                  activeTab === 'design'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Design graphique
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
            {currentPricing.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`glass rounded-2xl transition-all p-8 flex flex-col relative ${
                    plan.popular ? 'glass-strong border-2 border-orange-400/50 shadow-2xl shadow-orange-500/20' : 'hover:glass-strong'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1 rounded-full inline-flex items-center gap-1 shadow-lg">
                        <Crown size={14} />
                        Populaire
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 hover:opacity-10 rounded-2xl transition-opacity"></div>
                  
                  <div className="mb-6 relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-amber-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-white">{plan.name}</h3>
                    <div className={`text-transparent ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-amber-500' : 'bg-gradient-to-r from-cyan-500 to-blue-500'} bg-clip-text mb-2 font-bold`}>{plan.price}</div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-1 relative z-10">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full text-center px-6 py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2 relative z-10 ${
                      plan.popular
                        ? `bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:scale-105 shadow-lg`
                        : 'glass-light border border-white/20 text-gray-300 hover:text-white hover:glass-strong'
                    }`}
                  >
                    Obtenir un devis
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
            <h2 className="mb-4 text-white">Services complémentaires web</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Options et services additionnels pour enrichir et maintenir votre projet web
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: 'Maintenance WordPress', 
                priceCAD: 'À partir de 50$ CAD/mois', 
                items: [
                  'Mises à jour WordPress et plugins',
                  'Sauvegardes automatiques quotidiennes',
                  'Support technique prioritaire',
                  'Monitoring de sécurité 24/7',
                  'Correction de bugs',
                  'Optimisation des performances'
                ], 
              },
              { 
                title: 'Rédaction de contenu SEO', 
                priceCAD: '80$ - 150$ CAD/page', 
                items: [
                  'Rédaction optimisée pour le SEO',
                  'Recherche de mots-clés ciblés',
                  'Correction et relecture professionnelle',
                  'Adaptation au ton de votre marque',
                  'Optimisation Yoast SEO',
                  'Intégration dans WordPress'
                ], 
              },
              { 
                title: 'Transfert d\'hébergement vers Cursiva', 
                priceCAD: '200$ - 500$ CAD', 
                items: [
                  'Migration complète de votre site',
                  'Transfert de base de données',
                  'Configuration hébergement optimisé',
                  'Tests de fonctionnement complets',
                  'Zéro temps d\'arrêt',
                  'Support post-migration 1 mois'
                ], 
              },
            ].map((service, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-xl hover:glass-strong transition-all group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></div>
                  <h3 className="mb-3 text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text relative z-10">{service.title}</h3>
                  <div className="text-white mb-4 relative z-10 font-semibold">{service.priceCAD}</div>
                  <ul className="space-y-2 text-gray-400 relative z-10">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Questions fréquentes
              </h2>
              <p className="text-gray-400">
                Tout ce que vous devez savoir sur nos services web et design graphique
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: 'Quels sont les délais de création ?',
                  a: 'Les délais varient selon la complexité : 1 semaine pour un site 1 page, 2-3 semaines pour 1-3 pages, et 4-6 semaines pour un site 4-7 pages. Pour les projets sur mesure, nous établissons un calendrier personnalisé.',
                },
                {
                  q: 'Puis-je modifier mon site après la livraison ?',
                  a: 'Absolument ! Nous vous formons à la gestion de votre site pour que vous puissiez faire des modifications vous-même. Nous proposons aussi des services de maintenance et support technique si nécessaire.',
                },
                {
                  q: 'Le référencement SEO est-il inclus ?',
                  a: 'Oui, tous nos sites incluent une optimisation SEO (balises meta, structure, vitesse de chargement). Nous proposons aussi du référencement avancé et de la rédaction SEO sur devis.',
                },
                {
                  q: 'Est-ce que l\'hébergement et le nom de domaine sont inclus ?',
                  a: 'Oui, tous nos forfaits incluent l\'hébergement pendant 1 an. Pour le nom de domaine, nous pouvons vous aider à l\'acheter (environ 15-20$/an) ou utiliser un domaine existant.',
                },
                {
                  q: 'Que se passe-t-il si je ne suis pas satisfait du résultat ?',
                  a: 'Nous incluons plusieurs révisions dans chaque forfait pour s\'assurer que le résultat corresponde exactement à vos attentes. Votre satisfaction est notre priorité absolue et nous travaillons en collaboration étroite avec vous.',
                },
                {
                  q: 'Proposez-vous des paiements échelonnés ?',
                  a: 'Oui, le paiement se fait en deux versements : la mise en place du site web et l\'hébergement doivent être payés au début du projet, puis le solde est payé à la livraison finale du site web.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-strong p-6 rounded-2xl hover:shadow-2xl transition-all group relative overflow-hidden border border-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="mb-3 text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text relative z-10">{item.q}</h3>
                  <p className="text-gray-400 relative z-10 leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-float"></div>
            
            <div className="relative z-10">
              <h2 className="mb-4 text-white">
                Démarrez votre projet web dès aujourd'hui
              </h2>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto">
                Contactez-nous pour obtenir un devis personnalisé gratuit. Nous répondons sous 24h et sommes disponibles pour discuter de votre projet web ou graphique.
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