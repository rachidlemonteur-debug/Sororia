import React, { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  ShoppingBag, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  Loader2
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulation d'un appel réseau
    setTimeout(() => {
      setFormStatus('success');
      
      // Réinitialisation après 3 secondes
      setTimeout(() => {
        setFormStatus('idle');
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-sororia-cream/90 backdrop-blur-sm z-50 border-b border-sororia-pink-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="font-serif text-3xl tracking-widest text-sororia-dark font-semibold">
                SORORIA
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-sm uppercase tracking-wider hover:text-sororia-gold transition-colors">Services</a>
              <a href="#galerie" className="text-sm uppercase tracking-wider hover:text-sororia-gold transition-colors">Galerie</a>
              <a href="#avis" className="text-sm uppercase tracking-wider hover:text-sororia-gold transition-colors">Avis</a>
              <a href="#infos" className="text-sm uppercase tracking-wider hover:text-sororia-gold transition-colors">Infos</a>
              <a 
                href="#reservation" 
                className="bg-sororia-dark text-sororia-cream px-6 py-2 rounded-sm text-sm uppercase tracking-wider hover:bg-sororia-gold transition-colors"
              >
                Réserver
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-sororia-dark focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-sororia-cream border-b border-sororia-pink-dark/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              <a href="#services" onClick={toggleMenu} className="block px-3 py-2 text-base uppercase tracking-wider hover:text-sororia-gold">Services</a>
              <a href="#galerie" onClick={toggleMenu} className="block px-3 py-2 text-base uppercase tracking-wider hover:text-sororia-gold">Galerie</a>
              <a href="#avis" onClick={toggleMenu} className="block px-3 py-2 text-base uppercase tracking-wider hover:text-sororia-gold">Avis</a>
              <a href="#infos" onClick={toggleMenu} className="block px-3 py-2 text-base uppercase tracking-wider hover:text-sororia-gold">Infos</a>
              <a href="#reservation" onClick={toggleMenu} className="block px-3 py-2 text-base uppercase tracking-wider text-sororia-gold font-semibold">Réserver</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative pt-20 pb-32 flex items-center justify-center min-h-[90vh] bg-sororia-pink overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-sororia-pink-dark blur-3xl"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-sororia-cream blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="block text-sororia-gold text-sm uppercase tracking-[0.3em] mb-4">Boutique & Salon de Beauté</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
            Beauté & élégance <br className="hidden md:block" />
            <span className="italic text-sororia-gold">au cœur d'Antananarivo</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-sororia-text/80 max-w-2xl mx-auto mb-10 font-light">
            Une expérience unique dédiée à votre bien-être. Laissez nos experts révéler votre beauté naturelle dans un cadre chic et apaisant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="tel:+261342723123" 
              className="bg-sororia-dark text-sororia-cream px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-sororia-gold transition-all duration-300 flex items-center w-full sm:w-auto justify-center"
            >
              <Phone size={16} className="mr-2" />
              Prendre rendez-vous
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 uppercase tracking-widest text-sm border border-sororia-dark text-sororia-dark hover:bg-sororia-dark hover:text-sororia-cream transition-all duration-300 w-full sm:w-auto text-center"
            >
              Découvrir
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-sororia-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Nos Prestations</h2>
            <div className="w-24 h-px bg-sororia-gold mx-auto"></div>
            <p className="mt-6 text-sororia-text/80 max-w-2xl mx-auto">
              Des soins sur-mesure réalisés avec des produits d'exception pour sublimer votre beauté au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white p-10 shadow-sm border border-sororia-pink-dark/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sororia-pink flex items-center justify-center mb-6 group-hover:bg-sororia-gold group-hover:text-white group-hover:scale-110 transition-all duration-300 text-sororia-dark">
                <Scissors size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif mb-3">Coiffure</h3>
              <p className="text-sororia-text/70 font-light mb-6 flex-grow">
                Coupe sur-mesure, coloration éclatante, balayage, lissage brésilien et soins profonds pour une chevelure sublimée.
              </p>
              <a href="#reservation" className="text-sororia-gold text-sm uppercase tracking-wider font-medium flex items-center hover:text-sororia-dark transition-colors">
                Réserver <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-10 shadow-sm border border-sororia-pink-dark/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sororia-pink flex items-center justify-center mb-6 group-hover:bg-sororia-gold group-hover:text-white group-hover:scale-110 transition-all duration-300 text-sororia-dark">
                <Sparkles size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif mb-3">Soins Beauté</h3>
              <p className="text-sororia-text/70 font-light mb-6 flex-grow">
                Maquillage de jour ou d'événement, soins du visage purifiants et anti-âge, beauté des mains et des pieds.
              </p>
              <a href="#reservation" className="text-sororia-gold text-sm uppercase tracking-wider font-medium flex items-center hover:text-sororia-dark transition-colors">
                Réserver <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-10 shadow-sm border border-sororia-pink-dark/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sororia-pink flex items-center justify-center mb-6 group-hover:bg-sororia-gold group-hover:text-white group-hover:scale-110 transition-all duration-300 text-sororia-dark">
                <ShoppingBag size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif mb-3">Boutique</h3>
              <p className="text-sororia-text/70 font-light mb-6 flex-grow">
                Sélection exclusive de produits capillaires professionnels, cosmétiques haut de gamme et accessoires de beauté.
              </p>
              <a href="#infos" className="text-sororia-gold text-sm uppercase tracking-wider font-medium flex items-center hover:text-sororia-dark transition-colors">
                Nous rendre visite <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section id="galerie" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Notre Univers</h2>
              <div className="w-24 h-px bg-sororia-gold"></div>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center text-sm uppercase tracking-wider hover:text-sororia-gold transition-colors mt-6 md:mt-0">
              <Instagram size={16} className="mr-2" /> Suivez-nous
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Image 1 */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-sororia-pink flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Salon intérieur" 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif text-xl tracking-wide">Notre Salon</span>
              </div>
            </div>
            
            {/* Image 2 */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-sororia-pink-dark flex items-center justify-center lg:translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Maquillage" 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif text-xl tracking-wide">Mise en beauté</span>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-sororia-pink flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Coiffure Avant/Après" 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif text-xl tracking-wide">Avant / Après</span>
              </div>
            </div>

            {/* Image 4 */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-sororia-pink-dark flex items-center justify-center lg:translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Produits boutique" 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-serif text-xl tracking-wide">La Boutique</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 md:hidden text-center">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm uppercase tracking-wider hover:text-sororia-gold transition-colors">
              <Instagram size={16} className="mr-2" /> Voir plus sur Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Avis Section */}
      <section id="avis" className="py-24 bg-sororia-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center space-x-1 mb-4 text-sororia-gold">
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Mots Doux</h2>
            <div className="w-24 h-px bg-sororia-gold mx-auto mb-4"></div>
            <p className="text-sm uppercase tracking-widest text-sororia-text/60">Note Google : 5/5</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Avis 1 */}
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-sm">
              <p className="italic font-serif text-lg mb-6 text-sororia-dark leading-relaxed">
                "Un salon magnifique au cœur d'Amparibe. L'équipe est aux petits soins et j'ai adoré ma nouvelle coupe. Les produits utilisés sentent divinement bon. Je recommande les yeux fermés !"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-sororia-gold/20 flex items-center justify-center text-sororia-gold font-serif text-xl mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Mialy R.</h4>
                  <p className="text-xs text-sororia-text/60">Il y a 2 semaines</p>
                </div>
              </div>
            </div>

            {/* Avis 2 */}
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-sm">
              <p className="italic font-serif text-lg mb-6 text-sororia-dark leading-relaxed">
                "Sororia est devenu mon adresse incontournable pour mes soins du visage. L'ambiance est tellement relaxante qu'on s'y sent tout de suite bien. Une vraie parenthèse de douceur."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-sororia-gold/20 flex items-center justify-center text-sororia-gold font-serif text-xl mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Sarah T.</h4>
                  <p className="text-xs text-sororia-text/60">Il y a 1 mois</p>
                </div>
              </div>
            </div>

            {/* Avis 3 */}
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-sm">
              <p className="italic font-serif text-lg mb-6 text-sororia-dark leading-relaxed">
                "J'ai fait appel à eux pour mon maquillage de mariage. Résultat parfait, qui a tenu toute la journée ! Leurs conseils à la boutique m'ont aussi permis de trouver ma routine idéale."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-sororia-gold/20 flex items-center justify-center text-sororia-gold font-serif text-xl mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider">Ando N.</h4>
                  <p className="text-xs text-sororia-text/60">Il y a 2 mois</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation & Infos Section */}
      <section id="reservation" className="py-0 flex flex-col lg:flex-row bg-white">
        {/* Formulaire */}
        <div className="w-full lg:w-1/2 py-24 px-4 sm:px-12 lg:px-24 flex flex-col justify-center">
          <h2 className="text-4xl font-serif mb-2">Prendre Rendez-vous</h2>
          <p className="text-sororia-text/70 mb-10 font-light">Remplissez ce formulaire pour demander une réservation. Nous vous recontacterons rapidement pour confirmer.</p>
          
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-sororia-text/70 mb-2">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border-b border-sororia-pink-dark py-2 bg-transparent focus:outline-none focus:border-sororia-gold transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-sororia-text/70 mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full border-b border-sororia-pink-dark py-2 bg-transparent focus:outline-none focus:border-sororia-gold transition-colors"
                  placeholder="+261 34 XX XXX XX"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="service" className="block text-xs uppercase tracking-widest text-sororia-text/70 mb-2">Service souhaité</label>
              <select 
                id="service" 
                defaultValue=""
                className="w-full border-b border-sororia-pink-dark py-2 bg-transparent focus:outline-none focus:border-sororia-gold transition-colors text-sororia-dark appearance-none rounded-none"
              >
                <option value="" disabled>Sélectionnez une prestation</option>
                <option value="coiffure-coupe">Coiffure - Coupe & Brushing</option>
                <option value="coiffure-coloration">Coiffure - Coloration / Balayage</option>
                <option value="soin-visage">Soin - Visage</option>
                <option value="soin-maquillage">Soin - Maquillage</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-xs uppercase tracking-widest text-sororia-text/70 mb-2">Date souhaitée</label>
              <input 
                type="date" 
                id="date" 
                className="w-full border-b border-sororia-pink-dark py-2 bg-transparent focus:outline-none focus:border-sororia-gold transition-colors text-sororia-dark"
              />
            </div>

            <button 
              type="submit" 
              disabled={formStatus !== 'idle'}
              className={`w-full py-4 uppercase tracking-widest text-sm transition-all duration-300 mt-8 flex items-center justify-center ${
                formStatus === 'success' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-sororia-dark text-sororia-cream hover:bg-sororia-gold disabled:opacity-70'
              }`}
            >
              {formStatus === 'idle' && 'Envoyer la demande'}
              {formStatus === 'submitting' && (
                <>
                  <Loader2 size={18} className="animate-spin mr-2" />
                  Envoi en cours...
                </>
              )}
              {formStatus === 'success' && (
                <>
                  <CheckCircle size={18} className="mr-2" />
                  Demande envoyée !
                </>
              )}
            </button>
          </form>
        </div>

        {/* Infos Pratiques */}
        <div id="infos" className="w-full lg:w-1/2 bg-sororia-dark text-sororia-cream py-24 px-4 sm:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 border border-sororia-gold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 border border-sororia-gold/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-serif mb-12 text-sororia-gold">Infos Pratiques</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-sororia-gold mt-1 mr-4 flex-shrink-0" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="uppercase tracking-widest text-xs text-sororia-gold mb-1">Adresse</h4>
                  <p className="font-light text-lg">Lalana Samuel Stefani<br />Amparibe, Antananarivo 101<br />Madagascar</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-sororia-gold mt-1 mr-4 flex-shrink-0" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="uppercase tracking-widest text-xs text-sororia-gold mb-1">Téléphone</h4>
                  <a href="tel:+261342723123" className="font-light text-lg hover:text-sororia-gold transition-colors">+261 34 27 231 23</a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-sororia-gold mt-1 mr-4 flex-shrink-0" size={24} strokeWidth={1.5} />
                <div>
                  <h4 className="uppercase tracking-widest text-xs text-sororia-gold mb-1">Horaires d'ouverture</h4>
                  <ul className="font-light text-lg space-y-1">
                    <li className="flex justify-between w-48"><span>Lun - Sam</span> <span>07:30 - 17:30</span></li>
                    <li className="flex justify-between w-48 text-sororia-cream/50"><span>Dimanche</span> <span>Fermé</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sororia-dark text-sororia-cream border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="font-serif text-2xl tracking-widest font-semibold block mb-2">SORORIA</span>
            <span className="text-xs uppercase tracking-widest text-sororia-cream/50">Boutique & Salon de Beauté</span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-sororia-cream/70 hover:text-sororia-gold transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-sororia-cream/70 hover:text-sororia-gold transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
          
          <div className="text-xs text-sororia-cream/50 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Sororia. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}