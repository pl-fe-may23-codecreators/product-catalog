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
          {imageUrls.map((url) => (
            <img
              key={url}
              src={url}
              className="img-slider-img"
              style={{ translate: `${-100 * currentIndex}%` }}
            />
          ))}
        </div>
      </div>
      <div className="dots">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === currentIndex ? (
              <div className="activePick"></div>
            ) : (
              <div className="inActivePick"></div>
            )}
          </button>
        ))}
      </div>
    </>
  );
}
