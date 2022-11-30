/* Styles */
import './PopUp.scss';

/* Icons */
import { AiFillCloseCircle } from 'react-icons/ai';

const PopUp = ({ popup, itemDetail, setPopup }) => {
  return (
    <>
      {itemDetail && (
        <div className={popup ? 'popupActive' : 'popupInactive'}>
          <div className='popup_card'>
            <img
              className='popup_img'
              src={`./src/assets/images/${itemDetail?.name}.jpg`}
              alt={itemDetail?.name}
            />
            <div className='popup_div'>
              <h2 className='popup_title'>{itemDetail?.name}</h2>
              <p className='popup_text'>
                Academy Award Nominations: {itemDetail?.academyAwardNominations}
              </p>
              <p className='popup_text'>
                Academy Award Wins: {itemDetail?.academyAwardWins}
              </p>
              <p className='popup_text'>
                Rotten Tomatoes Score: {itemDetail?.rottenTomatoesScore}
              </p>
            </div>
            <AiFillCloseCircle
              className='popup_close'
              onClick={() => setPopup(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
