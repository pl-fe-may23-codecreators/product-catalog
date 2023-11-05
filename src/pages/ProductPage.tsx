import './ProductPage.scss';
import SubNavigation from '../components/SubNavigation/SubNavigation';
import PhotosBlock from '../components/PhotosBlock/PhotosBlock';
import { examplePhones } from '../phonesFromServer/ExamplePhones';
import { AboutSection } from '../components/PhonesDetails/AboutSection';
import { TechSpecs } from '../components/PhonesDetails/TechSpecs';
import { RecommendedGoods } from '../components/RecommendedGoods/RecommendedGoods';
import { Variants } from '../components/Varaints/Variants';
import { examplePhoneForProductPage } from '../phonesFromServer/ExamplePhoneForProductPage';

const ProductPage = () => {
  return (
    <div className="container">
      <SubNavigation name={examplePhoneForProductPage.name} />

      <h2 className="product-name">
        {examplePhoneForProductPage.name}
      </h2>

      <div className="options-container">
        <PhotosBlock photos={examplePhoneForProductPage.images}/>
        <Variants phone={examplePhoneForProductPage}/>
      </div>

      <div className="details-container">
        <AboutSection description={examplePhoneForProductPage.description}/>
        <TechSpecs phone={examplePhoneForProductPage} />
      </div>

      <RecommendedGoods phones={examplePhones} title={'You may also like'} />
    </div>
  );
};

export default ProductPage;
