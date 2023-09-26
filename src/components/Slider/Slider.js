import { useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  Wrapper,
  LogoCustomers,
  LogoItem,
  LogoImg,
  ButtonBox,
  ButtonPreview,
  ButtonNext,
} from './Slider.styled';

import logoZoo from 'public/img/kharkivzoo_logo.svg';
import logoMarloo from 'public/img/Customers/marludesign.svg';
import avangard from 'public/img/Customers/Avangard.svg';
import prime from 'public/img/Customers/BluePrime.svg';
import gleam from 'public/img/Customers/Gleam.svg';
import nika from 'public/img/Customers/Nika.svg';
import spribe from 'public/img/Customers/SPRIBE.svg';
import vikno from 'public/img/Customers/Vikno.svg';
import cashyou from 'public/img/Customers/cashyou.svg';
import intericc from 'public/img/Customers/intericco.svg';
import orion from 'public/img/Customers/orioncity.svg';
import startup from 'public/img/Customers/startupinc.svg';
import step from 'public/img/Customers/stepINVEST_logo_1 2.svg';
import uuutoo from 'public/img/Customers/uuutoo.svg';
// import iconButton from 'public/img/icons/icon-left-61x61.svg';
import iconArrow from 'public/img/icons/arrow-left.svg';
import Image from 'next/image';

export const SimpleSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    lazyLoad: true,
    // fade: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
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
    <Wrapper>
      <LogoCustomers ref={sliderRef} {...settings}>
        <LogoItem key={1}>
          <LogoImg width={60} src={logoZoo} alt="logo" style={{}} />
        </LogoItem>
        <LogoItem key={2}>
          <LogoImg src={logoMarloo} alt="logo" />
        </LogoItem>

        <LogoItem key={3}>
          <LogoImg src={avangard} alt="logo" />
        </LogoItem>

        <LogoItem key={4}>
          <LogoImg src={prime} alt="logo" />
        </LogoItem>
        <LogoItem key={5}>
          <LogoImg src={gleam} alt="logo" />
        </LogoItem>
        <LogoItem key={6}>
          <LogoImg src={nika} alt="logo" />
        </LogoItem>
        <LogoItem key={7}>
          <LogoImg src={spribe} alt="logo" />
        </LogoItem>
        <LogoItem key={8}>
          <LogoImg src={vikno} alt="logo" />
        </LogoItem>
        <LogoItem key={9}>
          <LogoImg src={cashyou} alt="logo" />
        </LogoItem>
        <LogoItem key={10}>
          <LogoImg src={intericc} alt="logo" />
        </LogoItem>
        <LogoItem key={11}>
          <LogoImg src={orion} alt="logo" />
        </LogoItem>
        <LogoItem key={12}>
          <LogoImg src={startup} alt="logo" />
        </LogoItem>
        <LogoItem key={13}>
          <LogoImg src={step} alt="logo" />
        </LogoItem>
        <LogoItem key={14}>
          <LogoImg src={uuutoo} alt="logo" />
        </LogoItem>
      </LogoCustomers>
      <ButtonBox>
        <ButtonPreview onClick={goToPreviousSlide}>
          <Image src={iconArrow} alt="button-left" width={68} height={19} />
        </ButtonPreview>
        <ButtonNext onClick={goToNextSlide}>
          <Image src={iconArrow} alt="button-right" width={68} height={19} />
        </ButtonNext>
      </ButtonBox>
    </Wrapper>
  );
};
