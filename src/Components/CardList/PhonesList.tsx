import React from 'react';
import './PhonesList.scss';
import { Phone } from '../../types/Phone';
import { PhoneCard } from '../Card-layout/PhoneCard';

interface Props {
  phones: Phone[];
}

export const PhonesList: React.FC<Props> = ({ phones }) => (
  <div className="phones">
    {phones.map((phone) => (
      <PhoneCard key={phone.id} phone={phone} />
    ))}
  </div>
);
