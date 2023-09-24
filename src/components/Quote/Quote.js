// import quote from '../../img/quote-white.svg';
import quote from '../../../public/img/quote-white.svg';
import { Quote, QuoteImg } from './Quote.styletd';

const Quotes = () => {
  return (
    <Quote>
      <QuoteImg alt="quote" src={quote} />
    </Quote>
  );
};
export default Quotes;
