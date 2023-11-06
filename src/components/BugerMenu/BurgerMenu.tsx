import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './BurgerMenu.scss';
import { Logo } from '../Logo';
import { useCart } from '../../context/CartContext';
import { useFavourites } from '../../context/FavouritesContext';

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  const { cart } = useCart();
  const { favourites } = useFavourites();
  const closeMenu = () => {
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <div className={`Burger ${isOpen ? 'open' : ''}`}>
      <div className="Burger__header">
        <Logo />
        <div
          className="Burger__header--icon Burger__header--close_icon"
          onClick={toggleMenu}
        />
      </div>

      <div className="Burger__navigation" onClick={closeMenu}>
        <NavLink
          className={({ isActive }) =>
            cn('Burger__navigation--link', {
              'is-active': isActive,
            })
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn('Burger__navigation--link', {
              'is-active': isActive,
            })
          }
          to="/phones"
        >
          Phones
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn('Burger__navigation--link', {
              'is-active': isActive,
            })
          }
          to="/tablets"
        >
          Tablets
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn('Burger__navigation--link', {
              'is-active': isActive,
            })
          }
          to="/accessories"
        >
          Accessories
        </NavLink>
      </div>

      <div className="Burger__footer" onClick={closeMenu}>
        <NavLink
          className={({ isActive }) =>
            cn('Burger__footer--icon Burger__footer--heart_icon', {
              'is-active': isActive,
            })
          }
          to="/favourites"
        >
          {favourites.length > 0 && (
            <span className="Burger__footer--favourites-count">
              {favourites.length}
            </span>
          )}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn('Burger__footer--icon Burger__footer--cart_icon', {
              'is-active': isActive,
            })
          }
          to="/cart"
        >
          {cart.length > 0 && (
            <span className="Burger__footer--cart-count">{cart.length}</span>
          )}
        </NavLink>
      </div>
    </div>
  );
};
