import { useState, useRef } from 'react';
import Hero from '../../components/MainComponents/1-Hero/Hero';
import Marketing from '../../components/MainComponents/2-Promo/1-Marketing';
import Promo from '../../components/MainComponents/2-Promo/2-Promo';
import Branding from '../../components/MainComponents/2-Promo/3-Branding';
import Social from '../../components/MainComponents/2-Promo/4-Social';
import Develop from '../../components/MainComponents/2-Promo/5-Develop';
import Cases from '../../components/MainComponents/3-Cases/Cases';
import Proud from '../../components/MainComponents/4-Customers/2-Proud';
import Profit from '../../components/MainComponents/5-Profit/Profit';
import Reviews from '../../components/MainComponents/6-Reviews/Reviews';
import Articles from '../../components/MainComponents/7-Articles/Articles';
import Footer from '../../components/MainComponents/8-Footer/Footer';
import Carousel from '../../components/MainComponents/Carousel/Carousel';
import { SliderCases } from '../../components/MainComponents/DesktopComponents/3-Cases/SliderCases';
import Customers from '../../components/MainComponents/DesktopComponents/4-Customers/Customers';
import ProfitFormula from '../../components/MainComponents/DesktopComponents/5-Profit/Profit';
import ReviewsCustomers from '../../components/MainComponents/DesktopComponents/6-Reviews/Reviews';
import CarouselResult from '../../components/MainComponents/DesktopComponents/7-Articles/Carousel';
import FooterDesktop from '../../components/MainComponents/DesktopComponents/8-Footer/DT-Footer';
const Main = () => {
  const [screen, setScreen] = useState();
  useState(() => setScreen(window.innerWidth));
  const marketing = useRef(null);
  // const promo = useRef();
  // const branding = useRef();
  // const social = useRef();
  // const development = useRef();

  console.log(marketing);
  // console.log(window.innerHeight);
  // const screenWidth = window.screen.width;
  // const screenHeight = window.screen.height;
  // console.log('screenWidth:', screenWidth);
  // console.log('screenHeight:', screenHeight);

  if (screen < 1366) {
    return (
      <>
        <Hero />
        <Marketing ref={marketing} />
        <Promo />
        <Branding />
        <Social />
        <Develop />
        <Cases />
        <Proud />
        <Profit />
        <Reviews />
        <Articles />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Hero />
      <Carousel />
      <SliderCases />
      <Customers />
      <ProfitFormula />
      <ReviewsCustomers />
      <CarouselResult />
      <FooterDesktop />
    </>
  );
};
export default Main;
