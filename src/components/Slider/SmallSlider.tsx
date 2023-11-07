import img1 from '../../images/img4.png';
import img2 from '../../images/img1.png';
import img3 from '../../images/img2.png';
import img4 from '../../images/img3.png';
import img1resized from '../../images/img4cut.png';
import img2resized from '../../images/img1cut.png';
import img3resized from '../../images/img2cut.png';
import img4resized from '../../images/img3cut.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import './SmallSlider.scss';
import { useEffect, useState } from 'react';

const IMAGES = [img1, img2, img3, img4];
const RESIZED_IMAGES = [img1resized, img2resized, img3resized, img4resized];

export const SmallSlider = () => {
  const [currentImages, setCurrentImages] = useState(IMAGES);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setCurrentImages(RESIZED_IMAGES);
      } else {
        setCurrentImages(IMAGES);
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {currentImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SmallSlider;
