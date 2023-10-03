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
} from './Carousel.styled';

import iconArrow from 'public/img/icons/Arrow-Icon.svg';
import Articles from './Articles';
import Result from './Result';

const CarouselResult = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    //  centerMode: true,
    //  fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 1,
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
          <Articles />
        </SliderItem>
        <SliderItem key={2}>
          <Result />
        </SliderItem>
      </SliderBox>
      <ButtonBox>
        <ButtonPreview onClick={goToPreviousSlide}>
          <Arrow
            src={iconArrow}
            alt="button-left"
            style={{ maxWidth: '320px', height: 'auto' }}
          />
        </ButtonPreview>
        <ButtonNext onClick={goToNextSlide}>
          <Arrow
            src={iconArrow}
            alt="button-right"
            style={{ maxWidth: '320px', height: 'auto' }}
          />
        </ButtonNext>
      </ButtonBox>
    </Layout>
  );
};
export default CarouselResult;
