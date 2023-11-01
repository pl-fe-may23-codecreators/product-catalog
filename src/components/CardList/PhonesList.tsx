import React, { useState } from 'react';
import './PhonesList.scss';
import { Phone } from '../../types/Phone';
import { PhoneCard } from '../CardPhone/PhoneCard';

type Props = {
  phones: Phone[];
};

export const PhonesList: React.FC<Props> = ({ phones }) => {
  return (
    <div className="phones-container">
      <div className="phones">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};
