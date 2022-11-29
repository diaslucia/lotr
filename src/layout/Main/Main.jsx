/* React Router Dom */
import { Outlet } from 'react-router-dom';

/* Components */
import Header from '../Header/Header';

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
