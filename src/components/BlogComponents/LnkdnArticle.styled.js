import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  ${'' /* background-color: rgba(203, 190, 156, 0.15); */}
  @media screen and (max-width: 767px) {
    width: 375px;
    padding: 0px 10px 0px 0px;
  }
  @media screen and (min-width: 1365px) {
    width: 768px;
  }
  @media screen and (min-width: 1919px) {
    width: 1034px;
  }
`;
export const Title = styled.h2`
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 767px) {
    font-size: 24px;
    margin: 0px 0px 10px 0px;
  }
`;
export const Text = styled.p`
  color: rgba(40, 51, 64, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin: 0px 0px 10px 0px;
    padding: 0;
  }
`;
export const SubTitle = styled.h3`
  color: rgba(40, 51, 64, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (max-width: 767px) {
    font-size: 20px;
    margin: 0px 0px 10px 0px;
    padding: 0;
  }
`;
export const TxtAccent = styled.span`
  color: #283340;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
export const TextList = styled.li`
  color: rgba(40, 51, 64, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;
