/* Styles & Images*/
import './NavBar.scss';
import Logo from '../../assets/images/logo.png';

/* React Router Dom */
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navBar'>
      <ul className='navBar_list'>
        <Link to='/'>
          <li>
            <img
              className='navBar_img'
              src={Logo}
              alt='Lord of the rings logo'
            />
          </li>
        </Link>
        <Link to='/movies'>
          <li>Movies</li>
        </Link>
        <Link to='/characters'>
          <li>Characters</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
