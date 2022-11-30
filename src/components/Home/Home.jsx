/* Styles & Images*/
import './Home.scss';
import LogoRound from '../../assets/logo-round.png';
import img1 from '../../assets/card1.jpg';
import img2 from '../../assets/card2.jpg';

/* Components */
import Banner from './components/Banner/Banner';
import CardHome from './components/CardHome/CardHome';
import Footer from '../Footer/Footer';

/* Animations */
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='home_bannerContainer'>
        <Banner />
        <img
          className='home_img rotating'
          src={LogoRound}
          alt='Elfic Letters'
        />
        <div className='home_div'>
          <p className='home_title'>Welcome</p>
          <p className='home_title home_subtitle'>to Middle</p>
          <p className='home_title home_subtitle'>Earth</p>
        </div>
      </div>
      <div className='home_cardsContainer'>
        <CardHome img={img1} text='Movies' link='/movies' />
        <CardHome img={img2} text='Characters' link='/characters' />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
