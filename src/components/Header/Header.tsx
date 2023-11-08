import { useState } from 'react';
import { Logo } from '../Logo';
import './Header.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { BurgerMenu } from '../BugerMenu';
import { useCart } from '../../context/CartContext';
import { useFavourites } from '../../context/FavouritesContext';
import {
  SignOutButton,
  useClerk,
  useUser,
} from '@clerk/clerk-react';

export const Header = () => {
  const { cart } = useCart();
  const { favourites } = useFavourites();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  const clerk = useClerk();

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

          {isSignedIn ? (
            <>
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
                {cart.length > 0 && (
                  <span className="cart-count">{cart.length}</span>
                )}
              </NavLink>
              <SignOutButton>
                <div
                  className="Header__navigation--sign-out"
                  style={{ paddingRight: '30px', cursor: 'pointer' }}
                >
                  Sign out
                </div>
              </SignOutButton>
            </>
          ) : (
            <>
              <div
                className="Header__navigation--link"
                style={{ paddingRight: '30px', cursor: 'pointer' }}
                onClick={() => clerk.openSignIn({})}
              >
                Sign in
              </div>
              <div
                className="Header__navigation--link"
                style={{ paddingRight: '30px', cursor: 'pointer' }}
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
