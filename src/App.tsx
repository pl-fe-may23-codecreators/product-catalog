import React, { useState } from 'react';
import './App.css';
import { PhonesList } from './Components/CardList/PhonesList';
import phonesFromServer from './api/phones.json';

export const App: React.FC = () => {
  const [phones, setPhones] = useState(phonesFromServer);

  return <PhonesList phones={phones} />;
};
