import './App.css';
import {
  HashRouter,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PhonesPage from './pages/PhonesPage';
import ErrorPage from './pages/ErrorPage';
import CartPage from './pages/CartPage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import ProductPage from './pages/ProductPage/ProductPage';
import TabletsPage from './pages/TabletsPage/TabletsPage';
import AccessoriesPage from './pages/AccessoriesPage/AccessoriesPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CartProvider } from './context/CartContext';
import { FavouritesProvider } from './context/FavouritesContext';
import { ClerkProvider } from '@clerk/clerk-react';
import ProtectedRoute from './components/ProtectedPage';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <CartProvider>
        <FavouritesProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<PhonesPage />} />
            <Route path="/phones/:phoneId" element={<ProductPage />} />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route path="/tablets" element={<TabletsPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route
              path="/favourites"
              element={
                <ProtectedRoute>
                  <FavouritesPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </FavouritesProvider>
      </CartProvider>
    </ClerkProvider>
  );
}

function App() {
  return (
    <HashRouter>
      <ClerkProviderWithRoutes />
    </HashRouter>
  );
}

export default App;
