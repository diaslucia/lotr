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

  const fetchData = async () => {
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    };
    fetch('https://the-one-api.dev/v2/character', {
      headers: headers,
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        setCharacters(responseJson.docs);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='charactersContainer'>
      {characters ? <CharacterList characters={characters} /> : <Spinner />}
    </div>
  );
};

export default CharactersContainer;
