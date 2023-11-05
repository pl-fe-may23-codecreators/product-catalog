import './PhonesList.scss';
import { Phone } from '../../types/PhoneTypes';
import { PhoneCard } from '../CardPhone/PhoneCard';
import { PhonesLayout } from '../PhonesLayout';

type Props = {
  phones: Phone[];
};

export const PhonesList: React.FC<Props> = ({ phones }) => {
  return (
    <>
      <PhonesLayout />
      <div className="phones-container">
        <div className="phones">
          {phones.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    </>
  );
};
