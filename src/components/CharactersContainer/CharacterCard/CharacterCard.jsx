/* Styles */
import './CharacterCard.scss';

const CharacterCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h2>{item.name}</h2>
    </div>
  );
};

export default CharacterCard;
