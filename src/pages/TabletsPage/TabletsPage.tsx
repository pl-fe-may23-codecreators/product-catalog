import homeIcon from '../../images/home.svg';
import rightIcon from '../../images/disabled_right_icon.svg';
import './TabletsPage.scss';
import { NavLink } from 'react-router-dom';

const TabletsPage = () => {
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

        <NavLink to="/tablets" className="navigation__category--tablets">
          <p>Tablets</p>
        </NavLink>
      </div>
      <h2 className="Cart__title">Tablets</h2>
      <p className="tablets-counter">no items</p>
    </div>
  );
};

export default TabletsPage;
