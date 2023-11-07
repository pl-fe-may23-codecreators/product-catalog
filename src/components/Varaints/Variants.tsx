import './Variants.scss';
import { useState } from 'react';
import { PhoneForProductPage } from '../../types/PhoneTypes';
import { useCart } from '../../context/CartContext';
import { useFavourites } from '../../context/FavouritesContext';

const colorMap: { [key: string]: string } = {
  'red': 'indianred',
  'yellow': 'gold',
  'green': 'oliveDrab',
  'purple': 'RebeccaPurple'
};

// ^ I added this, because colors like 'red' are too bright, if you want to add another colors, feel free to do it

const transformColor = (color: string): string => {
  return colorMap[color] || color;
};



interface VariantsProps {
  phone: PhoneForProductPage;
}

export const Variants = ({ phone }: VariantsProps) => {
  const [selectedCapacity, setSelectedCapacity] = useState(
    phone.capacityAvailable[0],
  );
  const { cart, addToCart, removeFromCart } = useCart();
  const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    setSelectedColor(transformColor(color));
  };

  const isCartSelected = cart.some((item) => item.itemId === phone.id);
  const isFavouritesSelected = favourites.some(
    (item) => item.itemId === phone.id,
  );

  const cartObject = {
    phoneId: phone.phoneId,
    name: phone.name,
    price: phone.priceRegular,
    image: phone.images[0],
    capacity: phone.capacity,
    itemId: phone.id,
  };

  const handleCartToggle = () => {
    if (isCartSelected) {
      removeFromCart(cartObject);
    } else {
      addToCart(cartObject);
    }
  };

  const handleFavouritesToggle = () => {
    if (isFavouritesSelected) {
      removeFromFavourites(cartObject);
    } else {
      addToFavourites(cartObject);
    }
  };

  return (
    <div className="variants-container">
      <div className="colors">
        <p className="colors__title">Available colors</p>
        <div className="colors__options">
          {phone.colorsAvailable.map((color, index) => (
            <div
              key={index}
              className="colors__circle-border"
              style={{
                borderColor:
                selectedColor === transformColor(color) ? '#313237' : '#E2E6E9'
              }}
              onClick={() => handleColorSelect(color)}
            >
              <div
                className="colors__circle"
                style={{ backgroundColor: transformColor(color) }}
              ></div>
            </div>
          ))}
        </div>
        <p className="capacity__title">Select capacity</p>
        {phone.capacityAvailable.map((capacity, index) => (
          <button
            key={capacity}
            className={`capacity__button capacity__button--${index + 1} ${
              selectedCapacity === capacity ? 'active' : ''
            }`}
            onClick={() => setSelectedCapacity(capacity)}
          >
            {capacity}
          </button>
        ))}

        <div className="card__product-prices">
          <h4 className="card__prices--current">${phone.priceDiscount}</h4>
          <h4 className="card__prices--old">${phone.priceRegular}</h4>
        </div>

        <div className="card__buttons">
          <button
            className={`card__buttons--cart--wide ${
              isCartSelected ? 'selected--cart--wide' : ''
            }`}
            onClick={handleCartToggle}
          >
            {isCartSelected ? 'Added!' : 'Add to cart'}
          </button>
          <button
            className={`card__buttons--heart--wide ${
              isFavouritesSelected ? 'selected--heart--wide' : ''
            }`}
            onClick={handleFavouritesToggle}
          ></button>
        </div>

        <div className="card__details">
          <div className="card__details--screen">
            <p className="detail__title">Screen</p>
            <p className="detail__value">{phone.screen}</p>
          </div>
          <div className="card__details--capacity">
            <p className="detail__title">Resolution</p>
            <p className="detail__value">{phone.resolution}</p>
          </div>
          <div className="card__details--RAM">
            <p className="detail__title">Processor</p>
            <p className="detail__value">{phone.processor}</p>
          </div>
          <div className="card__details--RAM">
            <p className="detail__title">RAM</p>
            <p className="detail__value">{phone.ram}</p>
          </div>
        </div>
      </div>
      <p className="phoneID">ID: 802390</p>
      {/* Here I would add other ID, because the one from phone.id sucks */}
    </div>
  );
};
