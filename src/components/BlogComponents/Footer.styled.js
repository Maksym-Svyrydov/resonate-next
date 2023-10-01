import Image from 'next/image';
import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 651px;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  background-color: #283340;
  padding: 139px 0px;
  @media screen and (max-width: 767px) {
    height: 100%;
    padding: 40px 10px;
  }
`;
export const Title = styled.div`
  color: #f5f2f0;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 86.4px */
  text-transform: uppercase;
  margin: auto;
  @media screen and (max-width: 767px) {
    font-size: 46px;
  }
  @media screen and (min-width: 1365px) {
    font-size: 55px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 72px;
  }
`;
export const TitleAccent = styled.span`
  color: #cbbe9c;
  text-decoration-line: underline;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 65px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    gap: 35px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  width: 280px;
  height: 97px;
  padding: 0;
  @media screen and (max-width: 1364px) {
    width: 200px;
    height: 66px;
  }
  @media screen and (min-width: 1365px) {
    width: 200px;
    height: 66px;
  }
  @media screen and (min-width: 1919px) {
    width: 280px;
    height: 97px;
  }
`;
export const Facebook = styled.a`
  display: flex;
  jusify-content: space-evenly;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  background-color: #3b5998;
  text-decoration: none;
  color: #fff;
  padding-left: 26px;
`;
export const Twit = styled.a`
  display: flex;
  border-radius: 12px;
  background-color: #1ca1f2;
  text-decoration: none;
  color: #fff;
  width: 100%;
  height: 100%;
  jusify-content: center;
  align-items: center;
  padding-left: 32px;
`;
export const Lnkdn = styled.a`
  display: flex;
  jusify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #0077b6;
  text-decoration: none;
  color: #fff;
  width: 100%;
  height: 100%;
  padding-left: 26px;
`;
Image;
export const Img = styled(Image)`
  margin-right: 35px;
  @media screen and (max-width: 1364px) {
    width: 25px;
    margin-right: 17px;
  }
  @media screen and (min-width: 1365px) {
    width: 30px;
    margin-right: 20px;
  }
  @media screen and (min-width: 1919px) {
    width: 35px;
    margin-right: 35px;
  }
`;
export const LinkTxt = styled.span`
  color: #fff;
  font-style: normal;
  font-size: 22px;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: 0.96px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 1364px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1365px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 32px;
  }
`;
