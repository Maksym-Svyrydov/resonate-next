import Image from 'next/image';
import Slider from 'react-slick';
import styled from 'styled-components';

export const ReviewsCustomers = styled(Slider)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 100%;
  .slick-dots li.slick-active button:before {
    color: #283340;
    width: 21px;
    height: 21px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .slick-dots li button:before {
    line-height: 100%;
    position: absolute;
    border-radius: 50%;
    background-color: #828282;
    font-size: 6px;
    line-height: 20px;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '';
    text-align: center;
    opacity: 0.5;
    color: #828282;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots {
  }
`;

export const WrapperReview = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (min-width: 1365px) {
    max-width: 480px;
    height: 350px;
    margin-bottom: 40px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1919px) {
    max-width: 620px;
    height: 480px;
    margin-bottom: 50px;
  }
`;
export const Quote = styled.div`
  margin-bottom: 10px;
`;

export const QuoteImg = styled(Image)`
  @media screen and (min-width: 1365px) {
    width: 58px;
    height: 58px;
  }

  @media screen and (min-width: 1919px) {
    width: 78px;
    height: 78px;
  }
`;
export const ReviewTextItem = styled.li`
  @media screen and (min-width: 1365px) {
    margin-bottom: 24px;
    font-size: 20px;
    height: 160px;
  }

  @media screen and (min-width: 1919px) {
    margin-bottom: 34px;
    font-size: 24px;
    height: 186px;
  }
`;
export const CustomerWrapper = styled.li`
  display: flex;
  flex-direction: row;
  margin-left: 14px;
  margin-right: auto;
  margin-top: auto;
`;
export const CustomerAvatar = styled(Image)`
  @media screen and (min-width: 1365px) {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 1919px) {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
`;
export const CustomerNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 12px;

  @media screen and (min-width: 1365px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
export const CustomerName = styled.span``;
export const CustomerCompany = styled.span`
  color: rgba(40, 51, 64, 0.8);
  font-weight: 400;
`;
export const ButtonBox = styled.div`
  justify-content: space-around;
  display: flex;

  @media (min-width: 768px) {
    margin-top: 18px;
    padding-bottom: 100px;
  }

  @media (min-width: 1280px) {
    margin-top: 82px auto;
    padding-bottom: 8px;
    width: 100%;
    position: relative;
  }
`;
export const ButtonList = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-around;
  width: 600px;
  margin: 0 auto;
  align-items: center;
`;
