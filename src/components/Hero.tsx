import React from 'react';
import { Link } from 'react-router-dom';
import VideoBackground from './VideoBackground';

const Hero: React.FC = () => {
  return (
    <VideoBackground videoUrl="https://player.vimeo.com/external/371907487.sd.mp4?s=ad559fef56e9ee73c7e20d6844a5c2e7b98feb60&profile_id=164&oauth2_token_id=57447761">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-cream-100 mb-4 leading-tight">
          Bem-vindo à <span className="text-orange-400">Cafeteria Arena</span>
        </h1>
        
        <p className="text-lg md:text-xl text-cream-200 mb-8 max-w-2xl">
          Desperte seus sentidos com nossos cafés artesanais e deliciosos salgados preparados com ingredientes selecionados.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/menu" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
          >
            Ver Cardápio
          </Link>
          
          <Link 
            to="/about" 
            className="bg-transparent border-2 border-cream-100 text-cream-100 hover:bg-cream-100 hover:text-brown-900 font-bold py-3 px-8 rounded-full transition-colors text-lg"
          >
            Sobre Nós
          </Link>
        </div>
      </div>
    </VideoBackground>
  );
};

export default Hero;