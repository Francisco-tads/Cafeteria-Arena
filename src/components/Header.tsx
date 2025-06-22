import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brown-900/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-bold text-cream-100">
          Cafeteria Arena
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-cream-100 hover:text-orange-300 transition-colors">Início</Link>
          <Link to="/menu" className="text-cream-100 hover:text-orange-300 transition-colors">Cardápio</Link>
          <Link to="/about" className="text-cream-100 hover:text-orange-300 transition-colors">Sobre</Link>
          <Link to="/contact" className="text-cream-100 hover:text-orange-300 transition-colors">Contato</Link>
          
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-cream-100 hover:text-orange-300 transition-colors" size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
        
        <div className="flex items-center md:hidden">
          <Link to="/cart" className="relative mr-4">
            <ShoppingCart className="text-cream-100" size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-cream-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brown-900/95 p-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-cream-100 hover:text-orange-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/menu" 
              className="text-cream-100 hover:text-orange-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cardápio
            </Link>
            <Link 
              to="/about" 
              className="text-cream-100 hover:text-orange-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/contact" 
              className="text-cream-100 hover:text-orange-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;