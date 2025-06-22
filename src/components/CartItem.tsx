import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem as CartItemType } from '../types/Cart';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex items-center p-4 border-b border-gray-200 last:border-b-0">
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="text-brown-900 font-bold">{product.name}</h3>
        <p className="text-brown-600 text-sm">{product.description.substring(0, 60)}...</p>
        <p className="text-brown-900 font-bold mt-1">
          R$ {product.price.toFixed(2)}
        </p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => decreaseQuantity(product.id)} 
          className="bg-gray-200 hover:bg-gray-300 text-brown-900 rounded-full p-1 transition-colors"
          aria-label="Diminuir quantidade"
        >
          <Minus size={16} />
        </button>
        
        <span className="w-8 text-center font-semibold">{quantity}</span>
        
        <button 
          onClick={() => increaseQuantity(product.id)} 
          className="bg-gray-200 hover:bg-gray-300 text-brown-900 rounded-full p-1 transition-colors"
          aria-label="Aumentar quantidade"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <div className="ml-4 text-right">
        <p className="text-brown-900 font-bold">
          R$ {(product.price * quantity).toFixed(2)}
        </p>
        
        <button 
          onClick={() => removeFromCart(product.id)} 
          className="text-red-500 hover:text-red-700 transition-colors mt-2"
          aria-label={`Remover ${product.name} do carrinho`}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;