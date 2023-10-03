import Image from 'next/image';
import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding-right: 20px;
  background: #283340;
  color: #f5f2f0;
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
    padding-top: 100px;
    padding-left: 50px;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
    padding: 224px 258px 241px 375px;
  }
`;
export const Title = styled.h2`
  color: #f5f2f0;
  font-family: DM Sans;

  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 1365px) {
    font-size: 52px;
    margin: 0px 0px 33px 0px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 72px;
    margin: 0px 0px 113px 0px;
  }
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;

  padding: 0;
  @media screen and (min-width: 1365px) {
    gap: 28px;
  }

  @media screen and (min-width: 1919px) {
    gap: 42px;
  }
`;
export const Item = styled.li`
  width: 400.327px;
  height: 406px;
  border: 2px solid #cbbe9c;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #f5f2f0;
  color: #283340;
`;
export const ImgWrapp = styled.div`
  margin: 0px;
`;
export const ImgBaner = styled(Image)`
  width: 398.471px;
  height: 202px;
`;
export const ImgLogo = styled(Image)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 155px;
  height: 32.284px;
`;
export const Customer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 21px 0px 31px 22px;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Name = styled.li`
  text-align: center;
  font-family: DM Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  text-decoration-line: underline;
  margin: 0px 0px 0px 0px;
`;
export const Type = styled.li`
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 16.8px */
  margin: 0px 0px 8px 0px;
`;
export const Percentage = styled.li`
  font-family: DM Sans;
  font-size: 68px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 0px 0px 0px 0px;
  padding: 0;
  width: 110.841px;
`;
export const DescriptionResult = styled.li`
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px 0px 0px 0px;
`;
