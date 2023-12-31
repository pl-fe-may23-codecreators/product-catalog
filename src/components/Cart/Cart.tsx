import './Cart.scss';
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
      <div className="Cart">
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
                {isSignedIn ? (
                  <Checkout totalPrice={totalPrice} />
                ) : (
                  <div className="checkoutnouser">Checkout</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && <Modal onClose={() => setIsModalVisible(false)} />}
    </>
  );
};
