import { ImageSlider } from './ImageSlider';
import img1 from '../../images/img4.webp';
import img2 from '../../images/img1.webp';
import img3 from '../../images/img2.webp';
import img4 from '../../images/img3.webp';
import leftIcon from '../../images/left_arrow_icon.svg';
import rightIcon from '../../images/right_arrow_icon.svg';
import { useEffect, useState } from 'react';
import './Slider.scss';

const IMAGES = [img1, img2, img3, img4];

export const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return IMAGES.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === IMAGES.length - 1) return 0;
      return index + 1;
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      showNextImage();
    }, 5000);

    return () => clearTimeout(timer);
  }, [imageIndex]);

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '1200px',
        width: '100%',
        aspectRatio: '5 / 1.7',
        margin: '0 auto',
        marginBottom: '80px',
      }}
    >
      <button className="button-arrow left-button" onClick={showPrevImage}>
        <img src={leftIcon} alt="Left Arrow" style={{height: '16px', width: '16px'}}/>
      </button>

      <ImageSlider
        imageUrls={IMAGES}
        currentIndex={imageIndex}
        setImageIndex={setImageIndex}
      />

      <button className="button-arrow right-button" onClick={showNextImage}>
        <img src={rightIcon} alt="Right Arrow" style={{height: '16px', width: '16px'}}/>
      </button>
    </div>
  );
};
