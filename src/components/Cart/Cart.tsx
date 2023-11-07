import { useCart } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Checkout } from '../Checkout';
import './Cart.scss';

export const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
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
              name={item.name}
              price={item.price}
              imgURL={item.image}
            />
          ))}
        </div>
        <div className="Cart__total">
          <div className="Total">
            <div className="Total__price">${totalPrice}</div>
            <div className="Total__count-items">
              Total for {cart.length} {cart.length === 1 ? 'item' : 'items'}
            </div>
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};
