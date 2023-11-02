import { Phone } from '../../types/Phone';
import './PhoneCard.scss';
import { useCart } from '../../context/CartContext';
import { useFavourites } from '../../context/FavouritesContext';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  const isCartSelected = cart.some((item) => item.id === phone.id);
  const isFavouritesSelected = favourites.some((item) => item.id === phone.id);

  const handleCartToggle = () => {
    if (isCartSelected) {
      removeFromCart(phone);
    } else {
      addToCart(phone);
    }
  };

  const handleFavouritesToggle = () => {
    if (isFavouritesSelected) {
      removeFromFavourites(phone);
    } else {
      addToFavourites(phone);
    }
  };

  return (
    <div className="card">
      <div className="card__content">
        <img
          src={`https://codecreators-backend.onrender.com/${[phone.image]}`}
          alt=""
        />
        <h3 className="card__title">{phone.name}</h3>
        <div className="card__prices">
          <h4 className="card__prices--current">${phone.price}</h4>
          <h4 className="card__prices--old">${phone.fullPrice}</h4>
        </div>
        <div className="card__details">
          <div className="card__details--screen">
            <p className="detail__title">Screen</p>
            <p className="detail__value">{phone.screen}</p>
          </div>
          <div className="card__details--capacity">
            <p className="detail__title">Capacity</p>
            <p className="detail__value">{phone.capacity}</p>
          </div>
          <div className="card__details--RAM">
            <p className="detail__title">RAM</p>
            <p className="detail__value">{phone.ram}</p>
          </div>
        </div>
        <div className="card__buttons">
          <button
            className={`card__buttons--cart ${
              isCartSelected ? 'selected--cart' : ''
            }`}
            onClick={handleCartToggle}
          >
            {isCartSelected ? 'Added!' : 'Add to cart'}
          </button>
          <button
            className={`card__buttons--heart ${
              isFavouritesSelected ? 'selected--heart' : ''
            }`}
            onClick={handleFavouritesToggle}
          ></button>
        </div>
      </div>
    </div>
  );
};
