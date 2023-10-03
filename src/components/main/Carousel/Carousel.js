import { useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  //   WrapperReview,
  Layout,
  SliderBox,
  SliderItem,
  ButtonBox,
  ButtonPreview,
  ButtonNext,
  Arrow,
} from './Carouse.styled';

import iconArrow from 'public/img/icons/arrow-left.svg';
import Marketing from '../DesktopComponents/2-Promo/1-DT-Marketing';
import Promo from '../DesktopComponents/2-Promo/2-DT-Promo';
import Branding from '../DesktopComponents/2-Promo/3-DT-Branding';
import Social from '../DesktopComponents/2-Promo/4-DT-Social';
import Develop from '../DesktopComponents/2-Promo/5-DT-Develop';
const Carousel = () => {
  const sliderRef = useRef(null);
  console.log(sliderRef);
  const settings = {
    dots: false,
    //  centerMode: true,
    //  fade: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const goToPreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };
  return (
    <Layout>
      <SliderBox ref={sliderRef} {...settings}>
        <SliderItem key={1}>
          <Marketing />
        </SliderItem>
        <SliderItem key={2}>
          <Promo />
        </SliderItem>
        <SliderItem key={3}>
          <Branding />
        </SliderItem>
        <SliderItem key={4}>
          <Social />
        </SliderItem>
        <SliderItem key={5}>
          <Develop />
        </SliderItem>
      </SliderBox>
      <ButtonBox>
        <ButtonPreview onClick={goToPreviousSlide}>
          <Arrow src={iconArrow} alt="button-left" />
        </ButtonPreview>
        <ButtonNext onClick={goToNextSlide}>
          <Arrow src={iconArrow} alt="button-right" />
        </ButtonNext>
      </ButtonBox>
    </Layout>
  );
};
export default Carousel;
