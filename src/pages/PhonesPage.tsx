import { useEffect, useState } from 'react';
import { PhonesList } from '../components/CardList/PhonesList';
import { fetchData } from '../services/dataService';
import { Phone } from '../types/Phone';

const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    async function loadData() {
      const fetchedPhones = await fetchData({
        page: 2,
        limit: 12,
        sortField: 'price', // price or year
        sortOrder: 'asc', // asc or desc
      });

      if (fetchedPhones) {
        setPhones(fetchedPhones);
      }
    }

    loadData();
  }, []);

  return <PhonesList phones={phones} />;
};

export default PhonesPage;
