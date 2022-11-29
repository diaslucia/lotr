/* Components */
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterList = ({ characters }) => {
  return (
    <>
      {characters.map((item, index) => {
        console.log(item);
        <CharacterCard key={index} item={item} />;
      })}
    </>
  );
};

export default CharacterList;
