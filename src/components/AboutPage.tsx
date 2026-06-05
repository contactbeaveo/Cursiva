import React from 'react';
import { Link } from 'react-router';
import { useSEO } from '../hooks/useSEO';
import { Target, Heart, Award, Users, Zap, Shield, ArrowRight, Rocket, Code, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function AboutPage() {
  useSEO({
    title: 'À propos de Cursiva – Agence web au Québec | Notre équipe',
    description: 'Découvrez Cursiva, agence web québécoise fondée par des experts en développement web et design graphique. 5+ ans d\'expérience, 100+ projets réalisés au Québec.',
    canonical: 'https://cursiva.ca/a-propos',
  });
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, du design au code, pour créer des sites web qui se démarquent.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion',
      description: 'Notre passion pour le web et le design graphique transparaît dans chaque création que nous réalisons.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Nous travaillons en étroite collaboration avec nos clients pour comprendre et réaliser leur vision.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Nous utilisons les dernières technologies et tendances pour créer des solutions modernes et performantes.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Fiabilité',
      description: 'Respect des délais, communication transparente et engagement à long terme avec nos clients.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Qualité',
      description: 'Nous ne faisons aucun compromis sur la qualité, garantissant des sites web robustes et durables.',
    },
  ];

  const stats = [
    { value: '100+', label: 'Projets réalisés', icon: <Code className="w-6 h-6" /> },
    { value: '95%', label: 'Clients satisfaits', icon: <Heart className="w-6 h-6" /> },
    { value: '5+', label: 'Années d\'expérience', icon: <Award className="w-6 h-6" /> },
    { value: '24h', label: 'Temps de réponse', icon: <Zap className="w-6 h-6" /> },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-8 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Agence web et design graphique Cursiva au Québec
              </h1>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Parce que chaque entreprise mérite d'être vue. Cursiva est une agence web spécialisée dans la création de sites web professionnels et le design graphique au Québec. Notre mission est de donner vie à vos idées et de propulser votre présence en ligne avec des solutions web sur mesure.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nous combinons expertise technique en développement web, sens créatif et approche stratégique pour créer des expériences digitales qui captivent votre audience et font grandir votre entreprise québécoise.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 group"
              >
                <Users className="w-5 h-5" />
                Travaillons ensemble
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <div className="relative glass-strong rounded-2xl p-2 shadow-2xl border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MzgzMzUwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Équipe Cursiva"
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-float"></div>
        
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

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-white">Notre mission</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Chez Cursiva, nous croyons que chaque entreprise a une histoire unique à raconter. Notre mission est de transformer cette histoire en une présence digitale puissante et engageante.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nous nous spécialisons dans la création de sites web professionnels et le design graphique sur mesure. Chaque projet est une opportunité de créer quelque chose d'exceptionnel qui reflète l'identité de marque de nos clients et répond aux besoins de leur audience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
            <h2 className="mb-4 text-white">Nos valeurs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Les principes qui guident notre travail et nos relations avec nos clients
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
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
                  {value.icon}
                </div>
                <h3 className="mb-3 text-white relative z-10">{value.title}</h3>
                <p className="text-gray-400 relative z-10">{value.description}</p>
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
              4 étapes simples et efficaces pour garantir le succès de votre projet web
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Découverte', description: 'Analyse approfondie de vos besoins, objectifs et vision pour comprendre votre projet', icon: <Target className="w-6 h-6" /> },
              { step: '02', title: 'Conception', description: 'Design créatif et maquettes qui reflètent votre identité de marque unique', icon: <Palette className="w-6 h-6" /> },
              { step: '03', title: 'Développement', description: 'Développement professionnel et intégration de toutes les fonctionnalités', icon: <Code className="w-6 h-6" /> },
              { step: '04', title: 'Lancement', description: 'Mise en ligne du site, formation complète et support technique post-lancement', icon: <Rocket className="w-6 h-6" /> },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                )}
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform relative z-10">
                  {process.icon}
                </div>
                <div className="text-cyan-400 mb-2">{process.step}</div>
                <h3 className="mb-3 text-white">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.description}</p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 opacity-90"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl animate-float"></div>
            
            <div className="relative z-10">
              <h2 className="mb-4 text-white">
                Commençons à travailler ensemble
              </h2>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto">
                Prêt à transformer votre présence digitale ? Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-cyan-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105 group"
              >
                <Rocket className="w-5 h-5" />
                Contactez-nous
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}