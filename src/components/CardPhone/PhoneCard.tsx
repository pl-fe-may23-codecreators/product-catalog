import React from 'react';
import { Phone } from '../../types/Phone';
import './PhoneCard.scss';
import heartIcon from '../../images/heart_icon.svg';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => (
  <div className="card">
    <div className="card__content">
      <div>
        <img className="card__image" src={`https://codecreators-backend.onrender.com/${[phone.image]}`} alt="img" />
      </div>
      <p className="card__title">{phone.name}</p>
      <div className="card__price">
        <span className="card__current-price">${phone.price}</span>
        <span className="card__previous-price">${phone.fullPrice}</span>
      </div>
      <div className="card__divider"></div>
      <div className="card__characteristics">
        <div className="card__characteristics-title">
          <div className="card__characteristics-name">Screen</div>
          <div className="card__characteristics-name">Capacity</div>
          <div className="card__characteristics-name">RAM</div>
        </div>
        <div className="card__characteristics-meaning">
          <div className="card__characteristics-value">{phone.screen}</div>
          <div className="card__characteristics-value">{phone.capacity}</div>
          <div className="card__characteristics-value">{phone.ram}</div>
        </div>
      </div>
      <div className="card__buttons">
        <button className="card__button-primary">Add to cart</button>
        <img
          className="card__button-favourite"
          src={heartIcon}
          alt=""
        />
      </div>
    </div>
  </div>
);
