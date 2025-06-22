import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
}

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Café da Manhã Especial",
    description: "Café + Pão na chapa por apenas R$ 9,90. Disponível das 6h às 10h.",
    image: "https://images.pexels.com/photos/1430626/pexels-photo-1430626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    buttonText: "Peça Agora",
    link: "/menu"
  },
  {
    id: 2,
    title: "Doces & Café",
    description: "Compre qualquer doce e ganhe 20% de desconto no café.",
    image: "https://images.pexels.com/photos/131893/pexels-photo-131893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    buttonText: "Ver Opções",
    link: "/menu"
  },
  {
    id: 3,
    title: "Happy Hour de Café",
    description: "Todos os cafés com 15% de desconto das 15h às 17h.",
    image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    buttonText: "Saiba Mais",
    link: "/menu"
  }
];

const PromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promotions.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const currentPromotion = promotions[currentIndex];
  
  return (
    <div className="relative w-full h-96 bg-brown-900 overflow-hidden">
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${currentPromotion.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-brown-900/80 to-brown-900/40"></div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-cream-100 mb-2">
            {currentPromotion.title}
          </h2>
          <p className="text-cream-300 mb-6 text-lg">
            {currentPromotion.description}
          </p>
          <Link 
            to={currentPromotion.link} 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full inline-block transition-colors"
          >
            {currentPromotion.buttonText}
          </Link>
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-brown-900/50 hover:bg-brown-900/70 text-white rounded-full p-2 transition-colors"
        aria-label="Promoção anterior"
      >
        <ArrowLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-brown-900/50 hover:bg-brown-900/70 text-white rounded-full p-2 transition-colors"
        aria-label="Próxima promoção"
      >
        <ArrowRight size={24} />
      </button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-orange-500' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para promoção ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionBanner;