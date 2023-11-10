import './ImageSlider.scss';

type ImageSliderProps = {
  imageUrls: string[];
  currentIndex: number;
  setImageIndex: (index: number) => void;
};

export function ImageSlider({
  imageUrls,
  currentIndex,
  setImageIndex,
}: ImageSliderProps) {
  return (
    <>
      <div className="biggest-div">
        <div className="smaller-div">
          {imageUrls.map((url, index) => (
            <img
              key={url}
              src={url}
              alt={`image ${index}`}
              className="img-slider-img"
              style={{ translate: `${-100 * currentIndex}%` }}
              loading={index === 0 ? 'eager' : 'lazy'} 
            />
          ))}
        </div>
      </div>
      <div className="dots">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className={`img-slider-dot-btn ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setImageIndex(index)}
            aria-label={`Slide ${index + 1}`} 
          >
            <div className={index === currentIndex ? 'activePick' : 'inActivePick'}></div>
          </button>
        ))}
      </div>
    </>
  );
}