import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  @media screen and (max-width: 767px) {
    width: 375px;
    padding: 0px;
  }
  @media screen and (min-width: 1365px) {
    width: 768px;
  }
  @media screen and (min-width: 1919px) {
    width: 1034px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 709px;
  padding: 21px 0px 0px 47px;
  margin-right: auto;
  background-color: rgba(203, 190, 156, 0.15);
  @media screen and (max-width: 767px) {
    padding: 5px 10px;
  }
`;
export const Title = styled.h3`
  color: #000;
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px 0px 13px 0px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
export const TitleAccent = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-size: 20px;
  font-weight: 400;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
export const ListTitle = styled.p`
  color: rgba(40, 51, 64, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  text-decoration-line: underline;
  margin: 0;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 100%;
  }
`;
export const List = styled.ul`
  color: rgba(40, 51, 64, 0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  text-decoration-line: underline;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 24px 0px;
  padding: 0;
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 100%;
  }
`;

export const Item = styled.li`
  padding-left: 20px;
`;
