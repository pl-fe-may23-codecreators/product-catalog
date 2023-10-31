import './CartItem.scss';

export const CartItem = () => (
  <div className="CartItem">
    <div className='CartItem__content'>
      <button className='CartItem__remove'></button>
      <img className='CartItem__image' src={require('./example.png')} alt="Cart item image" />
      <div className="CartItem__name">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</div>
      <div className="CartItem__count">
        <button className="CartItem__count--button CartItem__count--decrease-amount" />
        <div className="CartItem__count--amount">1</div>
        <button className='CartItem__count--button CartItem__count--increase-amount' />
      </div>
      <div className="CartItem__price">$100</div>
    </div>
  </div>
);