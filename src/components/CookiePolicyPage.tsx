import React from 'react';
import { motion } from 'motion/react';
import { Cookie, Eye, Settings, Shield } from 'lucide-react';

export function CookiePolicyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 mb-6">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <h1 className="mb-4 bg-gradient-to-r from-white via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Politique relative aux témoins (cookies)
            </h1>
            <p className="text-gray-400">Dernière mise à jour : 20 février 2025</p>
          </div>

          <div className="glass-strong rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-cyan-400" />
                Qu'est-ce qu'un témoin (cookie) ?
              </h2>
              <p className="text-gray-300 mb-4">
                Un témoin (cookie) est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, téléphone) 
                lorsque vous visitez notre site web. Les témoins permettent au site de mémoriser vos actions et préférences 
                pendant une certaine période.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6 text-orange-400" />
                Types de témoins utilisés
              </h2>
              
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                    Témoins essentiels
                  </h3>
                  <p className="text-gray-400">
                    Ces témoins sont nécessaires au fonctionnement du site. Ils permettent la navigation de base 
                    et l'accès aux zones sécurisées. Sans ces témoins, certaines fonctionnalités ne peuvent être fournies.
                  </p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                    Témoins de performance
                  </h3>
                  <p className="text-gray-400">
                    Ces témoins collectent des informations sur la façon dont les visiteurs utilisent notre site, 
                    comme les pages les plus visitées. Ces données nous aident à améliorer le fonctionnement de notre site.
                  </p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text mb-2">
                    Témoins de fonctionnalité
                  </h3>
                  <p className="text-gray-400">
                    Ces témoins permettent au site de se souvenir de vos choix (comme votre langue ou région) 
                    pour vous offrir une expérience plus personnalisée.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-purple-400" />
                Gestion de vos préférences
              </h2>
              <p className="text-gray-300 mb-4">
                Vous pouvez contrôler et gérer les témoins de plusieurs façons :
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    <strong className="text-white">Paramètres de votre navigateur :</strong> La plupart des navigateurs 
                    vous permettent de refuser ou d'accepter les témoins, de supprimer les témoins existants et de définir 
                    vos préférences pour certains sites web.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    <strong className="text-white">Navigation privée :</strong> Vous pouvez utiliser le mode navigation 
                    privée de votre navigateur pour limiter les témoins stockés.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    <strong className="text-white">Suppression des témoins :</strong> Vous pouvez supprimer tous les 
                    témoins déjà présents sur votre appareil via les paramètres de votre navigateur.
                  </span>
                </li>
              </ul>
              <p className="text-gray-400 mt-4 p-4 glass rounded-lg">
                <strong className="text-orange-400">Note importante :</strong> Le blocage de certains témoins peut affecter 
                votre expérience sur notre site et limiter les fonctionnalités disponibles.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">Témoins de tiers</h2>
              <p className="text-gray-300 mb-4">
                Notre site peut utiliser des services tiers qui placent leurs propres témoins, notamment :
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong className="text-white">Google Analytics :</strong> Pour analyser l'utilisation de notre site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong className="text-white">Réseaux sociaux :</strong> Pour intégrer du contenu social (Facebook, Instagram, LinkedIn)</span>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Ces services tiers ont leurs propres politiques de confidentialité et de témoins que nous vous 
                encourageons à consulter.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">Modifications de cette politique</h2>
              <p className="text-gray-300">
                Nous nous réservons le droit de modifier cette politique relative aux témoins à tout moment. 
                Toute modification sera publiée sur cette page avec une date de mise à jour révisée. Nous vous 
                encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">Nous contacter</h2>
              <p className="text-gray-300 mb-4">
                Pour toute question concernant notre utilisation des témoins, n'hésitez pas à nous contacter :
              </p>
              <div className="glass p-6 rounded-lg space-y-2">
                <p className="text-white">
                  <strong>Courriel :</strong> <a href="mailto:contact@cursiva.ca" className="text-cyan-400 hover:text-cyan-300">contact@cursiva.ca</a>
                </p>
                <p className="text-white">
                  <strong>Téléphone :</strong> <a href="tel:+15814467277" className="text-cyan-400 hover:text-cyan-300">+1 (581) 446-7277</a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
