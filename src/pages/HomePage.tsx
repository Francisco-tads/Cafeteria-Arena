import React from 'react';
import Hero from '../components/Hero';
import InfoBar from '../components/InfoBar';
import PromotionBanner from '../components/PromotionBanner';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  // Get only featured products for homepage
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  return (
    <>
      <Hero />
      <InfoBar />
      
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
              Nossos Destaques
            </h2>
            <p className="text-brown-600 max-w-2xl mx-auto">
              Conheça alguns dos nossos produtos mais populares, preparados com dedicação e ingredientes de alta qualidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/menu" 
              className="bg-brown-700 hover:bg-brown-800 text-white font-bold py-3 px-8 rounded-full inline-block transition-colors"
            >
              Ver Cardápio Completo
            </Link>
          </div>
        </div>
      </section>
      
      <PromotionBanner />
      
      <section className="py-16 bg-brown-900 text-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre a Cafeteria Arena
            </h2>
            <p className="text-cream-300 max-w-2xl mx-auto">
              Um lugar acolhedor onde você pode desfrutar dos melhores cafés e salgados da região.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Interior da Cafeteria Arena" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Nossa História</h3>
              <p className="mb-4 text-cream-200">
                Fundada em 2020, a Cafeteria Arena nasceu da paixão por café de qualidade e da vontade de criar um ambiente onde as pessoas pudessem se reunir, trabalhar e relaxar.
              </p>
              <p className="mb-6 text-cream-200">
                Nossa missão é oferecer uma experiência única, combinando o melhor café com um atendimento excepcional e produtos artesanais que encantam nossos clientes.
              </p>
              
              <Link 
                to="/about" 
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-brown-900 font-bold py-2 px-6 rounded-full inline-block transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Visite-nos Hoje
          </h2>
          <p className="text-brown-600 max-w-2xl mx-auto mb-8">
            Estamos esperando por você com o melhor café e um ambiente acolhedor.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <InfoBar />
              <h3 className="text-xl font-bold text-brown-900 mt-4 mb-2">Horário</h3>
              <p className="text-brown-600">
                Segunda a Sábado: 6h às 18h<br />
                Domingo: Fechado
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 flex items-center justify-center text-orange-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3 className="text-xl font-bold text-brown-900 mb-2">Endereço</h3>
              <p className="text-brown-600">
                Rua Tommasso Giovanni<br />
                São Paulo - SP
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="h-12 flex items-center justify-center text-orange-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-brown-900 mb-2">Contato</h3>
              <p className="text-brown-600">
                (11) 99129-8838<br />
                <a href="mailto:contato@cafeteriaarena.com.br" className="text-orange-500 hover:underline">
                  contato@cafeteriaarena.com.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;