import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import '../ErrorPage/style.css';

const ErrorPage = () => {
  const location = useLocation();
  const shouldRedirect = location.pathname.startsWith('/__clerk_db');

  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
