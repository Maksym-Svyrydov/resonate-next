import Header from '@/components/common/Header';
import Hero from '@/components/main/1-Hero/Hero';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Layout,
  Wrapper,
  WrapperContent,
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
  const mobile = useMediaQuery('(max-width:1239px)');
  const desktop = useMediaQuery('(min-width:1240px)');
  return (
    <>
      <Header />
      <Hero />
      <Layout>
        {/* {desktop && (
          <Wrapper>
            <ContactForm />
          </Wrapper>
        )} */}

        <WrapperContent>
          <Intro />
          <Contenst />
          <StartStrategy />
          <CheckList />
          <Profile />
        </WrapperContent>
        <Owner />
        <Footer />
      </Layout>
    </>
  );
};

export default BlogPage;
