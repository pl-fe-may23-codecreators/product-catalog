import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PhonesPage from './pages/PhonesPage';
import ErrorPage from './pages/ErrorPage';
import RootElement from './pages/RootElement';
import CartPage from './pages/CartPage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import ProductPage from './pages/ProductPage/ProductPage';
import TabletsPage from './pages/TabletsPage/TabletsPage';
import AccessoriesPage from './pages/AccessoriesPage/AccessoriesPage';

const router = createHashRouter([
  {
    path: '/',
    element: <RootElement />,
    children: [
      { path: '*', element: <ErrorPage /> },
      { path: '/', element: <HomePage /> },
      { path: '/phones', element: <PhonesPage /> },
      {path: '/phones/:productName', element: <ProductPage />},
      { path: '/cart', element: <CartPage /> },
      { path: '/tablets', element: <TabletsPage /> },
      { path: '/accessories', element: <AccessoriesPage /> },
      { path: '/favourites', element: <FavouritesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
