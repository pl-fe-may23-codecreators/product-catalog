import React from 'react';
import './Modal.scss';
import { useClerk } from '@clerk/clerk-react';

type LoginModalProps = {
  onClose: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const clerk = useClerk();
  return (
    <div className="login-modal">
      <div className="login-modal__backdrop" onClick={onClose} />
      <div className="login-modal__content">
        <div className="login-modal__header">
          <h4>Login Required</h4>
          <button onClick={onClose} className="login-modal__close-btn">
            &times;
          </button>
        </div>
        <div className="login-modal__body">
          Please sign in to be able to add items to your cart or favourites.
        </div>
        <button
          onClick={() => clerk.openSignIn({})}
          className="login-modal__sign-button"
        >
          Sign in!
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
