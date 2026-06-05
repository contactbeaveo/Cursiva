import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { X, Rocket, ArrowRight, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function DevisPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ne montrer qu'une fois par session
    if (sessionStorage.getItem('devisPopupShown')) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem('devisPopupShown', 'true');
    }, 30000); // 30 secondes

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed z-[101] inset-0 flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="relative w-full max-w-md pointer-events-auto">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/50 via-cyan-500/30 to-purple-500/50 rounded-3xl blur-xl opacity-60" />

              <div className="relative bg-gradient-to-br from-[#12121a] to-[#1a1a2e] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Décoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-tr-full" />

                {/* Bouton fermer */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 glass rounded-full text-gray-400 hover:text-white transition-colors z-10"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Contenu */}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/30 px-4 py-2 rounded-full mb-6">
                    <Gift className="w-4 h-4 text-orange-400" />
                    <span className="text-orange-300 text-sm font-medium">Offre limitée</span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
                    Obtenez votre devis
                    <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> gratuit </span>
                    sous 24h !
                  </h2>

                  <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                    Création de site web ou design graphique au Québec — tarifs transparents, sans surprise.
                    Répondons à votre projet dès aujourd'hui.
                  </p>

                  <div className="flex flex-col gap-3">
                    <Link
                      to="/contact"
                      onClick={handleClose}
                      className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/30 hover:scale-105 group"
                    >
                      <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Demander mon devis gratuit
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={handleClose}
                      className="text-gray-500 hover:text-gray-400 text-sm transition-colors py-2"
                    >
                      Non merci, continuer à naviguer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
