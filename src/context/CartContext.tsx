import React, { createContext, useContext, useEffect, useState } from 'react';
import { Phone } from '../types/PhoneTypes';
import { useUser } from '@clerk/clerk-react';

type CartContextType = {
  cart: Phone[];
  addToCart: (phone: Phone) => void;
  removeFromCart: (phone: Phone) => void;
  clearCart: () => void;
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

  const addToCart = (phoneToAdd: Phone) => {
    setCart((prevCart) => {
      const existingPhone = prevCart.find((item) => item.id === phoneToAdd.id);
      if (existingPhone) {
        return prevCart.map((item) =>
          item.id === phoneToAdd.id
            ? { ...item, amount: (item.amount ?? 1) + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...phoneToAdd, amount: 1 }];
      }
    });
  };

  const removeFromCart = (phoneToRemove: Phone) => {
    setCart((prevCart) => {
      const existingPhone = prevCart.find(
        (item) => item.id === phoneToRemove.id,
      );
      if (
        existingPhone &&
        existingPhone.amount !== undefined &&
        existingPhone.amount > 1
      ) {
        return prevCart.map((item) =>
          item.id === phoneToRemove.id && item.amount !== undefined
            ? { ...item, amount: item.amount - 1 }
            : item,
        );
      } else {
        return prevCart.filter((item) => item.id !== phoneToRemove.id);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
