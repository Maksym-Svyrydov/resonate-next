import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../components/common/Header';
import Hero from '@/components/main/1-Hero/Hero';
import Marketing from '@/components/main/2-Promo/1-Marketing';
import Promo from '@/components/main/2-Promo/2-Promo';
import Branding from '@/components/main/2-Promo/3-Branding';
import Social from '@/components/main/2-Promo/4-Social';
import Develop from '@/components/main/2-Promo/5-Develop';
import Cases from '@/components/main/3-Cases/Cases';
import Proud from '@/components/main/4-Customers/2-Proud';
import Profit from '@/components/main/5-Profit/Profit';
import Reviews from '@/components/main/6-Reviews/Reviews';
import Articles from '@/components/main/7-Articles/Articles';
import Footer from '@/components/main/8-Footer/Footer';
import Carousel from '@/components/main/Carousel/Carousel';
import { SliderCases } from '@/components/main/DesktopComponents/3-Cases/SliderCases';
import Customers from '../components/main/DesktopComponents/4-Customers/Customers';
import ProfitFormula from '@/components/main/DesktopComponents/5-Profit/Profit';
import ReviewsCustomers from '@/components/main/DesktopComponents/6-Reviews/Reviews';
import CarouselResult from '@/components/main/DesktopComponents/7-Articles/Carousel';
import FooterDesktop from '@/components/main/DesktopComponents/8-Footer/DT-Footer';
const Home = () => {
  const mobile = useMediaQuery('(max-width:1239px)');
  const desktop = useMediaQuery('(min-width:1240px)');
  console.log('mobile:', mobile);
  console.log('desktop:', desktop);

  if (desktop) {
    return (
      <>
        <Header />
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
  }
  if (mobile) {
    return (
      <div
        style={
          {
            // position: 'relative',
            // zIndex: '-5',
          }
        }
      >
        <Header />
        <Hero />
        <Marketing />
        <Promo />
        <Branding />
        <Social />
        <Develop />
        <Cases />
        <Proud />
        <Profit />
        <Reviews />
        <Articles />
        <Footer mobile={mobile} desktop={desktop} />
      </div>
    );
  }
};

export default Home;
