'use client';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRef } from 'react';
import Header from '../components/common/Header';
import Hero from '@/components/main/1-Hero/Hero';
import Marketing from '@/components/main/2-Promo/1-Marketing';

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
        <Hero />
        <Marketing ref={marketing} />
      </>
    );
  }
};

export default Home;
