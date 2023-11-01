import { FC } from 'react';
import './CartItem.scss';

type CartItemProps = {
  name: string;
  imgURL: string;
  price: number;
};

export const CartItem: FC<CartItemProps> = ({name, price, imgURL}) => (
  <div className="CartItem">
    <div className="CartItem__content">
      <button className="CartItem__remove"></button>
      <img
        className="CartItem__image"
        src={`https://codecreators-backend.onrender.com/${[imgURL]}`}
        alt="Cart item image"
      />
      <div className="CartItem__name">
        {name}
      </div>
      <div className="CartItem__count">
        <button className="CartItem__count--button CartItem__count--decrease-amount" />
        <div className="CartItem__count--amount">1</div>
        <button className="CartItem__count--button CartItem__count--increase-amount" />
      </div>
      <div className="CartItem__price">${price}</div>
    </div>
  </div>
);