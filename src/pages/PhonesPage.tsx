import { useState } from 'react';
import { PhonesList } from '../components/CardList/PhonesList';
import phonesFromServer from '../api/phones.json';

const PhonesPage = () => {
  const [phones, setPhones] = useState(phonesFromServer);
  return (
    <>
      <PhonesList phones={phones} />
    </>
  );
};

export default PhonesPage;
