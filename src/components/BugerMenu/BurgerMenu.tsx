import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './BurgerMenu.scss';
import { Logo } from '../Logo';

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`Burger ${isOpen ? 'open' : ''}`}>
      <div className="Burger__header">
        <Logo />
        <div
          className="Burger__header--icon Burger__header--close_icon"
          onClick={toggleMenu}
        />
      </div>

      <div className="Burger__navigation">
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

      <div className="Burger__footer">
        <NavLink
          className={({ isActive }) =>
            cn('Burger__footer--icon Burger__footer--heart_icon', {
              'is-active': isActive,
            })
          }
          to="/favourites"
        />
        <NavLink
          className={({ isActive }) =>
            cn('Burger__footer--icon Burger__footer--cart_icon', {
              'is-active': isActive,
            })
          }
          to="/cart"
        />
      </div>
    </div>
  );
};
