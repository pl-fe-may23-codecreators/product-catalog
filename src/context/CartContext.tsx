import React, { createContext, useContext, useEffect, useState } from 'react';
import { Phone } from '../types/Phone';

type CartContextType = {
  cart: Phone[];
  addToCart: (phone: Phone) => void;
  removeFromCart: (phone: Phone) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('There is no CartProvider!');
  }
  return context;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Phone[]>(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (phone: Phone) => {
    setCart(prevCart => [...prevCart, phone]);
  };

  const removeFromCart = (phone: Phone) => {
    setCart(prevCart => prevCart.filter(item => item.id !== phone.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

