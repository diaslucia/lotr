/* Styles */
import './MoviesList.scss';

/* Components */
import MovieCard from '../MovieCard/MovieCard';
import PopUp from '../../PopUp/PopUp';

/* Hooks */
import { useState } from 'react';

const MoviesList = ({ movies }) => {
  const [popup, setPopup] = useState(false);
  const [itemDetail, setItemDetail] = useState();

  const handlePopup = itemSelected => {
    setPopup(true);
    setItemDetail(itemSelected);
  };

  return (
    <>
      <PopUp popup={popup} itemDetail={itemDetail} setPopup={setPopup} />
      <div className='moviesList'>
        {movies.map((item, index) => {
          return (
            <MovieCard handlePopup={handlePopup} key={index} item={item} />
          );
        })}
      </div>
    </>
  );
};

export default MoviesList;
