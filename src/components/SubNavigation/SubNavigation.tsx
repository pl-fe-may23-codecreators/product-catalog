import homeIcon from '../../images/home.svg';
import rightIcon from '../../images/disabled_right_icon.svg';
import './SubNavigation.scss';
import { NavLink } from 'react-router-dom';
import { BackClick } from '../BackClick/backClick';

type SubNavigationProps = {
  name: string;
};

const SubNavigation = ({name}: SubNavigationProps) => {
  return (
    <>
      <div className="navigation">
        <NavLink to="/">
          <img className="navigation__home-icon" src={homeIcon} alt="Home" />
        </NavLink>

        <img
          className="navigation__right-icon"
          src={rightIcon}
          alt="Right icon"
        />

        <NavLink to="/phones" className="navigation__category-link">
          <p>Phones</p>
        </NavLink>

        <img
          className="navigation__right-icon"
          src={rightIcon}
          alt="Right icon"
        />
        <p className="navigation__product-name">
          {name}
        </p>
      </div>
      <BackClick />
    </>
  );
};

export default SubNavigation;
