import React from 'react';
import { Clock, MapPin, Coffee } from 'lucide-react';

const InfoBar: React.FC = () => {
  return (
    <div className="bg-brown-800 text-cream-100 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center">
            <Clock className="mr-2 text-orange-300" size={18} />
            <span>Segunda a Sábado: 6h às 18h</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="mr-2 text-orange-300" size={18} />
            <span>Rua Tommasso Giovanni, São Paulo - SP</span>
          </div>
          
          <div className="flex items-center">
            <Coffee className="mr-2 text-orange-300" size={18} />
            <span>O melhor café da região!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;