/* Styles */
import './CharactersContainer.scss';

/* Hooks */
import { useEffect, useState } from 'react';

/* Components */
import Spinner from '../Spinner/Spinner';
import CharacterList from './CharacterList/CharacterList';

const CharactersContainer = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  // prettier-ignore
  const fetchData = async () => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
    }
    const rawCharacters = await fetch('https://the-one-api.dev/v2/character?page=1', {
      headers: headers
    })
    const resultCharacters = await rawCharacters.json();
    setCharacters(resultCharacters.docs);
    
  };

  return (
    <div className='charactersContainer'>
      {characters ? <CharacterList characters={characters} /> : <Spinner />}
    </div>
  );
};

export default CharactersContainer;
