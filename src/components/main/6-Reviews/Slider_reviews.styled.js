import Slider from 'react-slick';
import styled from 'styled-components';

export const ReviewsCustomers = styled(Slider)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 100%;
  @media (min-width: 768px) {
    width: 580px;
  }
  @media screen and (min-width: 1280px) {
    width: 1183px;
  }
`;
export const WrapperReview = styled.div`
  display: flex;
  width: 100%;
  height: 284px;
  list-style: none;
  margin-bottom: 50px;
  padding: 0;
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  justify-content: space-between;
  flex-direction: column;
`;

export const ReviewTextItem = styled.div`
  margin-bottom: 34px;
`;
export const CustomerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 14px;
  margin-top: auto;
`;
export const CustomerAvatar = styled.img`
  border-radius: 41px;
  width: 82px;
  @media screen and (min-width: 667px) {
    margin-left: auto;
  }
`;
export const CustomerNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 12px;
  @media screen and (min-width: 667px) {
    margin-right: auto;
  }
`;
export const CustomerName = styled.span``;
export const CustomerCompany = styled.span`
  color: rgba(40, 51, 64, 0.8);
  font-weight: 400;
`;
export const ButtonBox = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-around;

  @media (min-width: 768px) {
    margin-top: 18px;
    padding-bottom: 100px;
  }

  @media (min-width: 1280px) {
    margin-top: 32px;
    padding-bottom: 118px;
  }
`;
export const ButtonList = styled.ul`
  padding: 0px;
`;
