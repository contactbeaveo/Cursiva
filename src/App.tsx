import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { PricingPage } from './components/PricingPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { ComplaintsPolicyPage } from './components/ComplaintsPolicyPage';
import { CookieBanner } from './components/CookieBanner';
import { StructuredData } from './components/StructuredData';
import { NotFoundPage } from './components/NotFoundPage';

export default function App() {
  return (
    <Router>
      <StructuredData />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a0a0f] via-[#16161f] to-[#0a0a0f]">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/tarifs" element={<PricingPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/politique-temoins" element={<CookiePolicyPage />} />
            <Route path="/politique-confidentialite" element={<PrivacyPolicyPage />} />
            <Route path="/politique-plaintes" element={<ComplaintsPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}