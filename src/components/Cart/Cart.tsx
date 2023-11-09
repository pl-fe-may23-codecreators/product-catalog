import homeIcon from '../../images/home.svg';
import rightIcon from '../../images/disabled_right_icon.svg';
import { NavLink } from 'react-router-dom';
import './Cart.scss';
import { BackClick } from '../BackClick/backClick';
import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { useCart } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Checkout } from '../Checkout';
import Modal from '../Modal/Modal';
import { useUser } from '@clerk/clerk-react';
export const Cart = () => {
  const { cart } = useCart();
  const [totalItems, setTotalItems] = useState(0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.amount ?? 1),
    0,
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isSignedIn } = useUser();

  const handleCheckoutClick = () => {
    if (!isSignedIn) {
      setIsModalVisible(true);
    }
  };

  useEffect(() => {
    setTotalItems(cart.reduce((acc, item) => acc + (item.amount ?? 1), 0));
  }, [cart]);

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
      <div className="Cart">
        <h1 className="Cart__title">Cart</h1>
        <div className="Cart__content">
          <div className="Cart__items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                phone={item}
                setTotalItems={setTotalItems}
              />
            ))}
          </div>
          <div className="Cart__total">
            <div className="Total">
              <div className="Total__price">${totalPrice.toFixed(2)}</div>
              <div className="Total__count-items">
                Total for {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </div>
              <div onClick={handleCheckoutClick}>
                <Checkout totalPrice={totalPrice} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && <Modal onClose={() => setIsModalVisible(false)} />}
    </>
  );
};
