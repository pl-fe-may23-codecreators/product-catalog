import './PhotosBlock.scss';
import cameraPicture from '../../images/telefon-front.png';

const PhotosBlock = () => {
  return (
    <div className='photos-container'>
      <div className="small-photos-container">
        <div className="telephone-picture" />
        <div className="telephone-picture" />
        <div className="telephone-picture" />
        <div className="telephone-picture" />
        <div className="telephone-picture" />
      </div>
      <img
        style={{ height: '442px', width: '442px' }}
        src={cameraPicture}
        alt=""
      />
    </div>
  );
};

export default PhotosBlock;
