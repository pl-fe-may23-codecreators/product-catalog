import { Logo } from '../Logo';
import './Header.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Header = () => {
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
          <div className="Header__icons--icon Header__icons--menu_icon" />
          <NavLink
            className={({ isActive }) =>
              cn('Header__icons--icon Header__icons--heart_icon', {
                'is-active': isActive,
              })
            }
            to="/favourites"
          />
          <NavLink
            className={({ isActive }) =>
              cn('Header__icons--icon Header__icons--cart_icon', {
                'is-active': isActive,
              })
            }
            to="/cart"
          />
        </div>
      </div>
    </div>
  );
};
