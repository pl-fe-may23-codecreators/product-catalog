import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { useCart } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Checkout } from '../Checkout';

export const Cart = () => {
  const { cart } = useCart();
  const [totalItems, setTotalItems] = useState(0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.amount ?? 1),
    0,
  );

  useEffect(() => {
    setTotalItems(cart.reduce((acc, item) => acc + (item.amount ?? 1), 0));
  }, [cart]);

  return (
    <div className="Cart">
      <button className="Cart__goback">
        <div className="Cart__goback--icon" />
        <p className="Cart__goback--text">Back</p>
      </button>
      <h1 className="Cart__title">Cart</h1>
      <div className="Cart__content">
        <div className="Cart__items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              phone={item}
              setTotalItems={setTotalItems}
            />
          ))}
        </div>
        <div className="Cart__total">
          <div className="Total">
            <div className="Total__price">${totalPrice}</div>
            <div className="Total__count-items">
              Total for {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </div>
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};
