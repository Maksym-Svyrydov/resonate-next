import { Section, Text, TextAccent } from './Reviews.styled';
import { SliderReviews } from './Slider_reviews';
const ReviewsCustomers = () => {
  return (
    <Section id="Reviews">
      <Text>few words from people </Text>
      <TextAccent>we work with.</TextAccent>
      <SliderReviews />
    </Section>
  );
};
export default ReviewsCustomers;
