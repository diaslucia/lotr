/* React Router Dom */
import { Routes, Route, useLocation } from 'react-router-dom';

/* Components */
import Main from './layout/Main/Main';
import Home from './components/Home/Home';
import MoviesContainer from './components/MoviesContainer/MoviesContainer';
import CharactersContainer from './components/CharactersContainer/CharactersContainer';

/* Animations */
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route element={<Main />}>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<MoviesContainer />} />
          <Route path='/characters' element={<CharactersContainer />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
