import React from 'react';
import { Link } from 'react-router';
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
      title: 'Sites web professionnels',
      subtitle: 'Création et développement',
      description: 'Sites vitrine professionnels, boutiques en ligne et sites sur mesure. Design responsive, rapide et optimisé pour tous les appareils.',
      features: ['Sites vitrine', 'E-commerce', 'Sites responsive', 'Hébergement sécurisé']
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
      description: 'Optimisation SEO complète pour améliorer votre visibilité. Attirez plus de clients qualifiés au Québec et augmentez votre trafic.',
      features: ['SEO optimisé', 'Mots-clés ciblés', 'Google ranking', 'Trafic qualifié']
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
      description: 'Développement web sur mesure', 
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
      title: 'Site vitrine',
      description: 'Création site web professionnel pour entreprises au Québec',
    },
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: 'Boutique en ligne',
      description: 'Développement e-commerce avec gestion produits et paiement',
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: 'Design graphique',
      description: 'Création d\'identité visuelle, logos et supports marketing',
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Optimisation SEO',
      description: 'Référencement naturel pour Google et moteurs de recherche',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Hébergement web sécurisé',
      description: 'Hébergement avec SSL, sauvegardes et protection DDoS',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Maintenance web',
      description: 'Support technique, mises à jour et correction de bugs',
    },
  ];

  const testimonials = [
    {
      name: 'Marie Tremblay',
      company: 'Boutique Élégance, Québec',
      text: 'Cursiva a développé un site e-commerce magnifique pour ma boutique en ligne. Les ventes ont augmenté de 200% depuis le lancement !',
      rating: 5,
    },
    {
      name: 'Jean-François Gagnon',
      company: 'Cabinet d\'avocats, Québec',
      text: 'Agence web professionnelle et réactive. Notre nouveau site reflète parfaitement l\'image de notre cabinet d\'avocats. Le référencement SEO fonctionne à merveille sur Google.',
      rating: 5,
    },
    {
      name: 'Sophie Landry',
      company: 'Restaurant Le Jardin, Québec',
      text: 'Design web sublime et site ultra rapide. Nos clients peuvent maintenant réserver en ligne facilement grâce au site développé par Cursiva. Merci !',
      rating: 5,
    },
  ];

  const whyChooseUs = [
    { 
      icon: <Target className="w-6 h-6" />,
      title: 'Agence web expérimentée',
      description: 'Experts en développement web depuis 5+ ans avec plus de 100 sites créés pour des entreprises québécoises. WordPress ou solutions sur mesure.',
    },
    { 
      icon: <Clock className="w-6 h-6" />,
      title: 'Création de site rapide',
      description: 'Délais de livraison respectés : 1 semaine pour site 1 page, 2-3 semaines pour site 1-3 pages, 4-6 semaines pour site complet.',
    },
    { 
      icon: <Shield className="w-6 h-6" />,
      title: 'Qualité web garantie',
      description: 'Code propre et sécurisé, optimisé pour la performance. Révisions illimitées jusqu\'à satisfaction complète du projet.',
    },
    { 
      icon: <Heart className="w-6 h-6" />,
      title: 'Support client dévoué',
      description: 'Réponse rapide sous 24h, formation complète et accompagnement post-lancement inclus pour votre autonomie.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
                className="inline-flex items-center gap-2 glass-strong px-5 py-2.5 rounded-full mb-6 border border-cyan-400/40 shadow-lg shadow-cyan-500/20"
              >
                <Sparkles size={18} className="text-cyan-400 animate-pulse" />
                <span className="text-cyan-300">Agence web au Québec</span>
              </motion.div>
              <h1 className="mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent leading-tight">
                Création de sites web et design graphique professionnel
              </h1>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Parce que chaque entreprise mérite d'être vue. Nous créons des sites web modernes et des designs graphiques qui convertissent vos visiteurs en clients. Solution complète de création web (WordPress ou sur mesure), boutique en ligne et identité visuelle sur mesure au Québec.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-4 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-xl shadow-orange-500/50 hover:shadow-orange-500/80 hover:scale-105"
                >
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Démarrer mon projet
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/tarifs"
                  className="inline-flex items-center gap-2 glass-strong px-10 py-4 rounded-xl text-gray-200 hover:text-white border border-cyan-400/40 hover:border-cyan-400/60 transition-all hover:scale-105 shadow-lg"
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
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/40 via-blue-500/40 to-purple-500/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-75"></div>
              <div className="relative glass-strong rounded-3xl p-3 shadow-2xl border border-white/20 group-hover:border-cyan-400/40 transition-all">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNzcyODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Création de site web professionnel"
                  className="rounded-2xl relative z-10 shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="inline-flex w-20 h-20 items-center justify-center bg-white/15 backdrop-blur-md rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-white/25 transition-all shadow-lg">
                  <span className="text-white">{stat.icon}</span>
                </div>
                <div className="mb-2 text-white text-4xl">{stat.value}</div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block glass-light px-4 py-2 rounded-full mb-4 border border-cyan-400/30"
            >
              <span className="text-cyan-400 text-sm">Nos services</span>
            </motion.div>
            <h2 className="mb-4 text-white">Ce que nous faisons pour vous</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
                className="glass p-8 rounded-3xl hover:glass-strong transition-all group relative overflow-hidden border border-white/10 hover:border-cyan-400/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-xl shadow-cyan-500/30">
                  {service.icon}
                </div>
                <div className="text-cyan-400 text-sm mb-2 relative z-10 uppercase tracking-wide">{service.subtitle}</div>
                <h3 className="mb-4 text-white relative z-10">{service.title}</h3>
                <p className="text-gray-400 mb-6 relative z-10 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm group/item">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-cyan-500/30 transition-colors">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                      </div>
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
              className="inline-flex items-center gap-2 glass-strong px-8 py-4 rounded-xl text-cyan-300 hover:text-white border border-cyan-400/40 hover:border-cyan-400/60 transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
              Voir tous nos services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
            <h2 className="mb-4 text-white">Pourquoi choisir notre agence web ?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Agence web québécoise qui combine expertise technique en développement web et créativité design pour garantir le succès de votre projet
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
              4 étapes simples pour créer votre site web parfait
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
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>
        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block glass-light px-4 py-2 rounded-full mb-4 border border-orange-400/30"
            >
              <span className="text-orange-400 text-sm">⭐ Avis clients</span>
            </motion.div>
            <h2 className="mb-4 text-white">Avis clients sites web créés au Québec</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Témoignages d'entreprises québécoises satisfaites de leur site web développé par notre agence
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
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-3xl hover:glass-strong transition-all group border border-white/10 hover:border-orange-400/30 relative overflow-hidden"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex gap-1 mb-5 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400 drop-shadow-lg" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bouton pour laisser un avis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="https://share.google/2Eu5cH8l3BPCqYCgk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-orange-500/60 transition-all hover:scale-105 group"
            >
              <Star className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span className="text-lg">Laisser un avis Google</span>
            </a>
          </motion.div>
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
                Démarrez votre projet web ou design
              </h2>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto">
                Obtenez un devis gratuit et personnalisé pour votre site web, boutique en ligne ou projet de design graphique. Notre agence web répond sous 24h garanties avec des tarifs transparents pour entreprises au Québec.
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