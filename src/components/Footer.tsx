import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="glass-strong border-t border-white/10 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-white">Cursiva</h3>
            <p className="text-gray-400">
              Parce que chaque entreprise mérite d'être vue. Création de sites web et design graphique professionnel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-400 hover:text-purple-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Création de sites web</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Design graphique</li>
              <li className="hover:text-pink-400 transition-colors cursor-pointer">Identité visuelle</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Référencement SEO</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>contact@cursiva.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors group">
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span>+1 (418) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>Québec, QC, Canada</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 glass-light rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:glass-strong transition-all hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass-light rounded-full flex items-center justify-center text-gray-400 hover:text-pink-400 hover:glass-strong transition-all hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass-light rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:glass-strong transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Cursiva. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
