/* React Router Dom */
import { Routes, Route } from 'react-router-dom';

/* Components */
import Main from './layout/Main/Main';
import Home from './components/Home/Home';
import MoviesContainer from './components/MoviesContainer/MoviesContainer';
import CharactersContainer from './components/CharactersContainer/CharactersContainer';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<MoviesContainer />} />
          <Route path='/characters' element={<CharactersContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
