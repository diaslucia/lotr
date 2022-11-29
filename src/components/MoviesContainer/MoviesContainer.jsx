/* Styles */
import './MoviesContainer';

/* Hooks */
import { useEffect, useState } from 'react';
import MoviesList from './MovieList/MoviesList';

/* Components */
import Spinner from '../Spinner/Spinner';

const MoviesContainer = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    };
    fetch('https://the-one-api.dev/v2/movie', {
      headers: headers,
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        setMovies(responseJson.docs);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='moviesContainer'>
      {movies ? <MoviesList movies={movies} /> : <Spinner />}
    </div>
  );
};

export default MoviesContainer;
