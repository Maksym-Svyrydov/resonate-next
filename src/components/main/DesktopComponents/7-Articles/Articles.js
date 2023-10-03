import {
  Section,
  TitleWrapper,
  Layout,
  Title,
  Img,
  ArticleDecsription,
  Wrapper,
  Article,
  TitleArticle,
  ArticleText,
  AuthorArticle,
  Link,
  LinkWhite,
  Arrow,
  ArrowWhite,
  ArticlesLayout,
  WrapperArticles,
} from './Articles.styled';
import linkedinImg from 'public/img/Linkedin_img.png';
import arrow from 'public/img/Arrow_link_right.svg';
import arrowWhite from 'public/img/icons/arrow_white.svg';

const Articles = () => {
  return (
    <Section>
      <Layout>
        <TitleWrapper>
          <Img
            src={linkedinImg}
            alt="LinkedIn"
            style={{ maxWidth: '1320px', height: 'auto' }}
          />
          <Wrapper>
            <TitleArticle>LinkedIn Strategy</TitleArticle>
            <ArticleText>How to Make it Work for Your Brand</ArticleText>
            <AuthorArticle>Social media | Valerii Fedorov</AuthorArticle>
            <ArticleDecsription>
              When LinkedIn was first created, it was basically a resume book on
              the internet. People would connect with others they had worked
              with in the past and share their experiences. The platform..
            </ArticleDecsription>
            <Link href="">
              Discover more{' '}
              <Arrow
                src={arrow}
                alt="arrow"
                style={{ maxWidth: '320px', height: 'auto' }}
              />
            </Link>
            <LinkWhite href="">
              Discover more{' '}
              <ArrowWhite
                src={arrowWhite}
                alt="arrow"
                style={{ maxWidth: '320px', height: 'auto' }}
              />
            </LinkWhite>
          </Wrapper>
        </TitleWrapper>
        <div>
          <Title>ARTICLES</Title>
          <ArticleText>
            Negative SEO: How to Protect Your Website from Sabotage
          </ArticleText>
          <AuthorArticle>Social media | Valerii Fedorov</AuthorArticle>
          <Article>
            Do you want to know how easy it is for your website to be attacked
            with negative SEO? Let us show you. If you Google something like
            “buy negative seo” you’ll be led to results..
          </Article>
          <LinkWhite href="">
            Discover more{' '}
            <ArrowWhite
              src={arrowWhite}
              alt="arrow"
              style={{ maxWidth: '320px', height: 'auto' }}
            />
          </LinkWhite>
        </div>
      </Layout>
      <ArticlesLayout>
        <WrapperArticles>
          <ArticleText>
            Negative SEO: How to Protect Your Website from Sabotage
          </ArticleText>
          <AuthorArticle>Social media | Valerii Fedorov</AuthorArticle>
          <Article>
            Do you want to know how easy it is for your website to be attacked
            with negative SEO? Let us show you. If you Google something like
            “buy negative seo” you’ll be led to results..
          </Article>
          <LinkWhite href="">
            Discover more{' '}
            <ArrowWhite
              src={arrowWhite}
              alt="arrow"
              style={{ maxWidth: '320px', height: 'auto' }}
            />
          </LinkWhite>
        </WrapperArticles>
        <WrapperArticles>
          <ArticleText>
            Negative SEO: How to Protect Your Website from Sabotage
          </ArticleText>
          <AuthorArticle>Social media | Valerii Fedorov</AuthorArticle>
          <Article>
            Do you want to know how easy it is for your website to be attacked
            with negative SEO? Let us show you. If you Google something like
            “buy negative seo” you’ll be led to results..
          </Article>
          <LinkWhite href="">
            Discover more{' '}
            <ArrowWhite
              src={arrowWhite}
              alt="arrow"
              style={{ maxWidth: '320px', height: 'auto' }}
            />
          </LinkWhite>
        </WrapperArticles>
        <WrapperArticles>
          <ArticleText>
            Negative SEO: How to Protect Your Website from Sabotage
          </ArticleText>
          <AuthorArticle>Social media | Valerii Fedorov</AuthorArticle>
          <Article>
            Do you want to know how easy it is for your website to be attacked
            with negative SEO? Let us show you. If you Google something like
            “buy negative seo” you’ll be led to results..
          </Article>
          <LinkWhite href="">
            Discover more{' '}
            <ArrowWhite
              src={arrowWhite}
              alt="arrow"
              style={{ maxWidth: '320px', height: 'auto' }}
            />
          </LinkWhite>
        </WrapperArticles>
      </ArticlesLayout>
    </Section>
  );
};
export default Articles;
