/* Styles */
import './CharacterCard.scss';

const CharacterCard = ({ item }) => {
  return (
    <div className='characterCard'>
      <h2 className='characterCard_name'>{item.name}</h2>
      <div>
        <h3 className='characterCard_race'>{item.race}</h3>
        {item?.gender && (
          <p className='characterCard_info'>
            Gender: <span className='characterCard_span'>{item.gender}</span>
          </p>
        )}
        {item?.birth && (
          <p className='characterCard_info'>
            Birth: <span className='characterCard_span'>{item.birth}</span>
          </p>
        )}
        {item?.death && (
          <p className='characterCard_info'>
            Death: <span className='characterCard_span'>{item.death}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
