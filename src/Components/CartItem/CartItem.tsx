import { Phone } from '../../types/Phone';
import './CartItem.scss';
import phones from '../../api/phones.json';

export const CartItem = () => {
  const exampleItem: Phone = phones[0];

  return (
    <div className="CartItem">
      <div className='CartItem__content'>
        <button className='CartItem__remove'></button>
        <img className='CartItem__image' src={require('../CardPhone/00.jpg')} alt="Cart item image" />
        <div className="CartItem__name">{exampleItem.name}</div>
        <div className="CartItem__count">
          <button className="CartItem__count--button CartItem__count--decrease-amount" />
          <div className="CartItem__count--amount">1</div>
          <button className='CartItem__count--button CartItem__count--increase-amount' />
        </div>
        <div className="CartItem__price">${exampleItem.price}</div>
      </div>
    </div>
  );
};