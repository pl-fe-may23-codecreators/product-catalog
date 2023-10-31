import { useEffect, useState } from 'react';
import { PhonesList } from '../components/CardList/PhonesList';
import { fetchData } from '../services/dataService';
import { Phone } from '../types/Phone';

const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    fetchData(
      {
        // for pagination
        page: 1,
        limit: 17,
        sortField: 'price', // price or year
        sortOrder: 'asc', // asc or desc
      },
      setPhones,
    );
  }, []);

  return <PhonesList phones={phones} />;
};

export default PhonesPage;
