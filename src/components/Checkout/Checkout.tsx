import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.scss';
import { generateOrderNumber } from './randomizer';
import MoonLoader from 'react-spinners/MoonLoader';

export const Checkout = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(10);
  const [orderNumber] = useState(generateOrderNumber(6));

  const showMessage = () => {
    setIsLoading(true);

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
        <div className="loading-spinner">
          <MoonLoader
            color="rgba(49, 50, 55, 1)"
            size={200}
            speedMultiplier={0.5}
          />
        </div>
      )}
      {isMessageVisible && !isLoading && (
        <div className="checkout__overlay">
          <div className="checkout__message">
            <h2>Thank You for your purchase!</h2>
            <p>
              Your order has been processed✅
              <br />
              Order confirmation and delivery info will be provided to you via
              e-mail.
            </p>
            <h3>Order ID #{orderNumber}</h3>
            <p>
              You will be redirected to the homepage in {redirectTimer} seconds.
            </p>
            <Link to="/" className="checkout__message--back">
              Go back to the homepage now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
