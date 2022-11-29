/* Styles */
import './Spinner.scss';

/* Components */
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = () => {
  return (
    <div className='spinnerContainer'>
      <ClipLoader
        className='spinner'
        color='#cd9b00'
        size={60}
        aria-label='Loading Spinner'
      />
    </div>
  );
};

export default Spinner;
