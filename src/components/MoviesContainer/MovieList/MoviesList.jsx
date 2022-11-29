/* Styles */
import './MoviesList.scss';

/* Components */
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <div className='moviesList'>
      {movies.map((item, index) => {
        return <MovieCard key={index} item={item} />;
      })}
    </div>
  );
};

export default MoviesList;
