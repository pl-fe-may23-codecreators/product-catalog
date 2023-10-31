import React from 'react';
import './PhonesList.scss';
import { Phone } from '../types/Phone';
import { PhoneCard } from '../CardPhone/PhoneCard';

interface Props {
  phones: Phone[];
}

export const PhonesList: React.FC<Props> = ({ phones }) => (
  <div className='phones-container'>
    <div className="phones">
      {phones.map((phone) => (
        <PhoneCard key={phone.id} phone={phone} />
      ))}
    </div>
  </div>
);
