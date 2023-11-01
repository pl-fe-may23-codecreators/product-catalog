import { Cart } from '../components/Cart/Cart';
import { useCart } from '../context/CartContext';
import emptyCart from '../images/empty_cart.png';

const CartPage = () => {
  const { cart } = useCart();
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {cart.length === 0 ? <img src={emptyCart} alt="empty cart" /> : <Cart />}
    </div>
  );
};

export default CartPage;
