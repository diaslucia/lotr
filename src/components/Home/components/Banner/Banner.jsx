/* Styles & Images */
import './Banner.scss';
import BannerImg from '../../../../assets/banner.jpg';

const Banner = () => {
  return (
    <img className='banner' src={BannerImg} alt='Lord of the Ring poster' />
  );
};

export default Banner;
