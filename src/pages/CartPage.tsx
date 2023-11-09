import homeIcon from '../images/home.svg';
import rightIcon from '../images/disabled_right_icon.svg';
import { NavLink } from 'react-router-dom';
import { Cart } from '../components/Cart/Cart';
import { useCart } from '../context/CartContext';
import emptyCart from '../images/empty_cart.png';

const CartPage = () => {
  const { cart } = useCart();
  return (
    <div className="container">
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
      <h2 className="Cart__title">Cart</h2>
      <p className="favourites-counter">
        {cart.length > 1
          ? `${cart.length} items`
          : cart.length === 1
          ? '1 item'
          : 'no items'}
      </p>

      {cart.length > 0 ? (
        <Cart />
      ) : (
        <img
          src={emptyCart}
          alt="empty cart"
          style={{ width: '20%', margin: '0 auto' }}
        />
      )}
    </div>
  );
};

export default CartPage;
