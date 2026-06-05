import React from 'react';
import { Link } from 'react-router';
import { Home, Search, ArrowLeft, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#16161f] to-[#0a0a0f]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-[180px] md:text-[280px] font-bold leading-none bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Oups ! Page introuvable
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée. 
            Pas de panique, nous allons vous aider à retrouver votre chemin !
          </p>
        </motion.div>

        {/* Glassmorphism card with suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Suggestions pour continuer :
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Link
              to="/"
              className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                <Home className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Retour à l'accueil</div>
                <div className="text-sm text-gray-400">Page principale de Cursiva</div>
              </div>
            </Link>

            <Link
              to="/services"
              className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                <Search className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Nos services</div>
                <div className="text-sm text-gray-400">Découvrez nos offres</div>
              </div>
            </Link>

            <Link
              to="/tarifs"
              className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                <Search className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Grille tarifaire</div>
                <div className="text-sm text-gray-400">Consultez nos prix</div>
              </div>
            </Link>

            <Link
              to="/contact"
              className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Nous contacter</div>
                <div className="text-sm text-gray-400">Obtenez de l'aide</div>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 text-white transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Retour à la page précédente
          </button>
        </motion.div>

        {/* Help text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-gray-500"
        >
          Besoin d'aide ? Contactez-nous au{' '}
          <a href="tel:5814467277" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            581 446 7277
          </a>
          {' '}ou par email à{' '}
          <a href="mailto:contact@cursiva.ca" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            contact@cursiva.ca
          </a>
        </motion.p>
      </div>
    </div>
  );
}
