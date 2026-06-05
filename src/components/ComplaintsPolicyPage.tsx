import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, AlertCircle, CheckCircle, Clock, FileText, Users } from 'lucide-react';

export function ComplaintsPolicyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="mb-4 bg-gradient-to-r from-white via-orange-300 to-amber-300 bg-clip-text text-transparent">
              Politique de traitement des plaintes et règlement des différends
            </h1>
            <p className="text-gray-400">Dernière mise à jour : 20 février 2025</p>
          </div>

          <div className="glass-strong rounded-2xl p-8 space-y-8">
            <section>
              <p className="text-gray-300 mb-4">
                Chez Cursiva, la satisfaction de nos clients est notre priorité absolue. Nous nous engageons à fournir 
                des services de qualité supérieure et à résoudre rapidement tout problème ou préoccupation. Cette politique 
                décrit notre processus de traitement des plaintes et de règlement des différends.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-cyan-400" />
                Notre engagement
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Traiter toutes les plaintes de manière équitable, respectueuse et confidentielle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Répondre rapidement et efficacement à vos préoccupations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Trouver des solutions satisfaisantes pour toutes les parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Utiliser vos commentaires pour améliorer continuellement nos services</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-purple-400" />
                Types de plaintes
              </h2>
              <p className="text-gray-300 mb-4">
                Nous acceptons les plaintes concernant :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                    Qualité des services
                  </h3>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Non-respect des spécifications convenues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Problèmes techniques ou bugs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Qualité du design ou code</span>
                    </li>
                  </ul>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                    Délais et communication
                  </h3>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Retards dans la livraison</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Manque de communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Non-respect des échéances</span>
                    </li>
                  </ul>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text mb-2">
                    Facturation
                  </h3>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Erreurs de facturation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Frais non convenus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Questions sur les paiements</span>
                    </li>
                  </ul>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-2">
                    Service client
                  </h3>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Comportement inapproprié</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Manque de professionnalisme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      <span>Support technique inadéquat</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-400" />
                Processus de traitement des plaintes
              </h2>
              
              <div className="space-y-4">
                <div className="glass p-5 rounded-lg border-l-4 border-cyan-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Soumission de la plainte</h3>
                      <p className="text-gray-400 mb-2">
                        Contactez-nous dès que possible pour nous faire part de votre préoccupation :
                      </p>
                      <ul className="space-y-1 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span><strong>Par courriel :</strong> contact@cursiva.ca (privilégié pour avoir une trace écrite)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span><strong>Par téléphone :</strong> +1 (581) 446-7277</span>
                        </li>
                      </ul>
                      <p className="text-gray-400 mt-2 text-sm">
                        Incluez : votre nom, coordonnées, numéro de projet (si applicable), description détaillée du problème, 
                        et résolution souhaitée.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-5 rounded-lg border-l-4 border-purple-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Accusé de réception</h3>
                      <p className="text-gray-400">
                        Nous accuserons réception de votre plainte dans un délai de <strong className="text-white">24 heures ouvrables</strong> 
                        et vous fournirons un numéro de référence pour le suivi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-5 rounded-lg border-l-4 border-orange-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Enquête et analyse</h3>
                      <p className="text-gray-400">
                        Nous examinerons votre plainte de manière approfondie en consultant tous les documents pertinents et 
                        en communiquant avec les parties concernées. Ce processus prend généralement <strong className="text-white">3 à 5 jours ouvrables</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-5 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Résolution et réponse</h3>
                      <p className="text-gray-400 mb-2">
                        Nous vous présenterons notre réponse incluant :
                      </p>
                      <ul className="space-y-1 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">•</span>
                          <span>Nos conclusions suite à l'enquête</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">•</span>
                          <span>Les mesures correctives proposées</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-400">•</span>
                          <span>Le plan d'action et échéancier</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="glass p-5 rounded-lg border-l-4 border-blue-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="text-white mb-2">Suivi et clôture</h3>
                      <p className="text-gray-400">
                        Nous effectuerons un suivi pour nous assurer que les mesures correctives ont été mises en œuvre avec succès 
                        et que vous êtes satisfait de la résolution. La plainte sera clôturée une fois que toutes les parties 
                        confirment la résolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-white mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-cyan-400" />
                Délais de traitement
              </h2>
              <div className="glass p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Accusé de réception :</strong> 24 heures ouvrables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Plaintes simples :</strong> 3 à 5 jours ouvrables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Plaintes complexes :</strong> 7 à 10 jours ouvrables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">Plaintes nécessitant une enquête approfondie :</strong> Jusqu'à 15 jours ouvrables</span>
                  </li>
                </ul>
                <p className="text-gray-400 mt-4 text-sm">
                  Si le traitement de votre plainte nécessite plus de temps, nous vous en informerons et vous tiendrons 
                  régulièrement au courant de l'avancement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-white mb-4">Escalade et médiation</h2>
              <p className="text-gray-300 mb-4">
                Si vous n'êtes pas satisfait de notre réponse ou de la résolution proposée, vous pouvez :
              </p>
              <div className="space-y-3">
                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                    1. Demander une révision
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Demandez à ce que votre dossier soit réexaminé par la direction de Cursiva. Nous procéderons à une 
                    révision complète et vous fournirons une réponse finale dans les 5 jours ouvrables.
                  </p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text mb-2">
                    2. Médiation externe
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Si le différend persiste, nous pouvons convenir mutuellement de recourir à une médiation externe 
                    par un médiateur professionnel neutre pour trouver une solution amiable.
                  </p>
                </div>

                <div className="glass p-4 rounded-lg">
                  <h3 className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                    3. Organismes de protection des consommateurs
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Vous pouvez également contacter l'Office de la protection du consommateur du Québec pour obtenir 
                    de l'assistance ou déposer une plainte formelle.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-white mb-4">Confidentialité</h2>
              <p className="text-gray-300">
                Toutes les plaintes sont traitées de manière strictement confidentielle. Les informations partagées 
                ne seront divulguées qu'aux personnes directement impliquées dans la résolution du problème, 
                conformément à notre politique de protection des renseignements personnels.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">Amélioration continue</h2>
              <p className="text-gray-300">
                Nous analysons toutes les plaintes reçues pour identifier les tendances et opportunités d'amélioration. 
                Vos commentaires nous aident à améliorer constamment nos services, nos processus et la satisfaction client.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">Nous contacter</h2>
              <p className="text-gray-300 mb-4">
                Pour soumettre une plainte ou pour toute question concernant cette politique :
              </p>
              <div className="glass p-6 rounded-lg space-y-2">
                <p className="text-white">
                  <strong>Cursiva - Service à la clientèle</strong>
                </p>
                <p className="text-white">
                  <strong>Courriel :</strong> <a href="mailto:contact@cursiva.ca" className="text-cyan-400 hover:text-cyan-300">contact@cursiva.ca</a>
                </p>
                <p className="text-white">
                  <strong>Téléphone :</strong> <a href="tel:+15814467277" className="text-cyan-400 hover:text-cyan-300">+1 (581) 446-7277</a>
                </p>
                <p className="text-white">
                  <strong>Heures d'ouverture :</strong> Lundi au Vendredi, 9h00 à 17h00 (HNE)
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
