import React, { useState } from 'react';
import { Phone } from '../../types/Phone';
import './PhoneCard.scss';
import { useCart } from '../../context/CartContext';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const isSelected = cart.some((item) => item.id === phone.id);

  const handleButtonClick = () => {
    if (isSelected) {
      removeFromCart(phone);
    } else {
      addToCart(phone);
    }
  };
  return (
    <div className="card">
      <div className="card__content">
        <img
          src={`https://codecreators-backend.onrender.com/${[phone.image]}`}
          alt=""
        />
        <h3 className="card__title">{phone.name}</h3>
        <div className="card__prices">
          <h4 className="card__prices--current">${phone.price}</h4>
          <h4 className="card__prices--old">${phone.fullPrice}</h4>
        </div>
        <div className="card__details">
          <div className="card__details--screen">
            <p className="detail__title">Screen</p>
            <p className="detail__value">{phone.screen}</p>
          </div>
          <div className="card__details--capacity">
            <p className="detail__title">Capacity</p>
            <p className="detail__value">{phone.capacity}</p>
          </div>
          <div className="card__details--RAM">
            <p className="detail__title">RAM</p>
            <p className="detail__value">{phone.ram}</p>
          </div>
        </div>
        <div className="card__buttons">
          <button
            className={`card__buttons--cart ${isSelected ? 'selected' : ''}`}
            onClick={handleButtonClick}
          >
            {isSelected ? 'Added!' : 'Add to cart'}
          </button>
          <button className="card__buttons--heart"></button>
        </div>
      </div>
    </div>
  );
};
