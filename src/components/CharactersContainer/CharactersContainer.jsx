/* Styles */
import './CharactersContainer.scss';

/* Hooks */
import { useEffect, useState } from 'react';

/* Components */
import Spinner from '../Spinner/Spinner';
import CharacterList from './CharacterList/CharacterList';

/* Animations */
import { motion } from 'framer-motion';

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
    <motion.div
      className='charactersContainer'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {characters ? <CharacterList characters={characters} /> : <Spinner />}
    </motion.div>
  );
};

export default CharactersContainer;
