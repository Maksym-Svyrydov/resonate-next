import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  background: #283340;
  color: #f5f2f0;
  ${'' /* align-items: center; */}
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  @media screen and (max-width: 1364px) {
    padding-top: 50px;
    padding-left: 0px;
  }
  @media screen and (min-width: 1365px) {
    padding-top: 50px;
  }
  @media screen and (min-width: 1919px) {
    padding-top: 65px;
  }
`;
export const Wrapper = styled.div`
  margin: 0px 0px 0px 20px;

  @media screen and (max-width: 1364px) {
    width: 100%;
    margin: 70px 10px 0px 10px;
  }
  @media screen and (min-width: 1365px) {
    width: 968px;
    margin-right: 70px;
  }
  @media screen and (min-width: 1919px) {
    width: 1156px;
    margin-right: 259px;
  }
`;
export const Title = styled.h2`
  color: #cbbe9c;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 50.4px */
  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    font-size: 24px;
    margin: 20px 0px 10px 0px;
  }
`;
export const SubTitile = styled.h3`
  color: #f5f2f0;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    font-size: 20px;
    margin: 0px 0px 10px 0px;
    padding: 0;
  }
`;
export const Text = styled.p`
  color: rgba(245, 242, 240, 0.8);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin: 0px 0px 10px 0px;
    padding: 0;
  }
`;
