import React, { useEffect, useState } from 'react';
import { Logo } from '../Logo';
import './Header.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { BurgerMenu } from '../BugerMenu';
import { useCart } from '../../context/CartContext';
import { useFavourites } from '../../context/FavouritesContext';
import { SearchBar } from '../SearchBar';
import { Phone } from '../../types/PhoneTypes';
import { fetchData } from '../../services/dataService';

export const Header = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const { cart } = useCart();
  const { favourites } = useFavourites();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(8);
  const [sortBy, setSortBy] = useState('price-asc');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchIconClick = () => {
    setIsSearchActive(!isSearchActive);
    setSearchBarVisible(!searchBarVisible);
  };

  const handleCloseIconClick = () => {
    setIsSearchActive(false);
    setSearchBarVisible(false);
  };

  useEffect(() => {
    async function loadData() {
      const fetchedPhones = await fetchData('/products', {
        page: currentPage,
        limit: phonesPerPage,
        sortField: sortBy.split('-')[0],
        sortOrder: sortBy.split('-')[1],
      });

      if (fetchedPhones) {
        setPhones(fetchedPhones);
      }
    }

    loadData();
  }, [currentPage, phonesPerPage, sortBy]);

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

          {searchBarVisible && <SearchBar data={phones} />}
          {isSearchActive ? (
            <div
              className="Header__icons--icon Header__icons--close_icon"
              onClick={handleCloseIconClick}
            />
          ) : (
            <div
              className="Header__icons--icon Header__icons--search_icon"
              onClick={handleSearchIconClick}
            />
          )}
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
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
