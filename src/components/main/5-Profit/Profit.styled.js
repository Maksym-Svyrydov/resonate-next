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
`;
export const ImgWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
`;
export const Img = styled.img`
  width: 316px;
  height: 233px;
  @media screen and (min-width: 567px) {
    width: 100%;
    height: 100%;
  }
`;
export const TextWrapperTitle = styled.div`
  margin-bottom: 48px;
`;
export const TextTitle = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 48px;
`;
export const TitleCremeColor = styled.h2`
  color: #cbbe9c;
  font-size: 20px;
  margin: 0;
  padding: 0px;
`;
export const TitleWhiteColor = styled.h2`
  color: #f5f2f0;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;
export const Text = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  line-height: 140%;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;
