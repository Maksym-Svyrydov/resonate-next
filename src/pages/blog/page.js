'use client';
import Header from '@/components/common/Header';
import { Hero } from '@/components/BlogComponents/Hero';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  WrapperContent,
  ArticlesWrapp,
} from '../../components/BlogComponents/Layuout.styled';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { Contenst } from '@/components/BlogComponents/Contents';
import { Footer } from '@/components/BlogComponents/Footer';
import { Intro } from '@/components/BlogComponents/Intro';
import { CheckList } from '@/components/BlogComponents/LnkdCheckList';
import { StartStrategy } from '@/components/BlogComponents/LnkdnArticle';
import { Owner } from '@/components/BlogComponents/Owner';
import { Profile } from '@/components/BlogComponents/Profiles';
const BlogPage = () => {
  const desktop = useMediaQuery('(min-width:1240px)');
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Header />
      <Hero />
      <WrapperContent>
        {desktop && <ContactForm />}

        <ArticlesWrapp>
          <Intro />
          <Contenst />
          <StartStrategy />
          <CheckList />
          <Profile />
        </ArticlesWrapp>
      </WrapperContent>
      <Owner />
      <Footer />
    </div>
  );
};

export default BlogPage;
