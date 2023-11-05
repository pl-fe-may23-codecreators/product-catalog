import './PhotosBlock.scss';
import { useState } from 'react';

type PhotosBlockProps = {
  photos: string[];
};

const PhotosBlock = ({photos}: PhotosBlockProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const phonePictures = photos.map(photo => `https://codecreators-backend.onrender.com/${photo}`);

  return (
    <>
      <div className="photos-block__container">
        <div className="photos-block__small-photos">
          {phonePictures.map((pic, index) => (
            <div
              key={index}
              className={`photos-block__photo ${index === selectedIndex ? 'selected' : ''}`} 
              style={{ backgroundImage: `url(${pic})` }}
              onClick={() => setSelectedIndex(index)} 
            />
          ))}
        </div>
      </div>
      <img
        className="photos-block__big-photo"
        src={phonePictures[selectedIndex]} 
        alt="Selected product"
      />
    </>
  );
};

export default PhotosBlock;
