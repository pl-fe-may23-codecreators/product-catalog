import { useEffect, useRef, useState } from 'react';
import { Logo } from '../Logo';
import './Header.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { BurgerMenu } from '../BugerMenu';
import { useCart } from '../../context/CartContext';
import { useFavourites } from '../../context/FavouritesContext';
import { useClerk, useUser } from '@clerk/clerk-react';
import DropdownMenu from '../DropdownMenu/Dropdownmenu';
import userIcon from '../../images/user-regular.svg';

export const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + (item.amount ?? 1), 0);
  const { favourites } = useFavourites();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isSignedIn } = useUser();
  const userIconRef = useRef<HTMLDivElement>(null);

  const clerk = useClerk();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userIconRef.current &&
        !userIconRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
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

          {isSignedIn ? (
            <>
              <div
                onClick={toggleUserMenu}
                ref={userIconRef}
                style={{
                  paddingTop: '15px',
                  paddingRight: '20px',
                  cursor: 'pointer',
                  paddingLeft: '20px',
                }}
              >
                <div
                  style={{
                    width: '18px',
                    height: '18px',
                    backgroundImage: `url(${userIcon})`,
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <DropdownMenu isUserMenuOpen={isUserMenuOpen} />
              </div>
            </>
          ) : (
            <>
              <div
                className="Header__navigation--link"
                style={{
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  paddingTop: '2px',
                  cursor: 'pointer',
                  borderRight: '0.5px solid #e2e6e9',
                }}
                onClick={() => clerk.openSignIn({})}
              >
                Sign in
              </div>
              <div
                className="Header__navigation--link"
                style={{
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  paddingTop: '2px',
                  cursor: 'pointer',
                }}
                onClick={() => clerk.openSignUp({})}
              >
                Sign up
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
