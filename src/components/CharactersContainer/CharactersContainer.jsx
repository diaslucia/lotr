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
    fetch('https://the-one-api.dev/v2/character', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
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
      {characters ? (
        <CharacterList characters={characters} />
      ) : (
        <div className='charactersContainer_spinner'>
          <Spinner />
        </div>
      )}
    </motion.div>
  );
};

export default CharactersContainer;
