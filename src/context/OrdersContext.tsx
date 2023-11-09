import React, { createContext, useContext, useEffect, useState } from 'react';
import { Phone } from '../types/PhoneTypes';

type Order = {
    orderId: string;
    timestamp: string;
    products: Phone[];
    status: string;
    totalPrice: number,
}

type OrdersContextType = {
  orders: Order[];
  addToOrders: (order: Order) => void;
  cancelOrder: (order: Order) => void;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('There is no OrdersProvider!');
  }
  return context;
};

type OrdersProviderProps = {
  children: React.ReactNode;
};

export const OrdersProvider: React.FC<OrdersProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
      return JSON.parse(savedOrders);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addToOrders = (order: Order) => {
    setOrders(prevOrders => [...prevOrders, order]);
  };

  const cancelOrder = (order: Order) => {
    setOrders(prevOrders => prevOrders.filter(item => item.orderId !== order.orderId));
  };

  return (
    <OrdersContext.Provider value={{ orders, addToOrders, cancelOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

