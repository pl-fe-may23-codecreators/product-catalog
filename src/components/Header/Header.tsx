import { useState } from 'react';
import { Logo } from '../Logo';
import './Header.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { BurgerMenu } from '../BugerMenu';
import { useCart } from '../../context/CartContext';
import { useFavourites } from '../../context/FavouritesContext';

export const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + (item.amount ?? 1), 0);
  const { favourites } = useFavourites();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Header">
      <div className="Header__content">
        <Logo />
        <div className="Header__navigation">
          <NavLink
            className={({ isActive }) =>
              cn('Header__navigation--link', {
                'is-active': isActive,
              })
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn('Header__navigation--link', {
                'is-active': isActive,
              })
            }
            to="/phones"
          >
            Phones
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn('Header__navigation--link', {
                'is-active': isActive,
              })
            }
            to="/tablets"
          >
            Tablets
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn('Header__navigation--link', {
                'is-active': isActive,
              })
            }
            to="/accessories"
          >
            Accessories
          </NavLink>
        </div>
        <div className="Header__icons">
          <div
            className="Header__icons--icon Header__icons--menu_icon"
            onClick={toggleMenu}
          />
          <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <NavLink
            className={({ isActive }) =>
              cn('Header__icons--icon Header__icons--heart_icon', {
                'is-active': isActive,
              })
            }
            to="/favourites"
          >
            {favourites.length > 0 && (
              <span className="favourites-count">{favourites.length}</span>
            )}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn('Header__icons--icon Header__icons--cart_icon', {
                'is-active': isActive,
              })
            }
            to="/cart"
          >
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
