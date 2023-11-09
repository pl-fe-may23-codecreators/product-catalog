import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.scss';
import { generateOrderNumber } from './randomizer';
import MoonLoader from 'react-spinners/MoonLoader';
import { useOrders } from '../../context/OrdersContext';
import { useCart } from '../../context/CartContext';

type CheckoutProps = {
  totalPrice: number;
};

export const Checkout: React.FC<CheckoutProps> = ({ totalPrice }) => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(5);
  const [orderNumber] = useState(generateOrderNumber(6));
  const { clearCart, cart } = useCart();
  const { addToOrders } = useOrders();

  const showMessage = () => {
    setIsLoading(true);

    const newOrder = {
      orderId: orderNumber,
      timestamp: new Date().toLocaleString(),
      products: cart,
      status: 'in progress',
      totalPrice,
    };
    addToOrders(newOrder);

    setTimeout(() => {
      setIsLoading(false);
      setIsMessageVisible(true);
    }, 3000);
  };

  useEffect(() => {
    if (isMessageVisible && redirectTimer > 0) {
      const timerId = setTimeout(() => {
        setRedirectTimer(redirectTimer - 1);
      }, 1000);

      return () => {
        clearTimeout(timerId);
      };
    } else if (isMessageVisible && redirectTimer === 0) {
      window.location.href = '/';
      clearCart();
    }
  }, [isMessageVisible, redirectTimer]);

  return (
    <div>
      <button
        className="Total__checkout"
        onClick={showMessage}
        disabled={isLoading}
      >
        Checkout
      </button>
      {isLoading && (
        <div className="checkout__spinner">
          <MoonLoader
            color="rgba(49, 50, 55, 1)"
            size={100}
            speedMultiplier={0.5}
          />
        </div>
      )}
      {isMessageVisible && !isLoading && (
        <div className="checkout__overlay">
          <div className="checkout__message">
            <div className="checkout__message-thanks">
              Thank You for your purchase!
            </div>
            <div className="checkout__message-confirmation">
              Your order has been processed ✅
              <br />
              Order confirmation and delivery info will be provided to you via
              e-mail.
            </div>
            <div className="checkout__message-order">
              Order ID #{orderNumber}
            </div>
            <div className="checkout__message-redirect">
              You will be redirected to the homepage in {redirectTimer} seconds.
            </div>
            <Link to="/" className="backtohomepagemodal" onClick={clearCart}>
              Go back to the homepage now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
