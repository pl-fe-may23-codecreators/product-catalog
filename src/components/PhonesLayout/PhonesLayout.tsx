import React from 'react';
import './PhonesLayout.scss';
import homeIcon from '../../images/home.svg';
import rightIcon from '../../images/disabled_right_icon.svg';
import { NavLink } from 'react-router-dom';

interface PhonesLayoutProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  productsPerPage: number;
  setProductsPerPage: (value: number) => void;
}

export const PhonesLayout: React.FC<PhonesLayoutProps> = ({
  sortBy,
  setSortBy,
  productsPerPage,
  setProductsPerPage,
}) => {
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
            <select
              className="product__dropdown--trigger sorting"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="price-asc">Price (asc)</option>
              <option value="price-desc">Price (desc)</option>
              <option value="name-asc">Name (a-z)</option>
              <option value="name-desc">Name (z-a)</option>
            </select>
          </div>

          <div className="product__dropdown">
            <span className="product__dropdown--name">Items on page</span>
            <select
              className="product__dropdown--trigger items"
              value={productsPerPage}
              onChange={(e) => setProductsPerPage(parseInt(e.target.value, 10))}
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={16}>16</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
