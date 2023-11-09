import homeIcon from '../../images/home.svg';
import rightIcon from '../../images/disabled_right_icon.svg';
import { NavLink } from 'react-router-dom';
import { useOrders } from '../../context/OrdersContext';
import { Orders } from '../../components/Orders';

const OrdersPage = () => {
  const { orders } = useOrders();

  return (
    <div className="container">
      <div className="navigation">
        <NavLink to="/">
          <img className="navigation__home-icon" src={homeIcon} alt="Home" />
        </NavLink>

        <img
          className="navigation__right-icon"
          src={rightIcon}
          alt="Right icon"
        />

        <NavLink to="/orders" className="navigation__category--favourites">
          <p>Orders</p>
        </NavLink>
      </div>
      <h2 className="Cart__title">Orders</h2>
      <p className="favourites-counter">
        {orders.length > 1
          ? `${orders.length} orders`
          : orders.length === 1
          ? '1 order'
          : 'There is no order yet.'}
      </p>

      {orders.length > 0 ? <Orders /> : null}
    </div>
  );
};

export default OrdersPage;
