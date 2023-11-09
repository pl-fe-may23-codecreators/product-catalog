import './HomePage.scss';

import { RecommendedGoods } from '../../components/RecommendedGoods/RecommendedGoods';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCateory';
import { Slider } from '../../components/Slider/Slider';
import { SmallSlider } from '../../components/Slider/SmallSlider';
import { fetchData } from '../../services/dataService';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newProducts, setNewProducts] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);

  const { isSignedIn, user } = useUser();

  useEffect(() => {
    setIsLoading(true);

    Promise.all([fetchData('/products/discount'), fetchData('/products/new')])
      .then(([discountData, newData]) => {
        setDiscountedProducts(discountData);
        setNewProducts(newData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="home-page__title">
        Welcome to Nice Gadgets store
        {isSignedIn && user.firstName ? `, ${user.firstName}` : ''}!
      </h2>
      <div className="hide-on-mobile">
        <Slider />
      </div>
      <div className="show-on-mobile">
        <SmallSlider />
      </div>

      <RecommendedGoods
        phones={newProducts}
        title={'Brand new models'}
        isLoading={isLoading}
      />
      <ShopByCategory />
      <RecommendedGoods
        phones={discountedProducts}
        title={'Hot prices'}
        isLoading={isLoading}
      />
    </div>
  );
};

export default HomePage;
