import './ProductPage.scss';
import homeIcon from '.././images/home.svg';
import rightIcon from '.././images/disabled_right_icon.svg';
import SubNavigation from '../../components/SubNavigation/SubNavigation';
import PhotosBlock from '../../components/PhotosBlock/PhotosBlock';
import { examplePhones } from '../../phonesFromServer/ExamplePhones';
import { AboutSection } from '../../components/PhonesDetails/AboutSection';
import { TechSpecs } from '../../components/PhonesDetails/TechSpecs';
import { RecommendedGoods } from '../../components/RecommendedGoods/RecommendedGoods';
import { Variants } from '../../components/Varaints/Variants';
import { PhoneForProductPage } from '../../types/PhoneTypes';
import { useEffect, useState } from 'react';
import { fetchData } from '../../services/dataService';
import { NavLink, useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';

const ProductPage = () => {
  const [currentProduct, setCurrentProduct] = useState<PhoneForProductPage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { phoneId } = useParams();

  useEffect(() => {
    fetchData(`/products/${phoneId}`)
      .then((data) => setCurrentProduct(data[0]))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    currentProduct && !isLoading ? (
      <div className="container">
        <SubNavigation name={currentProduct.name} />

        <h2 className="product-name">
          {currentProduct.name}
        </h2>

        <div className="options-container">
          <PhotosBlock photos={currentProduct.images}/>
          <Variants phone={currentProduct}/>
        </div>

        <div className="details-container">
          <AboutSection description={currentProduct.description}/>
          <TechSpecs phone={currentProduct} />
        </div>

        <RecommendedGoods phones={examplePhones} title={'You may also like'} />
      </div>
    ) : isLoading ? (<Loader />) : (
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

          <NavLink to="/phones" className="navigation__category--favourites">
            <p>Phones</p>
          </NavLink>
        </div>
        <h2 className="Cart__title">Product not found</h2>
      </div>
    )
  );
};

export default ProductPage;
