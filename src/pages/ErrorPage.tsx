import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const location = useLocation();
  const shouldRedirect = location.pathname.startsWith('/__clerk_db');

  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }

  return <h1>Oops, something went wrong</h1>;
};

export default ErrorPage;
