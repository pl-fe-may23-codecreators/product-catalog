import { NavLink } from 'react-router-dom';
import leftIcon from '../../images/left_arrow_icon.svg';
import './backClick.scss';

export const BackClick = () => {
  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <div className="backClickContainer">
      <NavLink to="/phones" onClick={handleBackClick}>
        <img className="navigation__home-icon" src={leftIcon} alt="Home" />
      </NavLink>
      <NavLink
        to="/phones"
        className="backClick__text"
        onClick={handleBackClick}
      >
        <p>Back</p>
      </NavLink>
    </div>
  );
};
