/* Styles & Images*/
import './Home.scss';
import LogoRound from '../../assets/logo-round.png';

/* Components */
import Banner from './components/Banner/Banner';
import CardHome from './components/CardHome/CardHome';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <img className='home_img rotating' src={LogoRound} alt='Elfic Letters' />
      <div className='home_div'>
        <p className='home_title'>Welcome</p>
        <p className='home_title home_subtitle'>to Middle</p>
        <p className='home_title home_subtitle'>Earth</p>
      </div>
      <CardHome />
    </div>
  );
};

export default Home;
