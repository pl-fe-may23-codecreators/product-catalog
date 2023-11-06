import './HomePage.scss';

import { RecommendedGoods } from '../../components/RecommendedGoods/RecommendedGoods';
import { examplePhones } from '../../phonesFromServer/ExamplePhones';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCateory';
import { Slider } from '../../components/Slider/Slider';
import {SmallSlider} from '../../components/Slider/SmallSlider';

const HomePage = () => {
  return (
    <div className="container">
      <h2 className="home-page__title">Welcome to Nice Gadgets store!!</h2>
      
      <div className="hide-on-mobile">
        <Slider />
      </div>
      <div className="show-on-mobile">
        <SmallSlider />
      </div>

      <RecommendedGoods phones={examplePhones} title={'Brand new models'} />
      <ShopByCategory />
      <RecommendedGoods phones={examplePhones} title={'Hot prices'} />
    </div>
  );
};

export default HomePage;