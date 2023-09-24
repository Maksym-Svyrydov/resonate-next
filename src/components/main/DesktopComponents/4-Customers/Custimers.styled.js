import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  background-color: #f5f2f0;
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
  }
  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
  }
`;

export const TitleSection = styled.div`
  width: 40%;
  height: 100%;
  padding: 0px 0px 0px 0px;
`;
export const Wrapper = styled.div`
  display: flex;

  height: 100%;
  @media screen and (min-width: 1365px) {
    width: 453px;
    margin: auto 80px;
  }

  @media screen and (min-width: 1919px) {
    width: 653px;
    margin: auto 100px;
  }
`;
export const Titlle = styled.h2`
  color: #283340;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  margin: auto auto;

  @media screen and (min-width: 1365px) {
    font-size: 58px;
    padding-right: 00px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 72px;
    padding-right: 50px;
  }
`;
export const TitleAccent = styled.span`
  color: #cbbe9c;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-decoration-line: underline;
  text-transform: uppercase;
  @media screen and (min-width: 1365px) {
    font-size: 52px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 72px;
  }
`;
export const LogoSection = styled.div`
  width: 60%;
  height: 100%;
  padding: 120px 75px;
`;

export const LogoList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 1365px) {
    gap: 50px;
  }

  @media screen and (min-width: 1919px) {
    gap: 80px;
  }
`;
export const LogoItem = styled.li`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1365px) {
    width: 160px;
  }

  @media screen and (min-width: 1919px) {
    width: 220px;
  }
`;

export const LogoImg = styled.img`
  @media screen and (min-width: 1365px) {
    width: 160px;
  }

  @media screen and (min-width: 1919px) {
    width: 220px;
  }
`;
export const LogoImgSquare = styled.img`
  @media screen and (min-width: 1365px) {
    width: 100px;
    height: 80px;
  }

  @media screen and (min-width: 1919px) {
    width: 128.169px;
    height: 100px;
  }
`;
export const YourLogo = styled.li`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  color: #cbbe9c;
  text-align: center;
  border: 1px solid #cbbe9c;
  @media screen and (min-width: 1365px) {
    width: 160px;
    height: 60px;
  }

  @media screen and (min-width: 1919px) {
    width: 220px;
    height: 80px;
  }
`;
export const TextLogo = styled.span`
  font-family: Poppins;

  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media screen and (min-width: 1365px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
