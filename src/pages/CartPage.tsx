import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, Smartphone } from 'lucide-react';

const CartPage: React.FC = () => {
  const { items, clearCart, getTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [customerName, setCustomerName] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);
  
  const total = getTotal();
  const hasItems = items.length > 0;
  
  const formatItemsForWhatsApp = () => {
    const formattedItems = items.map(item => 
      `*${item.quantity}x* ${item.product.name} - R$ ${(item.product.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    return `Olá, gostaria de fazer o seguinte pedido:\n\n${formattedItems}\n\n*Total: R$ ${total.toFixed(2)}*\n\nNome: ${customerName || 'Não informado'}\nForma de pagamento: ${
      paymentMethod === 'pix' 
        ? 'PIX' 
        : paymentMethod === 'cash' 
          ? 'Dinheiro' 
          : 'Na entrega'
    }`;
  };
  
  const handleOrder = () => {
    if (!hasItems) return;
    
    const formattedMessage = encodeURIComponent(formatItemsForWhatsApp());
    const phoneNumber = '5511991298838';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOrdering(false);
  };
  
  return (
    <div className="pt-20 pb-16 bg-cream-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Seu Carrinho
          </h1>
          <p className="text-brown-600 max-w-2xl mx-auto">
            Revise seus itens e finalize seu pedido. O pagamento será processado via WhatsApp.
          </p>
        </div>
        
        {hasItems ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-brown-100 border-b border-gray-200">
                <h2 className="text-xl font-bold text-brown-900 flex items-center">
                  <ShoppingCart className="mr-2" size={20} />
                  Itens no Carrinho
                </h2>
              </div>
              
              <div>
                {items.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
              
              <div className="p-4 bg-brown-50 border-t border-gray-200 flex justify-between">
                <button 
                  onClick={() => clearCart()}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  Limpar Carrinho
                </button>
                
                <Link 
                  to="/menu" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Continuar Comprando
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-brown-900 mb-4">
                Resumo do Pedido
              </h2>
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-brown-600">Subtotal</span>
                  <span className="font-semibold">R$ {total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
              
              {isOrdering ? (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="customerName" className="block text-sm font-medium text-brown-600 mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>
                  
                  <div>
                    <span className="block text-sm font-medium text-brown-600 mb-1">
                      Forma de Pagamento
                    </span>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="pix"
                          checked={paymentMethod === 'pix'}
                          onChange={() => setPaymentMethod('pix')}
                          className="mr-2"
                        />
                        <span>PIX (11991298838)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={paymentMethod === 'cash'}
                          onChange={() => setPaymentMethod('cash')}
                          className="mr-2"
                        />
                        <span>Dinheiro</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="delivery"
                          checked={paymentMethod === 'delivery'}
                          onChange={() => setPaymentMethod('delivery')}
                          className="mr-2"
                        />
                        <span>Pagar na entrega</span>
                      </label>
                    </div>
                  </div>
                  
                  {paymentMethod === 'pix' && (
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h3 className="text-sm font-bold text-blue-700 flex items-center mb-2">
                        <CreditCard className="mr-1" size={16} />
                        Informações de Pagamento PIX
                      </h3>
                      <p className="text-sm text-blue-700 mb-2">
                        Chave PIX: <span className="font-semibold">11991298838</span>
                      </p>
                      <p className="text-xs text-blue-700">
                        Envie o comprovante junto com seu pedido no WhatsApp.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setIsOrdering(false)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-md transition-colors"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={handleOrder}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md flex items-center justify-center transition-colors"
                    >
                      <Smartphone className="mr-2" size={18} />
                      Enviar no WhatsApp
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsOrdering(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors"
                >
                  Finalizar Pedido
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <ShoppingCart className="mx-auto text-gray-400" size={64} />
            <h2 className="text-2xl font-bold text-brown-900 mt-4 mb-2">
              Seu carrinho está vazio
            </h2>
            <p className="text-brown-600 mb-6">
              Adicione itens do nosso cardápio para fazer seu pedido.
            </p>
            <Link 
              to="/menu" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block transition-colors"
            >
              Ver Cardápio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;