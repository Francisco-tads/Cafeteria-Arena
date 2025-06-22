import { Product } from '../types/Product';

export const products: Product[] = [
  // Café
  {
    id: 1,
    name: "Café Espresso",
    description: "Café espresso tradicional, intenso e encorpado.",
    price: 5.90,
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Cafés",
    featured: true,
    isPromotion: false
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso com leite vaporizado e espuma de leite.",
    price: 8.90,
    image: "https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Cafés",
    featured: true,
    isPromotion: false
  },
  {
    id: 3,
    name: "Latte",
    description: "Café espresso com leite vaporizado e uma fina camada de espuma.",
    price: 9.90,
    image: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Cafés",
    featured: false,
    isPromotion: false
  },
  {
    id: 4,
    name: "Mocha",
    description: "Espresso com chocolate, leite vaporizado e chantilly.",
    price: 10.90,
    oldPrice: 12.90,
    image: "https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Cafés",
    featured: false,
    isPromotion: true
  },
  {
    id: 5,
    name: "Café Americano",
    description: "Espresso diluído em água quente.",
    price: 6.90,
    image: "https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Cafés",
    featured: false,
    isPromotion: false
  },
  
  // Salgados
  {
    id: 6,
    name: "Pão de Queijo",
    description: "Tradicional pão de queijo mineiro, quentinho e macio.",
    price: 4.50,
    image: "https://images.pexels.com/photos/5639386/pexels-photo-5639386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Salgados",
    featured: true,
    isPromotion: false
  },
  {
    id: 7,
    name: "Misto Quente",
    description: "Sanduíche com presunto e queijo derretido no pão francês.",
    price: 8.90,
    image: "https://images.pexels.com/photos/15012326/pexels-photo-15012326/free-photo-of-sanduiche-de-presunto-e-queijo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Salgados",
    featured: false,
    isPromotion: false
  },
  {
    id: 8,
    name: "Croissant",
    description: "Croissant folhado e amanteigado.",
    price: 6.90,
    oldPrice: 8.50,
    image: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Salgados",
    featured: false,
    isPromotion: true
  },
  {
    id: 9,
    name: "Coxinha de Frango",
    description: "Coxinha tradicional de frango com massa macia.",
    price: 5.90,
    image: "https://images.pexels.com/photos/4193037/pexels-photo-4193037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Salgados",
    featured: false,
    isPromotion: false
  },
  {
    id: 10,
    name: "Pão na Chapa",
    description: "Pão francês na chapa com manteiga.",
    price: 4.90,
    image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Salgados",
    featured: true,
    isPromotion: false
  },
  
  // Bolos e Doces
  {
    id: 11,
    name: "Bolo de Chocolate",
    description: "Fatia de bolo de chocolate com cobertura.",
    price: 7.90,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Bolos e Doces",
    featured: false,
    isPromotion: false
  },
  {
    id: 12,
    name: "Cheesecake",
    description: "Cheesecake cremoso com calda de frutas vermelhas.",
    price: 12.90,
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Bolos e Doces",
    featured: false,
    isPromotion: false
  },
  {
    id: 13,
    name: "Brownie",
    description: "Brownie de chocolate meio amargo com nozes.",
    price: 8.90,
    oldPrice: 10.90,
    image: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Bolos e Doces",
    featured: false,
    isPromotion: true
  },
  {
    id: 14,
    name: "Pudim",
    description: "Pudim de leite condensado tradicional.",
    price: 6.90,
    image: "https://images.pexels.com/photos/12319903/pexels-photo-12319903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Bolos e Doces",
    featured: false,
    isPromotion: false
  },
  {
    id: 15,
    name: "Torta de Limão",
    description: "Torta de limão com massa crocante e cobertura de merengue.",
    price: 9.90,
    image: "https://images.pexels.com/photos/9833518/pexels-photo-9833518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Bolos e Doces",
    featured: false,
    isPromotion: false
  },
  
  // Bebidas
  {
    id: 16,
    name: "Suco de Laranja",
    description: "Suco de laranja natural, feito na hora.",
    price: 7.90,
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Bebidas",
    featured: false,
    isPromotion: false
  },
  {
    id: 17,
    name: "Chocolate Quente",
    description: "Chocolate quente cremoso com chantilly.",
    price: 9.90,
    image: "https://images.pexels.com/photos/5662282/pexels-photo-5662282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Bebidas",
    featured: false,
    isPromotion: false
  },
  {
    id: 18,
    name: "Água Mineral",
    description: "Água mineral sem gás.",
    price: 3.50,
    image: "https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Bebidas",
    featured: false,
    isPromotion: false
  }
];