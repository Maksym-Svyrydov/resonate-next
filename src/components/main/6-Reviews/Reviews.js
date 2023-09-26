import { Section, Text, TextAccent, Quote, QuoteImg } from './Reviews.styled';
import quote from '../../../../public/img/quote.svg';
import { SliderReviews } from './Slider_reviews';
const Reviews = () => {
  return (
    <Section>
      <Text>
        WE ARE PROUD TO CONTRIBUTE TO <TextAccent>OUR CLIENTS</TextAccent>
        SUCCESS.
      </Text>
      <Quote>
        <QuoteImg src={quote} alt="quote" />
      </Quote>
      <SliderReviews />
    </Section>
  );
};
export default Reviews;
