import { useCart } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Checkout } from '../Checkout';
import './Cart.scss';
import Modal from '../Modal/Modal';
import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';

export const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isSignedIn } = useUser();

  const handleCheckoutClick = () => {
    if (!isSignedIn) {
      setIsModalVisible(true);
    }
  };

  return (
    <>
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
              <div className="Total__price">${totalPrice.toFixed(2)}</div>
              <div className="Total__count-items">
                Total for {cart.length} {cart.length === 1 ? 'item' : 'items'}
              </div>
              <button onClick={handleCheckoutClick} className="Total__checkout">Checkout</button>
            </div>
            <Checkout totalPrice={totalPrice} />
          </div>
        </div>
      </div>
      {isModalVisible && <Modal onClose={() => setIsModalVisible(false)} />}
    </>
  );
};
