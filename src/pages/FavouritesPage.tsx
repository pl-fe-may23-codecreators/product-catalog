import homeIcon from '.././images/home.svg';
import rightIcon from '.././images/disabled_right_icon.svg';
import './FavouritesPage.scss';
import { NavLink } from 'react-router-dom';
import { PhonesList } from '../components/CardList/PhonesList';
import { useFavourites } from '../context/FavouritesContext';

const FavouritesPage = () => {
  const { favourites } = useFavourites();

  return (
    <div className="container">
      <div className="navigation">
        <NavLink to="/">
          <img className="navigation__home-icon" src={homeIcon} alt="Home" />
        </NavLink>

        <img
          className="navigation__right-icon"
          src={rightIcon}
          alt="Right icon"
        />

        <NavLink to="/favourites" className="navigation__category--favourites">
          <p>Favourites</p>
        </NavLink>
      </div>
      <h2 className="Cart__title">Favourites</h2>
      <p className="favourites-counter">
        {favourites.length > 1 ? `${favourites.length} items` : favourites.length === 1 ? '1 item' : 'no items'}
      </p>

      <PhonesList phones={favourites} />
    </div>
  );
};

export default FavouritesPage;
