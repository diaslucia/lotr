/* Styles */
import './CharactersContainer';

/* Hooks */
import { useEffect, useState } from 'react';

/* Components */
import CharacterCard from './CharacterCard/CharacterCard';
import Spinner from '../Spinner/Spinner';

const CharactersContainer = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  // prettier-ignore
  const fetchData = async () => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer zq5K9nI1r0TxI0sgyIpx'
    }
    const rawCharacters = await fetch('https://the-one-api.dev/v2/character?page=1', {
      headers: headers
    })
    const resultCharacters = await rawCharacters.json();
    setCharacters(resultCharacters);
  };

  return (
    <div className='charactersContainer'>
      {characters ? <CharacterCard characters={characters} /> : <Spinner />}
    </div>
  );
};

export default CharactersContainer;
