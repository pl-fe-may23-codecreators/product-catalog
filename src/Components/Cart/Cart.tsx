import { CartItem } from '../CartItem';
import './Cart.scss';

export const Cart = () => (
  <div className="Cart">
    <button className="Cart__goback">
      <div className="Cart__goback--icon" />
      <p className="Cart__goback--text">Back</p>
    </button>
    <h1 className="Cart__title">Cart</h1>
    <div className="Cart__content">
      <div className="Cart__items">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="Cart__total">
        <div className="Total">
          <div className="Total__price">$300</div>
          <div className="Total__count-items">Total for 3 items</div>
          <button className="Total__checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>
);
