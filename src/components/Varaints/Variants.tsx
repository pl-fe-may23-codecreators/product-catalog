import skinCircle from '../../images/Color - skin.svg';
import greyCircle from '../../images/Color - gray.svg';
import whiteCirlce from '../../images/Color - white.svg';
import greenCircle from '../../images/Color - green.svg';
import './Variants.scss';

export const Variants = () => {
  return (
    <div className="variants-container">
      <div className="colors">
        <p className="colors__title">Available colors</p>
        <div className="colors__options">
          <img className="colors__circle" src={skinCircle} alt="" />
          <img className="colors__circle" src={greyCircle} alt="" />
          <img className="colors__circle" src={greenCircle} alt="" />
          <img className="colors__circle" src={whiteCirlce} alt="" />
        </div>
        <p className="capacity__title">Select capacity</p>
        <button className="capacity__button capacity__button--1">64 GB</button>
        <button className="capacity__button capacity__button--2">256 GB</button>
        <button className="capacity__button capacity__button--3">512 GB</button>

        <div className="card__product-prices">
          <h4 className="card__prices--current">$799</h4>
          <h4 className="card__prices--old">$1199</h4>
        </div>
        <div className="card__buttons">
          <button className="card__buttons--cart--wide">Add to cart</button>
          <button className="card__buttons--heart"></button>
        </div>

        <div className="card__details">
          <div className="card__details--screen">
            <p className="detail__title">Screen</p>
            <p className="detail__value">6.5” OLED</p>
          </div>
          <div className="card__details--capacity">
            <p className="detail__title">Resolution</p>
            <p className="detail__value">2688x1242</p>
          </div>
          <div className="card__details--RAM">
            <p className="detail__title">Processor</p>
            <p className="detail__value">Apple A12 Bionic</p>
          </div>
          <div className="card__details--RAM">
            <p className="detail__title">RAM</p>
            <p className="detail__value">3 GB</p>
          </div>
        </div>
      </div>

      <p className="phoneID">ID: 802390</p>
    </div>
  );
};
