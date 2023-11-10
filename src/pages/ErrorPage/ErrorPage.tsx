import './ErrorPage.scss';

import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oops, something went wrong</p>
      <Link to="/" className="error-button">
        Go back to home page
      </Link>
    </div>
  );
}

export default ErrorPage;
