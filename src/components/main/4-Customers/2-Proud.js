import React from 'react';
import { Section, Text, TextAccent } from './2-Proud.styled';
import { SimpleSlider } from '../../Slider/Slider';
// import MultipleItems from '../Carousel/2-1-Carousel';
const Proud = () => {
  return (
    <Section>
      <Text>
        WE ARE PROUD TO CONTRIBUTE TO <TextAccent>OUR CLIENTS </TextAccent>
        SUCCESS.
      </Text>
      {/* <MultipleItems /> */}
      <SimpleSlider />
    </Section>
  );
};

export default Proud;
