import classNames from 'classnames';
import { useOrders } from '../../context/OrdersContext';
import './Orders.scss';

export const Orders = () => {
  const { orders, cancelOrder } = useOrders();
  return (
    <div className="Orders">
      {orders.map((order) => (
        <div className="Order" key={order.orderId}>
          <p className="Order__status">
            Status:{' '}
            <span
              className={classNames({
                'Order__status--inprogress': order.status === 'in progress',
                'Order__status--completed': order.status === 'completed',
                'Order__status--canceled': order.status === 'canceled',
              })}
            >
              {order.status}
            </span>
          </p>
          <p className="Order__date">
            Date of order:{' '}
            <span className="Order__date--details">{order.timestamp}</span>
          </p>
          <p className="Order__price">
            Total price:{' '}
            <span className="Order__price--details">${order.totalPrice}</span>
          </p>

          {order.products.map((product) => (
            <div className="Orders__product CartItem" key={product.id}>
              <div className="CartItem__content">
                <img
                  className="CartItem__image"
                  src={`https://codecreators-backend.onrender.com/${[
                    product.image,
                  ]}`}
                  alt="Cart item image"
                />
                <div className="CartItem__name">{product.name}</div>
                <div className="CartItem__price">${product.price}</div>
              </div>
            </div>
          ))}
          {order.status === 'in progress' ? (
            <div className="Orders__container">
              <div className="Order__cancellation--tooltip">
                i
                <span className="Order__cancellation--tooltiptext">
                  You can cancel your order only if its status is IN PROGRESS.
                </span>
              </div>
              <button
                className="Order__cancellation"
                onClick={() => cancelOrder(order)}
              >
                Cancel order
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
