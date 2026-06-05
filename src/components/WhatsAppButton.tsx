import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phone = '15814467277'; // numéro sans espaces ni +
  const message = encodeURIComponent('Bonjour, je souhaite obtenir un devis pour mon projet web.');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-[#1a1a2e] border border-white/10 rounded-2xl p-4 shadow-2xl max-w-[220px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-white text-sm font-semibold mb-1">💬 Discutons de votre projet</p>
            <p className="text-gray-400 text-xs">Réponse rapide sur WhatsApp</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Nous contacter sur WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
        {/* Pulse animation */}
        <span className="absolute w-14 h-14 bg-[#25D366] rounded-full animate-ping opacity-20" />
      </motion.a>
    </div>
  );
}
