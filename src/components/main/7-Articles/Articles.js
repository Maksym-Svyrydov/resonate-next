import {
  Section,
  TitleWrapper,
  Title,
  Img,
  Wrapper,
  TitleArticle,
  ArticleText,
  AuthorArticle,
  Link,
  Arrow,
  ArticlesLayout,
  WrapperArticles,
  ArticleLink,
} from './Articles.styled';
import linkedinImg from '../../../../public/img/Linkedin_img.png';
import arrow from '../../../../public/img/Arrow_link_right.svg';
import ButtonMore from '../../Buttons/ButtonMore';
const Articles = () => {
  return (
    <Section>
      <Title>ARTICLES</Title>
      <TitleWrapper>
        <Img src={linkedinImg} alt="LinkedIn" />
        <Wrapper>
          <TitleArticle>LinkedIn Strategy</TitleArticle>
          <ArticleText>How to Make it Work for Your Brand</ArticleText>
          <AuthorArticle>Social media | Valerii Fedorov</AuthorArticle>
          <Link href="">
            Discover more <Arrow src={arrow} alt="arrow" />
          </Link>
        </Wrapper>
      </TitleWrapper>
      <ArticlesLayout>
        <WrapperArticles>
          <ArticleLink>
            Negative SEO: How to Protect Your Website from Sabotage
          </ArticleLink>
          <AuthorArticle>Social media | Valerii Fedorov</AuthorArticle>
          <Link href="">
            Discover more <Arrow src={arrow} alt="arrow" />
          </Link>
        </WrapperArticles>
        <WrapperArticles>
          <ArticleLink>
            Negative SEO: How to Protect Your Website from Sabotage
          </ArticleLink>
          <AuthorArticle>Social media | Valerii Fedorov</AuthorArticle>
          <Link href="">
            Discover more <Arrow src={arrow} alt="arrow" />
          </Link>
        </WrapperArticles>
        <WrapperArticles>
          <ArticleLink>
            Negative SEO: How to Protect Your Website from Sabotage
          </ArticleLink>
          <AuthorArticle>Social media | Valerii Fedorov</AuthorArticle>
          <Link href="">
            Discover more <Arrow src={arrow} alt="arrow" />
          </Link>
        </WrapperArticles>
      </ArticlesLayout>
      <ButtonMore />
    </Section>
  );
};
export default Articles;
