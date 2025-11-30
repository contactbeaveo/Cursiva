import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Globe, 
  Palette, 
  TrendingUp, 
  Zap, 
  Code, 
  Rocket,
  Target,
  Heart,
  Award,
  Users,
  Shield,
  Clock,
  MessageSquare,
  Star,
  ShoppingCart,
  Smartphone
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const mainServices = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Sites web WordPress',
      subtitle: 'Création et développement',
      description: 'Sites vitrine professionnels, boutiques en ligne WooCommerce et sites sur mesure. Design responsive, rapide et optimisé pour tous les appareils.',
      features: ['Sites vitrine', 'E-commerce WooCommerce', 'Sites responsive', 'Hébergement sécurisé']
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design graphique',
      subtitle: 'Identité visuelle',
      description: 'Logos professionnels, chartes graphiques complètes et supports de communication. Création d\'une image de marque forte qui vous démarque.',
      features: ['Logo professionnel', 'Charte graphique', 'Supports print', 'Templates web']
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Référencement SEO',
      subtitle: 'Optimisation Google',
      description: 'Optimisation SEO complète avec Yoast SEO Premium. Améliorez votre visibilité sur Google et attirez plus de clients qualifiés au Québec.',
      features: ['SEO WordPress', 'Mots-clés ciblés', 'Google ranking', 'Trafic qualifié']
    },
  ];

  const stats = [
    { value: '100+', label: 'Projets réalisés', icon: <Rocket className="w-6 h-6" /> },
    { value: '95%', label: 'Clients satisfaits', icon: <Heart className="w-6 h-6" /> },
    { value: '5+', label: 'Années d\'expérience', icon: <Award className="w-6 h-6" /> },
    { value: '24h', label: 'Temps de réponse', icon: <Zap className="w-6 h-6" /> },
  ];

  const process = [
    { 
      step: '01', 
      title: 'Découverte', 
      description: 'Analyse de vos besoins et objectifs', 
      icon: <Target className="w-6 h-6" /> 
    },
    { 
      step: '02', 
      title: 'Conception', 
      description: 'Création du design et de l\'identité', 
      icon: <Palette className="w-6 h-6" /> 
    },
    { 
      step: '03', 
      title: 'Développement', 
      description: 'Développement WordPress sur mesure', 
      icon: <Code className="w-6 h-6" /> 
    },
    { 
      step: '04', 
      title: 'Lancement', 
      description: 'Mise en ligne et formation', 
      icon: <Rocket className="w-6 h-6" /> 
    },
  ];

  const services = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Site vitrine WordPress',
      description: 'Création site web professionnel WordPress pour entreprises au Québec',
    },
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: 'Boutique en ligne WooCommerce',
      description: 'Développement e-commerce WordPress avec gestion produits et paiement',
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Site web responsive mobile',
      description: 'Design adaptatif optimisé pour mobile, tablette et ordinateur',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Optimisation SEO Yoast',
      description: 'Référencement naturel WordPress pour Google et moteurs de recherche',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Hébergement web sécurisé',
      description: 'Hébergement WordPress avec SSL, sauvegardes et protection DDoS',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Maintenance WordPress',
      description: 'Support technique, mises à jour WordPress et correction de bugs',
    },
  ];

  const testimonials = [
    {
      name: 'Marie Tremblay',
      company: 'Boutique Élégance, Québec',
      text: 'Cursiva a développé un site WordPress e-commerce magnifique pour ma boutique en ligne. Les ventes ont augmenté de 200% depuis le lancement du site WooCommerce !',
      rating: 5,
    },
    {
      name: 'Jean-François Gagnon',
      company: 'Cabinet d\'avocats, Québec',
      text: 'Agence web professionnelle et réactive. Notre nouveau site WordPress reflète parfaitement l\'image de notre cabinet d\'avocats. Le référencement SEO fonctionne à merveille sur Google.',
      rating: 5,
    },
    {
      name: 'Sophie Landry',
      company: 'Restaurant Le Jardin, Québec',
      text: 'Design web sublime et site WordPress ultra rapide. Nos clients peuvent maintenant réserver en ligne facilement grâce au site développé par Cursiva. Merci !',
      rating: 5,
    },
  ];

  const whyChooseUs = [
    { 
      icon: <Target className="w-6 h-6" />,
      title: 'Agence WordPress expérimentée',
      description: 'Experts en développement WordPress depuis 5+ ans avec plus de 100 sites web créés pour des entreprises québécoises.',
    },
    { 
      icon: <Clock className="w-6 h-6" />,
      title: 'Création de site rapide',
      description: 'Délais de livraison respectés : 1 semaine pour site 1 page, 2-3 semaines pour site 1-3 pages, 4-6 semaines pour site complet.',
    },
    { 
      icon: <Shield className="w-6 h-6" />,
      title: 'Qualité web garantie',
      description: 'Code WordPress propre et sécurisé, optimisé pour la performance. Révisions illimitées jusqu\'à satisfaction complète du projet.',
    },
    { 
      icon: <Heart className="w-6 h-6" />,
      title: 'Support client dévoué',
      description: 'Réponse rapide sous 24h, formation WordPress complète et accompagnement post-lancement inclus pour votre autonomie.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 glass-light px-4 py-2 rounded-full mb-6 border border-cyan-400/30"
              >
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-cyan-300">Agence WordPress au Québec</span>
              </motion.div>
              <h1 className="mb-8 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Création de sites WordPress et design graphique professionnel
              </h1>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Parce que chaque entreprise mérite d'être vue. Nous créons des sites WordPress modernes et des designs graphiques qui convertissent vos visiteurs en clients. Solution complète de création WordPress, boutique WooCommerce et identité visuelle sur mesure au Québec.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105"
                >
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Démarrer mon projet
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/tarifs"
                  className="inline-flex items-center gap-2 glass-light px-8 py-3 rounded-xl text-gray-200 hover:text-white border border-cyan-400/30 hover:border-cyan-400/50 transition-all hover:scale-105"
                >
                  Voir les tarifs
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative glass-strong rounded-2xl p-2 shadow-2xl border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNzcyODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Création de site web professionnel"
                  className="rounded-xl relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/80 via-blue-600/80 to-purple-600/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex w-16 h-16 items-center justify-center bg-white/10 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white">{stat.icon}</span>
                </div>
                <div className="mb-2 text-white">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-white">Ce que nous faisons pour vous</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trois domaines d'expertise pour propulser votre présence en ligne et votre image de marque
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
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
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-6 relative z-10 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/50">
                  {service.icon}
                </div>
                <div className="text-cyan-400 text-sm mb-2 relative z-10">{service.subtitle}</div>
                <h3 className="mb-4 text-white relative z-10">{service.title}</h3>
                <p className="text-gray-400 mb-6 relative z-10 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 glass-light px-8 py-3 rounded-xl text-cyan-300 hover:text-white border border-cyan-400/30 hover:border-cyan-400/50 transition-all hover:scale-105"
            >
              Voir tous nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-white">Pourquoi choisir notre agence web WordPress ?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Agence WordPress québécoise qui combine expertise technique en développement web et créativité design pour garantir le succès de votre projet
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-2xl hover:glass-strong transition-all text-center group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-white">Notre processus de création</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              4 étapes simples pour créer votre site WordPress parfait
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                )}
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform relative z-10">
                  {item.icon}
                </div>
                <div className="text-cyan-400 mb-2">{item.step}</div>
                <h3 className="mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-white">Avis clients sites WordPress créés au Québec</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Témoignages d'entreprises québécoises satisfaites de leur site web WordPress développé par notre agence
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:glass-strong transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
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
            className="relative rounded-3xl p-12 text-center text-white overflow-hidden group"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 opacity-90"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-float"></div>
            
            <div className="relative z-10">
              <h2 className="mb-4 text-white">
                Démarrez votre projet de création site WordPress
              </h2>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto">
                Obtenez un devis gratuit et personnalisé pour votre site web WordPress, boutique WooCommerce ou projet de design graphique. Notre agence web répond sous 24h garanties avec des tarifs transparents pour entreprises au Québec.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105 group"
              >
                <Rocket className="w-5 h-5" />
                Demander un devis site WordPress gratuit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}