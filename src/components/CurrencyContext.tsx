import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Currency = 'CAD' | 'EUR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceCAD: string) => string;
  convertPrice: (priceCAD: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Taux de conversion approximatif CAD vers EUR
const CAD_TO_EUR = 0.68;

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('CAD');

  // Convertir un prix numérique de CAD vers la devise actuelle
  const convertPrice = (priceCAD: number): number => {
    if (currency === 'EUR') {
      const converted = priceCAD * CAD_TO_EUR;
      // Arrondir au 10 le plus proche pour les euros
      return Math.round(converted / 10) * 10;
    }
    return priceCAD;
  };

  // Formater une chaîne de prix (ex: "300-900" ou "1000-3000")
  const formatPrice = (priceCAD: string): string => {
    const symbol = currency === 'EUR' ? '€' : '$';
    const suffix = currency === 'EUR' ? '' : ' CAD';

    // Gérer les intervalles de prix (ex: "300-900")
    if (priceCAD.includes('-')) {
      const [min, max] = priceCAD.split('-').map(p => parseInt(p.replace(/\D/g, '')));
      const convertedMin = convertPrice(min);
      const convertedMax = convertPrice(max);
      
      if (currency === 'EUR') {
        return `${convertedMin}€ - ${convertedMax}€`;
      }
      return `${convertedMin}$ - ${convertedMax}$${suffix}`;
    }

    // Gérer les prix avec "+" (ex: "6000+")
    if (priceCAD.includes('+')) {
      const amount = parseInt(priceCAD.replace(/\D/g, ''));
      const converted = convertPrice(amount);
      
      if (currency === 'EUR') {
        return `${converted}€+`;
      }
      return `${converted}$+${suffix}`;
    }

    // Gérer les prix simples
    const amount = parseInt(priceCAD.replace(/\D/g, ''));
    if (!isNaN(amount)) {
      const converted = convertPrice(amount);
      
      if (currency === 'EUR') {
        return `${converted}€`;
      }
      return `${converted}$${suffix}`;
    }

    return priceCAD;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};