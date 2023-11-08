import React, { createContext, useContext, useEffect, useState } from 'react';
import { Phone } from '../types/PhoneTypes';
import { useUser } from '@clerk/clerk-react';

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
  const { isSignedIn } = useUser();
  const [cart, setCart] = useState<Phone[]>([]);

  useEffect(() => {
    if (isSignedIn) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, [isSignedIn]);

  useEffect(() => {
    if (isSignedIn) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isSignedIn]);

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

