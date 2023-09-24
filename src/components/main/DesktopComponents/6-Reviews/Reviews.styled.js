import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-right: 20px;
  background: #f5f2f0;
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
    padding-top: 100px;
    padding-left: 50px;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
    padding-top: 148px;
    padding-left: 100px;
  }
`;
export const Text = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: #283340;
  padding: 0px;
  margin: 0px;
  text-transform: uppercase;
  @media screen and (min-width: 1365px) {
    font-size: 52px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 72px;
  }
`;
export const TextAccent = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-decoration: underline;
  color: #cbbe9c;
  text-transform: uppercase;

  @media screen and (min-width: 1365px) {
    font-size: 52px;
    margin: 0px 0px 25px 0px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 72px;
    margin: 0px 0px 55px 0px;
  }
`;
