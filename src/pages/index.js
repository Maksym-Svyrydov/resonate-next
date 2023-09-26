'use client';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRef } from 'react';
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

const Home = () => {
  const mobile = useMediaQuery('(max-width:1239px)');
  const desktop = useMediaQuery('(min-width:1240px)');
  console.log('mobile:', mobile);
  console.log('desktop:', desktop);
  const marketing = useRef(null);
  if (desktop) {
    return (
      <>
        <Header />
        <h1> DesktopPage</h1>
      </>
    );
  }
  if (mobile) {
    return (
      <>
        <Header />
        {/* <Hero /> */}
        {/* <Marketing ref={marketing} /> */}
        {/* <Promo /> */}
        {/* <Branding /> */}
        {/* <Social /> */}
        {/* <Develop /> */}
        {/* <Cases /> */}
        {/* <Proud /> */}
        <Profit />
      </>
    );
  }
};

export default Home;
