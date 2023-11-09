import React, { FC } from 'react';
import './CartItem.scss';
import { Phone } from '../../types/PhoneTypes';
import { useCart } from '../../context/CartContext';

type CartItemProps = {
  phone: Phone;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
};

export const CartItem: FC<CartItemProps> = ({ phone, setTotalItems }) => {
  const { cart, removeFromCart, addToCart } = useCart();

  const onIncrease = () => {
    addToCart(phone);
    setTotalItems((prevTotal: number) => prevTotal + 1);
  };

  const onDecrease = () => {
    removeFromCart(phone);
    if (countItemsInCartById(phone.id) > 1) {
      setTotalItems((prevTotal: number) => prevTotal - 1);
    }
  };

  const countItemsInCartById = (itemId: string | undefined) => {
    return cart.reduce((count, item) => {
      if (item.id === itemId) {
        return count + (item.amount ?? 1);
      }
      return count;
    }, 0);
  };

  return (
    <div className="CartItem">
      <div className="CartItem__content">
        <button
          onClick={() => removeFromCart(phone)}
          className="CartItem__remove"
        ></button>
        <img
          className="CartItem__image"
          src={`https://codecreators-backend.onrender.com/${phone.image}`}
          alt={`${phone.name}`}
        />
        <div className="CartItem__name">{phone.name}</div>
        <div className="CartItem__count">
          <button
            onClick={onDecrease}
            className="CartItem__count--button CartItem__count--decrease-amount"
            disabled={countItemsInCartById(phone.id) === 1}
          ></button>
          <div className="CartItem__count--amount">
            {countItemsInCartById(phone.id)}
          </div>
          <button
            onClick={onIncrease}
            className="CartItem__count--button CartItem__count--increase-amount"
          ></button>
        </div>
        <div className="CartItem__price">
          ${phone.price * countItemsInCartById(phone.id)}
        </div>
      </div>
    </div>
  );
};
