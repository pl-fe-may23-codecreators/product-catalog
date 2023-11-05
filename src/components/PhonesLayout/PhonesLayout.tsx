import './PhonesLayout.scss';
import arrowDown from '../../images/arrow_down_icon.svg';

import homeIcon from '../../images/home.svg';
import rightIcon from '../../images/disabled_right_icon.svg';

import { NavLink } from 'react-router-dom';

export const PhonesLayout = () => {
  return (
    <>
      <div className="section">
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
        </div>

        <h1 className="phones-title">Mobile phones</h1>
        <span className="phones-text">71 models</span>
        <div className="product">
          <div className="product__dropdown">
            <span className="product__dropdown--name">Sort by</span>
            <button className="product__dropdown--trigger sorting">
              <span className="product__dropdown--text">Choose</span>
              <div>
                <img
                  className="product__dropdown--icon"
                  src={arrowDown}
                  alt="arrow-down"
                />
              </div>
            </button>
          </div>

          <div className="product__dropdown">
            <span className="product__dropdown--name">Items on page</span>
            <button className="product__dropdown--trigger items">
              <span className="product__dropdown--text">4</span>
              <div>
                <img
                  className="product__dropdown--icon"
                  src={arrowDown}
                  alt="arrow-down"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
