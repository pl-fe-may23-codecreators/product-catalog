import React, { useState } from 'react';
import { PhoneCard } from '../CardPhone/PhoneCard';

const HomePage = () => {
  const [currentPhoneIndexSection2, setCurrentPhoneIndexSection2] = useState(0);
  const [currentPhoneIndexSection4, setCurrentPhoneIndexSection4] = useState(0);

  const scrollLeftSection2 = () => {
    if (currentPhoneIndexSection2 > 0) {
      setCurrentPhoneIndexSection2(currentPhoneIndexSection2 - 1);
    }
  };

  const scrollRightSection2 = () => {
    if (currentPhoneIndexSection2 < NewPhones.length - 1) {
      setCurrentPhoneIndexSection2(currentPhoneIndexSection2 + 1);
    }
  };

  const scrollLeftSection4 = () => {
    if (currentPhoneIndexSection4 > 0) {
      setCurrentPhoneIndexSection4(currentPhoneIndexSection4 - 1);
    }
  };

  const scrollRightSection4 = () => {
    if (currentPhoneIndexSection4 < HotPhones.length - 1) {
      setCurrentPhoneIndexSection4(currentPhoneIndexSection4 + 1);
    }
  };

  const NewPhones = [
    {
      id: '71',
      category: 'phones',
      phoneId: 'apple-iphone-xr-64gb-yellow',
      itemId: 'apple-iphone-xr-64gb-yellow',
      name: 'Apple iPhone XR 64GB Yellow',
      fullPrice: 712,
      price: 670,
      screen: '6.1" IPS',
      capacity: '64GB',
      color: 'yellow',
      ram: '3GB',
      year: 2018,
      image: 'img/phones/apple-iphone-xr/yellow/00.jpg',
    },
    {
      id: '31',
      category: 'phones',
      phoneId: 'apple-iphone-xs-64gb-gold',
      itemId: 'apple-iphone-xs-64gb-gold',
      name: 'Apple iPhone XS 64GB Gold',
      fullPrice: 760,
      price: 720,
      screen: '5.8" OLED',
      capacity: '64GB',
      color: 'gold',
      ram: '4GB',
      year: 2018,
      image: 'img/phones/apple-iphone-xs/gold/00.jpg',
    },
    {
      id: '44',
      category: 'phones',
      phoneId: 'apple-iphone-11-pro-max-256gb-spacegray',
      itemId: 'apple-iphone-11-pro-max-256gb-spacegray',
      name: 'Apple iPhone 11 Pro Max 256GB Spacegray',
      fullPrice: 1776,
      price: 1680,
      screen: '6.5" OLED',
      capacity: '256GB',
      color: 'spacegray',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11-pro-max/spacegray/00.jpg',
    },
    {
      id: '60',
      category: 'phones',
      phoneId: 'apple-iphone-xr-128gb-yellow',
      itemId: 'apple-iphone-xr-128gb-yellow',
      name: 'Apple iPhone XR 128GB Yellow',
      fullPrice: 880,
      price: 815,
      screen: '6.1" IPS',
      capacity: '128GB',
      color: 'yellow',
      ram: '3GB',
      year: 2018,
      image: 'img/phones/apple-iphone-xr/yellow/00.jpg',
    },
    {
      id: '68',
      category: 'phones',
      phoneId: 'apple-iphone-xs-max-256gb-spacegray',
      itemId: 'apple-iphone-xs-max-256gb-spacegray',
      name: 'Apple iPhone XS Max 256GB Spacegray',
      fullPrice: 1080,
      price: 1000,
      screen: '6.5" OLED',
      capacity: '256GB',
      color: 'spacegray',
      ram: '4GB',
      year: 2018,
      image: 'img/phones/apple-iphone-xs-max/spacegray/00.jpg',
    },
    {
      id: '49',
      category: 'phones',
      phoneId: 'apple-iphone-7-plus-32gb-rosegold',
      itemId: 'apple-iphone-7-plus-32gb-rosegold',
      name: 'Apple iPhone 7 Plus 32GB Rosegold',
      fullPrice: 540,
      price: 500,
      screen: '5.5" IPS',
      capacity: '32GB',
      color: 'rosegold',
      ram: '3GB',
      year: 2016,
      image: 'img/phones/apple-iphone-7-plus/rosegold/00.jpg',
    },
  ];

  const HotPhones = [
    {
      id: '39',
      category: 'phones',
      phoneId: 'apple-iphone-11-256gb-red',
      itemId: 'apple-iphone-11-256gb-red',
      name: 'Apple iPhone 11 256GB Red',
      fullPrice: 1172,
      price: 1115,
      screen: '6.1" IPS',
      capacity: '256GB',
      color: 'red',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11/red/00.jpg',
    },
    {
      id: '56',
      category: 'phones',
      phoneId: 'apple-iphone-11-pro-512gb-midnightgreen',
      itemId: 'apple-iphone-11-pro-512gb-midnightgreen',
      name: 'Apple iPhone 11 Pro 512GB Midnight green',
      fullPrice: 1880,
      price: 1780,
      screen: '5.8" OLED',
      capacity: '512GB',
      color: 'midnightgreen',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11-pro/midnightgreen/00.jpg',
    },
    {
      id: '48',
      category: 'phones',
      phoneId: 'apple-iphone-xs-max-64gb-spacegray',
      itemId: 'apple-iphone-xs-max-64gb-spacegray',
      name: 'Apple iPhone XS Max 64GB Spacegray',
      fullPrice: 960,
      price: 900,
      screen: '6.5" OLED',
      capacity: '64GB',
      color: 'spacegray',
      ram: '4GB',
      year: 2018,
      image: 'img/phones/apple-iphone-xs-max/spacegray/00.jpg',
    },
    {
      id: '26',
      category: 'phones',
      phoneId: 'apple-iphone-11-pro-max-64gb-silver',
      itemId: 'apple-iphone-11-pro-max-64gb-silver',
      name: 'Apple iPhone 11 Pro Max 64GB Silver',
      fullPrice: 1480,
      price: 1400,
      screen: '6.5" OLED',
      capacity: '64GB',
      color: 'silver',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11-pro-max/silver/00.jpg',
    },
    {
      id: '42',
      category: 'phones',
      phoneId: 'apple-iphone-11-pro-512gb-gold',
      itemId: 'apple-iphone-11-pro-512gb-gold',
      name: 'Apple iPhone 11 Pro 512GB Gold',
      fullPrice: 1880,
      price: 1780,
      screen: '5.8" OLED',
      capacity: '512GB',
      color: 'gold',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11-pro/gold/00.jpg',
    },
    {
      id: '51',
      category: 'phones',
      phoneId: 'apple-iphone-11-128gb-green',
      itemId: 'apple-iphone-11-128gb-green',
      name: 'Apple iPhone 11 128GB Green',
      fullPrice: 1100,
      price: 1050,
      screen: '6.1" IPS',
      capacity: '128GB',
      color: 'green',
      ram: '4GB',
      year: 2019,
      image: 'img/phones/apple-iphone-11/green/00.jpg',
    },
  ];

  return (
    <div className="homepage-container">
      <h1 className="section__title section__title--1 mont-extrabold">
        Welcome to Nice Gadgets store!
      </h1>
      <div className="section section-1">
        <div className="section__content">
          <div className="section__album">
            <div className="section__button responsive left"></div>
            <div className="section__image responsive"></div>
            <div className="section__button responsive right"></div>
          </div>
        </div>
      </div>

      <h2 className="section__title section__title--2">
        Brand new models
        <div className="section__title-wrapper">
          <div
            id="leftButton"
            className="section__title-button left"
            onClick={scrollLeftSection2}
          ></div>
          <div
            id="rightButton"
            className="section__title-button right"
            onClick={scrollRightSection2}
          ></div>
        </div>
      </h2>
      <div className="section section-2">
        <div className="section__content">
          <div className="section__models">
            {NewPhones.map((phone, index) => (
              <div
                className={`section__model responsive section__model--${
                  index + 1
                }`}
                key={phone.id}
                style={{
                  transform: `translateX(${
                    -currentPhoneIndexSection2 * 292
                  }px)`,
                }}
              >
                <PhoneCard phone={phone} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="section__title section__title--3">Shop by category</h2>
      <div className="section section-3">
        <div className="section__content">
          <div className="section__categories">
            <div className="section__category-content">
              <div className="section__image2 left responsive"></div>
              <div className="section__text">
                <div className="section__text-line mont-semibold">
                  Mobile phones{' '}
                </div>
                <div className="section__text-line mont-medium">95 models</div>
              </div>
            </div>
            <div className="section__category-content">
              <div className="section__image2 mid responsive"></div>
              <div className="section__text">
                <div className="section__text-line mont-semibold">Tablets</div>
                <div className="section__text-line mont-medium">24 models</div>
              </div>
            </div>
            <div className="section__category-content">
              <div className="section__image2 right responsive"></div>
              <div className="section__text">
                <div className="section__text-line mont-semibold">
                  Accessories
                </div>
                <div className="section__text-line mont-medium">100 models</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="section__title section__title--4">
        <span>Hot prices</span>
        <div className="section__title-wrapper">
          <div
            className="section__title-button left"
            onClick={scrollLeftSection4}
          ></div>
          <div
            className="section__title-button right"
            onClick={scrollRightSection4}
          ></div>
        </div>
      </h2>
      <div className="section section-4">
        <div className="section__content">
          <div className="section__models">
            {HotPhones.map((phone, index) => (
              <div
                className={`section__model responsive section__model--${
                  index + 1
                }`}
                key={phone.id}
                style={{
                  transform: `translateX(${
                    -currentPhoneIndexSection4 * 272
                  }px)`,
                }}
              >
                <PhoneCard phone={phone} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
