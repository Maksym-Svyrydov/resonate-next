import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  SliderContainer,
  Wrapper,
  ButtonBox,
  Frame,
  ButtonList,
} from './SliderCases.styled';
// import css from './Btn.module.css';
import Zoo from './1-DT-CasesZoo';
import Intericco from './2-DT-Interico';
import CashYou from './3-DT-CashYou';
export const SliderCases = () => {
  const appendDots = (dots) => (
    <ButtonBox>
      <Frame />
      <ButtonList>{dots}</ButtonList>
    </ButtonBox>
  );

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    appendDots: appendDots,
  };
  return (
    <SliderContainer {...settings}>
      <Wrapper key={1}>
        <Zoo />
      </Wrapper>
      <Wrapper key={2}>
        <Intericco />
      </Wrapper>
      <Wrapper key={3}>
        <CashYou />
      </Wrapper>
    </SliderContainer>
  );
};
