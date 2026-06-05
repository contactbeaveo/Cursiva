import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Afficher le bandeau après un petit délai pour une meilleure UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="glass-strong rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Header */}
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-white font-semibold mb-2">
                        Nous utilisons des témoins (cookies)
                      </h3>
                      <button
                        onClick={handleReject}
                        className="text-gray-400 hover:text-white transition-colors p-1"
                        aria-label="Fermer"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">
                      Nous utilisons des témoins pour améliorer votre expérience sur notre site, 
                      analyser notre trafic et personnaliser le contenu. En cliquant sur "Tout accepter", 
                      vous consentez à notre utilisation des témoins.
                    </p>

                    {/* Boutons principaux */}
                    <div className="flex flex-wrap gap-3 mb-3">
                      <button
                        onClick={handleAcceptAll}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2.5 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 inline-flex items-center gap-2"
                      >
                        <Check size={18} />
                        Tout accepter
                      </button>
                      
                      <button
                        onClick={handleAcceptEssential}
                        className="glass-light border border-white/20 text-white px-6 py-2.5 rounded-lg hover:glass-strong transition-all"
                      >
                        Essentiels uniquement
                      </button>
                      
                      <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="glass-light border border-white/20 text-gray-300 px-6 py-2.5 rounded-lg hover:glass-strong transition-all inline-flex items-center gap-2"
                      >
                        <Settings size={18} />
                        {showDetails ? 'Masquer les détails' : 'Personnaliser'}
                      </button>
                    </div>

                    <Link
                      to="/politique-temoins"
                      className="text-cyan-400 hover:text-cyan-300 text-sm inline-flex items-center gap-1 transition-colors"
                    >
                      En savoir plus sur notre politique de témoins
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Section détails (collapsible) */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="grid md:grid-cols-3 gap-4">
                          {/* Témoins essentiels */}
                          <div className="glass p-4 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-white font-medium text-sm">Témoins essentiels</h4>
                              <div className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded">
                                Toujours actifs
                              </div>
                            </div>
                            <p className="text-gray-400 text-xs">
                              Nécessaires au fonctionnement du site. Ils permettent la navigation de base 
                              et l'accès aux zones sécurisées.
                            </p>
                          </div>

                          {/* Témoins de performance */}
                          <div className="glass p-4 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-white font-medium text-sm">Performance</h4>
                              <input
                                type="checkbox"
                                defaultChecked
                                className="w-4 h-4 rounded accent-cyan-500"
                              />
                            </div>
                            <p className="text-gray-400 text-xs">
                              Collectent des informations sur la façon dont vous utilisez notre site 
                              pour nous aider à l'améliorer.
                            </p>
                          </div>

                          {/* Témoins de fonctionnalité */}
                          <div className="glass p-4 rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-white font-medium text-sm">Fonctionnalité</h4>
                              <input
                                type="checkbox"
                                defaultChecked
                                className="w-4 h-4 rounded accent-cyan-500"
                              />
                            </div>
                            <p className="text-gray-400 text-xs">
                              Permettent au site de se souvenir de vos choix pour une expérience 
                              personnalisée.
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 flex gap-3">
                          <button
                            onClick={handleAcceptAll}
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all text-sm"
                          >
                            Confirmer mes choix
                          </button>
                          <button
                            onClick={handleReject}
                            className="text-gray-400 hover:text-white transition-colors text-sm"
                          >
                            Tout refuser
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}