import homeIcon from '../../images/home.svg';
import rightIcon from '../../images/disabled_right_icon.svg';
import './AccessoriesPage.scss';
import { NavLink } from 'react-router-dom';

const AccessoriesPage = () => {
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

        <NavLink to="/accessories" className="navigation__category--accessories">
          <p>Accessories</p>
        </NavLink>
      </div>
      <h2 className="Cart__title">Accessories</h2>
      <p className="accessories-counter">no items</p>
    </div>
  );
};

export default AccessoriesPage;
