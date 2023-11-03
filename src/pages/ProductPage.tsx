import './ProductPage.scss';
import SubNavigation from '../components/SubNavigation/SubNavigation';
import PhotosBlock from '../components/PhotosBlock/PhotosBlock';
import { examplePhones } from './ExamplePhones';
import { AboutSection } from '../components/PhonesDetails/AboutSection';
import { TechSpecs } from '../components/PhonesDetails/TechSpecs';
import { RecommendedGoods } from '../components/RecommendedGoods/RecommendedGoods';
import { Variants } from '../components/Varaints/Variants';

const ProductPage = () => {
  return (
    <div className="container">
      <SubNavigation />

      <h2 className="product-name">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2>

      <div className="options-container">
        <PhotosBlock />
        <Variants />
      </div>

      <div className="details-container">
        <AboutSection />
        <TechSpecs />
      </div>

      <h2 className="more-phones">You may also like</h2>
      <RecommendedGoods phones={examplePhones} />
    </div>
  );
};

export default ProductPage;
