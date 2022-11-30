/* Styles */
import './CardHome.scss';

/* React Router Dom */
import { useNavigate } from 'react-router-dom';

const CardHome = ({ img, text, link }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(link)} className='cardHome'>
      <img src={img} alt={text} className='cardHome_img' />
      <div className='cardHome_div'>
        <h3 className='cardHome_title'>{text}</h3>
      </div>
    </div>
  );
};

export default CardHome;
