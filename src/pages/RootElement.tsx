import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header';
import { CartProvider } from '../context/CartContext';
import { FavouritesProvider } from '../context/FavouritesContext';
import { OrdersProvider } from '../context/OrdersContext';

const RootElement = () => {
  return (
    <OrdersProvider>
      <CartProvider>
        <FavouritesProvider>
          <Header />
          <Outlet />
          <Footer />
        </FavouritesProvider>
      </CartProvider>
    </OrdersProvider>
  );
};

export default RootElement;