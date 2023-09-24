import styled from 'styled-components';

// export const Section = styled.section`
//   display: flex;
//   box-sizing: border-box;
//   flex-direction: column;
//   width: 100%;
//   padding-left: 22px;
//   padding-right: 20px;
//   padding-top: 100px;
//   background-color: #283340;
// `;
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  background-color: #283340;
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
    padding: 100px 100px 0px 86px;
  }
  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
    padding: 142px 100px 0px 186px;
  }
`;
export const ImgWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
`;
export const Img = styled.img`
  @media screen and (min-width: 1365px) {
    width: 532.365px;
    height: 369.37px;
  }
  @media screen and (min-width: 1919px) {
    width: 632.365px;
    height: 469.37px;
  }
`;
export const TextWrapperTitle = styled.div`
  width: 60%;
  height: 100%;
`;
export const TextTitle = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 56px;
  padding-right: 50px;
  @media screen and (min-width: 1365px) {
    font-size: 32px;
    line-height: 120%;
    width: 700px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 40px;
    line-height: 150%;
    width: 800px;
  }
`;
export const TextWhiteColor = styled.span`
  color: #f5f2f0;
`;
export const TextCremeColor = styled.span`
  color: #cbbe9c;
`;
export const TextWrapper = styled.div`
  color: rgba(245, 242, 240, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1365px) {
    font-size: 18px;
    padding: 0px 0px 80px 0px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 20px;
    padding: 0px 0px 143px 0px;
  }
`;
export const TitleCremeColor = styled.h2`
  color: #cbbe9c;

  margin: 0;
  padding: 0px;
  @media screen and (min-width: 1365px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 20px;
  }
`;
export const TitleWhiteColor = styled.h2`
  color: #f5f2f0;

  font-weight: 700;
  margin: 0;
  @media screen and (min-width: 1365px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 20px;
  }
`;
export const Text = styled.span`
  display: inline-block;
  margin-bottom: 20px;

  font-style: normal;
  font-weight: 400;
  @media screen and (min-width: 1365px) {
    font-size: 18px;
    line-height: 120%;
  }
  @media screen and (min-width: 1919px) {
    font-size: 20px;
    line-height: 140%;
  }
`;
export const BtnWrapper = styled.div`
  margin-top: auto;
  margin-right: auto;
`;
