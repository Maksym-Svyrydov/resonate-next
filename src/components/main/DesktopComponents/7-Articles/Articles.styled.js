import Image from 'next/image';
import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-right: 20px;
  background: #283340;
  color: #f5f2f0;
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
    padding-top: 100px;
    padding-left: 50px;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
    padding: 150px 165px;
  }
`;
export const Layout = styled.div`
  display: flex;
`;
export const TitleWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 1px solid #cbbe9c;
  @media screen and (min-width: 1365px) {
    width: 800px;
    height: 100%;
    padding: 35px 38px 35px 26px;
    margin-right: 98px;
    margin-bottom: 25px;
  }

  @media screen and (min-width: 1919px) {
    width: 1054px;
    height: 453px;
    padding: 75px 68px 75px 36px;
    margin-right: 82px;
    margin-bottom: 39px;
  }
`;
export const Title = styled.h2`
  color: #f5f2f0;
  text-align: left;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0;

  @media screen and (min-width: 1365px) {
    margin: 0px 0px 10px 0px;
    font-size: 48px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 72px;
    margin: 0px 0px 16px 0px;
  }
`;

export const Img = styled(Image)`
  display: block;
  margin-bottom: 13px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1365px) {
    width: 355px;
    height: 252.971px;
    margin: 0px 20px 0px 0px;
  }

  @media screen and (min-width: 1919px) {
    width: 455px;
    height: 302.971px;
  }
`;
export const Wrapper = styled.div`
  padding-left: 7px;
`;
export const TitleArticle = styled.h2`
  color: #cbbe9c;
  font-family: 'DM Sans', sans-serif;

  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
`;

export const ArticleText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0px;
  margin: 0px 0px;
  text-transform: uppercase;

  @media screen and (min-width: 1365px) {
    font-size: 18px;
    width: 360px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 22px;
    width: 422px;
  }
`;
export const AuthorArticle = styled.p`
  color: rgba(245, 242, 240, 0.5);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px 0px 21px 0px;
`;
export const Article = styled.p`
  color: #f5f2f0;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 1365px) {
    font-size: 14px;
    margin-bottom: 38px;
    width: 360px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 18px;
    margin-bottom: 61px;
    width: 422px;
  }
`;
export const ArticleDecsription = styled.p`
  color: #f5f2f0;

  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (min-width: 1365px) {
    font-size: 14px;
    width: 360px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 18px;
    width: 422px;
  }
`;
export const Link = styled.a`
  display: flex;
  color: #cbbe9c;
  font-family: 'Poppins', sans-serif;

  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  @media screen and (min-width: 1365px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 20px;
  }
`;
export const LinkWhite = styled.a`
  display: flex;
  color: #f5f2f0;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  @media screen and (min-width: 1365px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 20px;
  }
`;
export const Arrow = styled(Image)`
  @media screen and (min-width: 1365px) {
    margin-left: 25px;
    width: 37px;
  }

  @media screen and (min-width: 1919px) {
    margin-left: 37px;
    width: 47px;
  }
`;
export const ArrowWhite = styled(Image)`
  @media screen and (min-width: 1365px) {
    margin-left: 25px;
    width: 37px;
  }

  @media screen and (min-width: 1919px) {
    margin-left: 37px;
    width: 47px;
  }
`;

export const ArticlesLayout = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 38px 0px 0px;
`;
export const WrapperArticles = styled.li`
  padding: 0px;
  margin-bottom: 20px;
`;
