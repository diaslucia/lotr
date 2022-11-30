/* Styles */
import './MovieCard.scss';

const MovieCard = ({ item, handlePopup }) => {
  return (
    <div className='movieCard' onClick={() => handlePopup(item)}>
      <img
        className='movieCard_img'
        src={`./src/assets/images/${item.name}.jpg`}
        alt={item.name}
      />
      <h2 className='movieCard_title'>{item.name}</h2>
    </div>
  );
};

export default MovieCard;
