import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header';
import { CartProvider } from '../context/CartContext';
import { FavouritesProvider } from '../context/FavouritesContext';

const RootElement = () => {
  return (
    <CartProvider>
      <FavouritesProvider>
        <Header />
        <Outlet />
        <Footer />
      </FavouritesProvider>
    </CartProvider>
  );
};

export default RootElement;