import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="mb-4 bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Politique de protection des renseignements personnels
            </h1>
            <p className="text-gray-400">Dernière mise à jour : 20 février 2025</p>
          </div>

          <div className="glass-strong rounded-2xl p-8 space-y-8">
            <section>
              <p className="text-gray-300 mb-4">
                Chez Cursiva, nous accordons une grande importance à la protection de vos renseignements personnels. 
                Cette politique décrit comment nous collectons, utilisons, divulguons et protégeons vos informations 
                conformément aux lois québécoises et canadiennes sur la protection des renseignements personnels.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-cyan-400" />
                Renseignements collectés
              </h2>
              
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                    Renseignements fournis directement
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Lorsque vous nous contactez ou utilisez nos services, nous pouvons collecter :
                  </p>
                  <ul className="space-y-1 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Nom et prénom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Adresse courriel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Numéro de téléphone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Nom de l'entreprise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Détails de votre projet ou demande</span>
                    </li>
                  </ul>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                    Renseignements collectés automatiquement
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Lors de votre navigation sur notre site, nous pouvons collecter automatiquement :
                  </p>
                  <ul className="space-y-1 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Adresse IP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Type de navigateur et système d'exploitation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Pages visitées et durée de visite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Source de référence (site d'où vous venez)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-orange-400" />
                Utilisation des renseignements
              </h2>
              <p className="text-gray-300 mb-4">
                Nous utilisons vos renseignements personnels uniquement pour les finalités suivantes :
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Répondre à vos demandes d'information et de devis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Fournir nos services de création web et design graphique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Communiquer avec vous concernant vos projets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Améliorer notre site web et nos services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Respecter nos obligations légales et contractuelles</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-purple-400" />
                Protection de vos renseignements
              </h2>
              <p className="text-gray-300 mb-4">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos renseignements personnels 
                contre tout accès, modification, divulgation ou destruction non autorisée :
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Chiffrement des données sensibles (SSL/TLS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Accès limité aux renseignements personnels aux employés autorisés uniquement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Serveurs sécurisés et sauvegardes régulières</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Surveillance et mise à jour régulière de nos systèmes de sécurité</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-cyan-400" />
                Divulgation à des tiers
              </h2>
              <p className="text-gray-300 mb-4">
                Nous ne vendons, ne louons ni n'échangeons vos renseignements personnels. Nous pouvons partager 
                vos informations uniquement dans les cas suivants :
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    <strong className="text-white">Fournisseurs de services :</strong> Avec des prestataires qui nous 
                    aident à fournir nos services (hébergement, outils d'analyse), sous contrat de confidentialité
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    <strong className="text-white">Obligations légales :</strong> Si requis par la loi ou pour protéger 
                    nos droits légaux
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    <strong className="text-white">Avec votre consentement :</strong> Dans tout autre cas, avec votre 
                    autorisation explicite
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-orange-400" />
                Vos droits
              </h2>
              <p className="text-gray-300 mb-4">
                Conformément aux lois sur la protection des renseignements personnels, vous avez le droit de :
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-white">Accès :</strong> Demander l'accès à vos renseignements personnels que nous détenons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-white">Rectification :</strong> Demander la correction de renseignements inexacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-white">Suppression :</strong> Demander la suppression de vos renseignements (sous réserve de nos obligations légales)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-white">Opposition :</strong> Vous opposer à certaines utilisations de vos renseignements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-white">Retrait du consentement :</strong> Retirer votre consentement à tout moment</span>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Pour exercer ces droits, contactez-nous à <a href="mailto:contact@cursiva.ca" className="text-cyan-400 hover:text-cyan-300">contact@cursiva.ca</a>
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">Conservation des renseignements</h2>
              <p className="text-gray-300">
                Nous conservons vos renseignements personnels uniquement pendant la période nécessaire aux fins pour 
                lesquelles ils ont été collectés, ou tel que requis par la loi. Les renseignements sont ensuite 
                supprimés ou anonymisés de manière sécurisée.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">Modifications de cette politique</h2>
              <p className="text-gray-300">
                Nous pouvons modifier cette politique de temps à autre. Toute modification sera publiée sur cette page 
                avec une nouvelle date de mise à jour. Les modifications substantielles vous seront communiquées par 
                courriel si nous disposons de votre adresse.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">Nous contacter</h2>
              <p className="text-gray-300 mb-4">
                Pour toute question concernant cette politique de protection des renseignements personnels ou pour 
                exercer vos droits, contactez-nous :
              </p>
              <div className="glass p-6 rounded-lg space-y-2">
                <p className="text-white">
                  <strong>Cursiva</strong>
                </p>
                <p className="text-white">
                  <strong>Courriel :</strong> <a href="mailto:contact@cursiva.ca" className="text-cyan-400 hover:text-cyan-300">contact@cursiva.ca</a>
                </p>
                <p className="text-white">
                  <strong>Téléphone :</strong> <a href="tel:+15814467277" className="text-cyan-400 hover:text-cyan-300">+1 (581) 446-7277</a>
                </p>
                <p className="text-white">
                  <strong>Adresse :</strong> Québec, QC, Canada
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
