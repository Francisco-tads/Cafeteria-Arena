import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {product.isPromotion && (
          <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            Promoção
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-brown-900 mb-1">{product.name}</h3>
        <p className="text-brown-600 text-sm mb-3 h-10 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <div>
            {product.isPromotion && product.oldPrice ? (
              <div>
                <span className="text-gray-500 line-through text-sm mr-2">
                  R$ {product.oldPrice.toFixed(2)}
                </span>
                <span className="text-orange-600 font-bold">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-brown-900 font-bold">
                R$ {product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="bg-brown-700 hover:bg-brown-800 text-white rounded-full p-2 transition-colors"
            aria-label={`Adicionar ${product.name} ao carrinho`}
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;