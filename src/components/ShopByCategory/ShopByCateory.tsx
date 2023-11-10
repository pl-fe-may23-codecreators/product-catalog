import phones from '../../images/mobile.webp';
import tablets from '../../images/tablet.webp';
import accessories from '../../images/accessories.webp';
import './ShopByCategory.scss';
import { Link } from 'react-router-dom';

export const ShopByCategory = () => {
  return (
    <>
      <h2 className="shop-by-category_title">Shop by category</h2>
      <div className="shop-by-category__container">
        <div className="shop-by-category__item">
          <Link className='shop-by-category__item--link' to="/phones">
            <div className="image-container">
              <img
                className="shop-by-category__image"
                src={phones}
                alt="Mobile phones"
                loading="lazy"
              />
            </div>
            <h3 className="shop-by-category__sub-title">Mobile phones</h3>
          </Link>
          <p className="shop-by-category__count">95 models</p>
        </div>

        <div className="shop-by-category__item">
          <Link className='shop-by-category__item--link' to="/tablets">
            <div className="image-container">
              <img
                className="shop-by-category__image"
                src={tablets}
                alt="Tablets"
                loading="lazy"
              />
            </div>
            <h3 className="shop-by-category__sub-title">Tablets</h3>
          </Link>
          <p className="shop-by-category__count">24 models</p>
        </div>

        <div className="shop-by-category__item">
          <Link className='shop-by-category__item--link' to="/accessories">
            <div className="image-container">
              <img
                className="shop-by-category__image"
                src={accessories}
                alt="Accessories"
                loading="lazy"
              />
            </div>
            <h3 className="shop-by-category__sub-title">Accessories</h3>
          </Link>
          <p className="shop-by-category__count">100 models</p>
        </div>
      </div>
    </>
  );
};
