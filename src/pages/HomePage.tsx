import './HomePage.scss';

import { RecommendedGoods } from '../components/RecommendedGoods/RecommendedGoods';
import { examplePhones } from '../phonesFromServer/ExamplePhones';
import { ShopByCategory } from '../components/ShopByCategory/ShopByCateory';
import { Slider } from '../components/ImageSlider/Slider';

const HomePage = () => {
  return (
    <div className="container">
      <h2 className="home-page__title">Welcome to Nice Gadgets store!!</h2>
      <Slider />
      <RecommendedGoods phones={examplePhones} title={'Brand new models'} />
      <ShopByCategory />
      <RecommendedGoods phones={examplePhones} title={'Hot prices'} />
    </div>
  );
};

export default HomePage;
