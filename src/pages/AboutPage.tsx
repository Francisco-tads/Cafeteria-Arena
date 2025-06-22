import React from 'react';
import { Clock, Users, Coffee, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16 bg-cream-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Sobre a Cafeteria Arena
          </h1>
          <p className="text-brown-600 max-w-2xl mx-auto">
            Conheça nossa história e o que nos torna especiais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-brown-900 mb-4">Nossa História</h2>
            <p className="text-brown-600 mb-4">
              Fundada em 2020, a Cafeteria Arena nasceu da paixão por café de qualidade e do desejo de criar um espaço acolhedor onde as pessoas pudessem desfrutar de momentos especiais.
            </p>
            <p className="text-brown-600 mb-4">
              O que começou como um pequeno café rapidamente se tornou um ponto de encontro querido na comunidade, onde servimos cafés especiais, salgados artesanais e doces deliciosos.
            </p>
            <p className="text-brown-600">
              Nossa missão é proporcionar uma experiência única, combinando produtos de alta qualidade com um atendimento caloroso e personalizado, criando um ambiente onde todos se sintam bem-vindos.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <img 
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Interior da Cafeteria Arena" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="bg-brown-900 text-cream-100 rounded-lg p-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-cream-300 max-w-2xl mx-auto">
              Os princípios que guiam tudo o que fazemos na Cafeteria Arena.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brown-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Coffee size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualidade</h3>
              <p className="text-cream-300">
                Comprometimento com a excelência em cada xícara de café e em cada produto que servimos.
              </p>
            </div>
            
            <div className="bg-brown-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comunidade</h3>
              <p className="text-cream-300">
                Criamos um espaço acolhedor que conecta pessoas e fortalece laços comunitários.
              </p>
            </div>
            
            <div className="bg-brown-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Autenticidade</h3>
              <p className="text-cream-300">
                Valorizamos receitas tradicionais e processos artesanais que preservam o verdadeiro sabor.
              </p>
            </div>
            
            <div className="bg-brown-800 p-6 rounded-lg text-center">
              <div className="bg-orange-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consistência</h3>
              <p className="text-cream-300">
                Mantemos o mesmo padrão de qualidade todos os dias, em todos os produtos que oferecemos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brown-900 mb-4">Nossa Equipe</h2>
          <p className="text-brown-600 max-w-2xl mx-auto">
            Conheça as pessoas apaixonadas que fazem a Cafeteria Arena acontecer todos os dias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Barista preparando café" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-brown-900 mb-1">Maria Silva</h3>
              <p className="text-orange-500 mb-3">Barista Chefe</p>
              <p className="text-brown-600">
                Especialista em cafés especiais com mais de 10 anos de experiência e paixão pela arte do café.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Chef de cozinha" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-brown-900 mb-1">Carlos Oliveira</h3>
              <p className="text-orange-500 mb-3">Chef de Confeitaria</p>
              <p className="text-brown-600">
                Responsável por todas as delícias que saem de nossa cozinha, com formação em confeitaria artesanal.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Gerente da cafeteria" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-brown-900 mb-1">Ana Souza</h3>
              <p className="text-orange-500 mb-3">Gerente</p>
              <p className="text-brown-600">
                Apaixonada por criar experiências memoráveis e garantir que cada cliente se sinta especial.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brown-900 mb-6">Venha nos Visitar</h2>
          <p className="text-brown-600 max-w-2xl mx-auto mb-8">
            Estamos localizados na Rua Tommasso Giovanni, em São Paulo. Nosso horário de funcionamento é de segunda a sábado, das 6h às 18h.
          </p>
          <img 
            src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Fachada da Cafeteria Arena" 
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;