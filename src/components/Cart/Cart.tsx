import homeIcon from '../../images/home.svg';
import rightIcon from '../../images/disabled_right_icon.svg';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Checkout } from '../Checkout';
import './Cart.scss';
import { BackClick } from '../BackClick/backClick';

export const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <div className="navigation">
        <NavLink to="/">
          <img className="navigation__home-icon" src={homeIcon} alt="Home" />
        </NavLink>

        <img
          className="navigation__right-icon"
          src={rightIcon}
          alt="Right icon"
        />

        <NavLink to="/cart" className="navigation__category--favourites">
          <p>Cart</p>
        </NavLink>
      </div>
      <BackClick />
      <div className='Cart'>
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
              <Checkout totalPrice={totalPrice} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
