import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #283340;
  color: #f5f2f0;
  ${'' /* align-items: center; */}
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    padding: 100px 10px 0px 10px;
    height: 367px;
  }
  @media screen and (max-width: 1364px) {
    padding: 110px 10px 0px 10px;
  }
  @media screen and (min-width: 1365px) {
    height: 367px;
  }
`;
export const Wrapper = styled.div`
  margin: auto auto;
  align-items: center;
  jusify-content: center;
  padding: 0px 0px;
`;
export const Title = styled.h1`
  color: #cbbe9c;
  font-size: 72px;
  font-weight: 700;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 42px;
  }
`;
export const SubTitile = styled.p`
  color: #f5f2f0;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: 42px;
  }
`;
export const Author = styled.p`
  ${'' /* margin-bottom: 190px; */}
  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;
