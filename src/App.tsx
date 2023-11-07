import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhonesPage from './pages/PhonesPage';
import ErrorPage from './pages/ErrorPage';
import RootElement from './pages/RootElement';
import CartPage from './pages/CartPage';
import WorkingOnItPage from './pages/WorkingOnItPage';
import FavouritesPage from './pages/FavouritesPage';
import ProductPage from './pages/ProductPage';

const router = createHashRouter([
  {
    path: '/',
    element: <RootElement />,
    children: [
      { path: '*', element: <ErrorPage /> },
      { path: '/', element: <HomePage /> },
      { path: '/phones', element: <PhonesPage /> },
      {path: '/phones/:phoneId', element: <ProductPage />},
      { path: '/cart', element: <CartPage /> },
      { path: '/tablets', element: <WorkingOnItPage /> },
      { path: '/accessories', element: <WorkingOnItPage /> },
      { path: '/favourites', element: <FavouritesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
