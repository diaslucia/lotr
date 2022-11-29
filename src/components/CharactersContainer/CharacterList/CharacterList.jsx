/* Styles */
import './CharacterList.scss';

/* Components */
import CharacterCard from '../CharacterCard/CharacterCard';
import Pagination from '../../Pagination/Pagination';

/* Hooks */
import { useState } from 'react';

const CharacterList = ({ characters }) => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 12;
  const pagesVisited = page * itemsPerPage;

  const handlePageNumber = data => {
    setPage(data);
  };

  return (
    <div className='characterList'>
      <div className='characterList_list'>
        {characters
          .slice(pagesVisited, pagesVisited + itemsPerPage)
          .map((item, index) => {
            return <CharacterCard key={index} item={item} />;
          })}
      </div>

      <Pagination handlePageNumber={handlePageNumber} />
    </div>
  );
};

export default CharacterList;
