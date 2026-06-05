import React from 'react';
import { useCurrency, Currency } from './CurrencyContext';

export const CurrencySwitcher: React.FC = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setCurrency('CAD')}
        className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
          currency === 'CAD'
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
            : 'glass-light text-gray-400 hover:text-white border border-white/10'
        }`}
        aria-label="Passer en dollars canadiens"
      >
        CAD $
      </button>
      <button
        onClick={() => setCurrency('EUR')}
        className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
          currency === 'EUR'
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
            : 'glass-light text-gray-400 hover:text-white border border-white/10'
        }`}
        aria-label="Passer en euros"
      >
        EUR €
      </button>
    </div>
  );
};
