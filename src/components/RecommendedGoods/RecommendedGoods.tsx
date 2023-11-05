import './RecommendedGoods.scss';
import { Phone } from '../../types/PhoneTypes';
import { PhoneCard } from '../CardPhone/PhoneCard';
import { useRef } from 'react';


type Props = {
  phones: Phone[];
  title: string;
};

export const RecommendedGoods: React.FC<Props> = ({ phones, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const SCROLL_AMOUNT = 270;

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft -= SCROLL_AMOUNT;
    }
  };

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += SCROLL_AMOUNT;
    }
  };
  return (
    <>
      <div className="recommended-goods__header">
        <h2 className="more-phones">{title}</h2>
        <div className="recommended-goods__controls">
          <div className="recommended-goods__control recommended-goods__control--left" onClick={scrollLeft}></div>
          <div className="recommended-goods__control recommended-goods__control--right" onClick={scrollRight}></div>
        </div>
      </div>

      <div className="recommended-goods__container" ref={containerRef}>
        <div className="recommended-goods__phones">
          {phones.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    </>
  );
};
