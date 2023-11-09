import React from 'react';
import './PhonesLayout.scss';
import homeIcon from '../../images/home.svg';
import rightIcon from '../../images/disabled_right_icon.svg';
import { NavLink, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { SearchLink } from '../SearchLink';

interface PhonesLayoutProps {
  productsPerPage: number;
  setProductsPerPage: (value: number) => void;
}

export const PhonesLayout: React.FC<PhonesLayoutProps> = ({
  productsPerPage,
  setProductsPerPage,
}) => {
  const [searchParams] = useSearchParams();
  const sortField = searchParams.get('sort');
  const sortOrder = searchParams.get('order');

  const handleSortFilter = (param: string) => {
    if (sortField === null && sortOrder === null) {
      return param;
    }

    if (sortField === param && sortOrder === 'asc') {
      return param;
    }

    return null;
  };

  const handleOrderFilter = (param: string) => {
    if (sortField === null && sortOrder === null) {
      return 'asc';
    }

    if (sortField === param && sortOrder === 'asc') {
      return 'desc';
    }

    return null;
  };
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
            <div className="product__sortFields">
              <SearchLink
                params={{
                  sort: handleSortFilter('year'),
                  order: handleOrderFilter('year'),
                }}
                className="product__sortField"
              >
                Year
                <span className="product__sortField--icon">
                  <i
                    className={classNames('fas', {
                      'fa-sort-up':
                        sortOrder === 'desc' && sortField === 'year',
                      'fa-sort':
                        (sortOrder === null && sortField === null) ||
                        sortField === 'price',
                      'fa-sort-down':
                        sortOrder === 'asc' && sortField === 'year',
                    })}
                  />
                </span>
              </SearchLink>
              <SearchLink
                params={{
                  sort: handleSortFilter('price'),
                  order: handleOrderFilter('price'),
                }}
                className="product__sortField"
              >
                Price
                <span className="product__sortField--icon">
                  <i
                    className={classNames('fas', {
                      'fa-sort-up':
                        sortOrder === 'desc' && sortField === 'price',
                      'fa-sort':
                        (sortOrder === null && sortField === null) ||
                        sortField === 'year',
                      'fa-sort-down':
                        sortOrder === 'asc' && sortField === 'price',
                    })}
                  />
                </span>
              </SearchLink>
            </div>
          </div>

          <div className="product__dropdown">
            <span className="product__dropdown--name">Items on page</span>
            <div className="product__dropdown--trigger items">
              <button
                className={classNames('items__item', {
                  'items__item--active': productsPerPage === 4,
                })}
                onClick={() => setProductsPerPage(4)}
              >
                4
              </button>
              <button
                className={classNames('items__item', {
                  'items__item--active': productsPerPage === 8,
                })}
                onClick={() => setProductsPerPage(8)}
              >
                8
              </button>
              <button
                className={classNames('items__item', {
                  'items__item--active': productsPerPage === 16,
                })}
                onClick={() => setProductsPerPage(16)}
              >
                16
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
