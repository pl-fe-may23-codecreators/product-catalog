import './RecommendedGoods.scss';
import { Phone } from '../../types/Phone';
import { PhoneCard } from '../CardPhone/PhoneCard';

type Props = {
  phones: Phone[];
};

export const RecommendedGoods: React.FC<Props> = ({ phones }) => {
  return (
    <div className="recommended-phones-container">
      <div className="recommended-phones">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};
