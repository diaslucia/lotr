/* Styles */
import './Quote.scss';

const Quote = ({ quote, character }) => {
  return (
    <>
      {quote && (
        <div className='quote'>
          <h3 className='quote_quote'>{quote.dialog}</h3>
          {character && <p className='quote_name'>- {character.name}</p>}
        </div>
      )}
    </>
  );
};

export default Quote;
