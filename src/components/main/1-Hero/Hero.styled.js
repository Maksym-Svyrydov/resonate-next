import styled from 'styled-components';

export const Section = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  padding-left: 22px;
  padding-right: 20px;
  background: #283340;
  font-style: normal;
  line-height: normal;
  width: 100%;

  @media screen and (min-width: 1366px) {
    padding-top: 146px;
    padding-left: 78px;
    padding-right: 29px;
    height: 768px;
  }
  @media screen and (min-width: 1919px) {
    padding-top: 246px;
    padding-left: 178px;
    padding-right: 79px;
    height: 1080px;
  }
`;
export const Title = styled.h1`
  color: #f5f2f0;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  text-transform: uppercase;
  margin: 0px 0px 0px 0px;

  @media screen and (min-width: 1366px) {
    font-size: 70px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 100px;
  }
`;
export const TitleAccent = styled.p`
  color: #cbbe9c;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  text-decoration-line: underline;
  text-transform: uppercase;
  margin: 0px 0px 86px 0px;

  @media screen and (min-width: 1366px) {
    font-size: 70px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 100px;
  }
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 96px;
  color: #f5f2f0;

  @media screen and (min-width: 1366px) {
    display: flex;
    gap: 21px;
    margin: auto 0;
    justify-content: space-evenly;
  }
  @media screen and (min-width: 1920px) {
    display: flex;
    gap: 41px;
  }
`;
export const Item = styled.li`
  @media screen and (min-width: 1366px) {
    width: 280px;
    align-items: center;
    jusify-content: center;
  }
  @media screen and (min-width: 1919px) {
    width: 380px;
    align-items: center;
    jusify-content: center;
  }
`;
export const ListTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 6px;
  margin-top: 24px;
  @media screen and (min-width: 1365px) {
    font-size: 22px;
  }
`;
export const ListText = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 0px;

  @media screen and (min-width: 1365px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 18px;
  }
`;
