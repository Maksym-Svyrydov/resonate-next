import Image from 'next/image';
import styled from 'styled-components';
export const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding-left: 22px;
  padding-right: 20px;
  padding-top: 100px;
  background: #283340;
  color: #f5f2f0;
`;
export const TitleWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding: 13px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 39px;
  border: 1px solid #cbbe9c;
`;
export const Title = styled.h2`
  color: #f5f2f0;
  text-align: left;
  font-family: 'DM Sans', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0;
  margin: 0px 0px 16px 0px;
`;

export const Img = styled(Image)`
  display: block;
  margin-bottom: 13px;
  margin-left: auto;
  margin-right: auto;
  width: 308px;
`;
export const Wrapper = styled.div`
  padding-left: 7px;
`;
export const TitleArticle = styled.h2`
  color: #cbbe9c;
  font-family: 'DM Sans', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
export const ArticleText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0px;
  margin: 0px 0px;
`;
export const AuthorArticle = styled.p`
  color: rgba(245, 242, 240, 0.5);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Link = styled.a`
  display: block;
  color: #cbbe9c;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  text-decoration: none;
`;
export const Arrow = styled(Image)`
  margin-left: 37px;
`;
export const ArticleLink = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  padding: 0px;
  margin: 0px 0px 5px 0px;
`;
export const ArticlesLayout = styled.div`
  margin-bottom: 40px;
`;
export const WrapperArticles = styled.div`
  padding: 0;
  margin-bottom: 20px;
`;
