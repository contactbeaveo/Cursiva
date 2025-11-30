import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Rocket, CheckCircle, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'site-web',
    budget: '1000-3000',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [captchaError, setCaptchaError] = useState(false);

  // Generate a new captcha question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
    setCaptchaAnswer('');
    setCaptchaError(false);
  };

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verify captcha
    if (parseInt(captchaAnswer) !== captchaQuestion.answer) {
      setCaptchaError(true);
      return;
    }
    
    // In a real application, this would send the data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'site-web',
        budget: '1000-3000',
        message: '',
      });
      generateCaptcha(); // Generate new captcha after submission
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['contact@cursiva.com', 'Réponse sous 24h'],
    },
    {
      icon: <Phone size={24} />,
      title: 'Téléphone',
      details: ['+1 (418) 123-4567', 'Lun-Ven : 9h-18h'],
    },
    {
      icon: <MapPin size={24} />,
      title: 'Adresse',
      details: ['Québec, QC, Canada', 'Services partout au Québec'],
    },
    {
      icon: <Clock size={24} />,
      title: 'Horaires',
      details: ['Lundi - Vendredi', '9h00 - 18h00'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Contactez notre agence WordPress Québec
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Vous avez un projet de site WordPress, boutique WooCommerce ou design graphique ? Parlons-en ! Remplissez le formulaire ci-dessous et obtenez un devis gratuit sous 24h avec des tarifs transparents pour votre projet web au Québec.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="mb-8 text-white">Nos coordonnées</h2>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 glass p-4 rounded-xl hover:glass-strong transition-all group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="mb-1 text-white">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-400">{detail}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="glass p-8 rounded-2xl border border-orange-400/30"
                >
                  <h3 className="mb-4 text-orange-300 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Pourquoi nous choisir ?
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    {[
                      'Devis gratuit sous 24h',
                      'Tarifs transparents sans surprise',
                      'Délais respectés',
                      'Support technique inclus',
                      'Satisfaction garantie',
                      'Expertise web et design',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-strong p-8 rounded-2xl border border-white/10">
                <h2 className="mb-6 text-white flex items-center gap-2">
                  <Send className="w-6 h-6 text-cyan-400" />
                  Demander un devis
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="glass-light border border-cyan-400/40 text-cyan-300 p-6 rounded-xl text-center"
                  >
                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                    <p className="mb-2">✓ Merci ! Votre message a été envoyé.</p>
                    <p className="text-sm">Nous vous répondrons sous 24h.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-gray-300">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass-light border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass-light border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2 text-gray-300">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass-light border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500"
                        placeholder="+1 (418) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block mb-2 text-gray-300">
                        Type de service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass-light border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none text-white"
                      >
                        <option value="site-web">Site web WordPress</option>
                        <option value="ecommerce">Boutique WooCommerce</option>
                        <option value="design">Design graphique</option>
                        <option value="seo">SEO / Référencement</option>
                        <option value="maintenance">Maintenance WordPress</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block mb-2 text-gray-300">
                        Budget estimé (CAD) *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass-light border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none text-white"
                      >
                        <option value="500-1000">500$ - 1 000$</option>
                        <option value="1000-3000">1 000$ - 3 000$</option>
                        <option value="3000-6000">3 000$ - 6 000$</option>
                        <option value="6000+">6 000$+</option>
                        <option value="non-defini">Non défini</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-gray-300">
                        Décrivez votre projet *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 glass-light border border-white/10 rounded-xl focus:border-cyan-400 focus:outline-none text-white resize-none placeholder-gray-500"
                        placeholder="Parlez-nous de votre projet, vos objectifs, vos besoins..."
                      />
                    </div>

                    {/* Captcha */}
                    <div>
                      <label htmlFor="captcha" className="block mb-2 text-gray-300 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-cyan-400" />
                        Vérification anti-spam *
                      </label>
                      <div className="flex items-center gap-4">
                        <div className="glass-light border border-white/10 px-6 py-3 rounded-xl text-white text-center min-w-[140px]">
                          <span className="text-cyan-300">{captchaQuestion.num1}</span>
                          {' + '}
                          <span className="text-cyan-300">{captchaQuestion.num2}</span>
                          {' = ?'}
                        </div>
                        <input
                          type="number"
                          id="captcha"
                          value={captchaAnswer}
                          onChange={(e) => {
                            setCaptchaAnswer(e.target.value);
                            setCaptchaError(false);
                          }}
                          required
                          className={`flex-1 px-4 py-3 glass-light border rounded-xl focus:outline-none text-white placeholder-gray-500 ${
                            captchaError 
                              ? 'border-red-400 focus:border-red-400' 
                              : 'border-white/10 focus:border-cyan-400'
                          }`}
                          placeholder="Votre réponse"
                        />
                      </div>
                      {captchaError && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          ⚠️ Réponse incorrecte. Veuillez réessayer.
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 group"
                    >
                      <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      Envoyer le message
                      <Send size={20} />
                    </button>

                    <p className="text-gray-500 text-sm text-center">
                      En envoyant ce formulaire, vous acceptez d'être contacté concernant votre demande.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}