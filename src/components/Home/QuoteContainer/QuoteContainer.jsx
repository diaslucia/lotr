/* Styles */
import './QuoteContainer.scss';

/* Hooks */
import { useEffect, useState } from 'react';

/* Components */
import Quote from '../Quote/Quote';
import Spinner from '../../Spinner/Spinner';

const QuoteContainer = () => {
  const [quote, setQuote] = useState();
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    };

    const res = await fetch('https://the-one-api.dev/v2/quote', {
      headers: headers,
    });
    const q = await res.json();
    const quote = q.docs[Math.floor(Math.random() * q.docs.length)];
    setQuote(quote);

    const res2 = await fetch(
      'https://the-one-api.dev/v2/character?_id=' + quote.character,
      {
        headers: headers,
      }
    );
    const c = await res2.json();
    setCharacter(c.docs[0]);
  };

  return (
    <>
      {quote ? (
        <Quote quote={quote} character={character} />
      ) : (
        <div className='quote_spinnerContainer'>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default QuoteContainer;
