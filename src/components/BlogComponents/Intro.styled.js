import Image from 'next/image';
import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  ${'' /* background: #f5f2f0; */}
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  @media screen and (max-width: 767px) {
    padding: 0px 10px 0px 10px;
    flex-wrap: wrap;
    width: 375px;
  }
  @media screen and (min-width: 1365px) {
    width: 768px;
  }
  @media screen and (min-width: 1919px) {
    width: 1034px;
  }
`;
export const AuthorWrap = styled.div`
  display: flex;
  margin-bottom: 51px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 12px;
    margin-bottom: 22px;
  }
`;
export const AvatarWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #cbbe9c;
  padding: 2px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const Avatar = styled(Image)`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;
export const Author = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 23px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`;
export const Name = styled.p`
  padding: 0;
  margin: 0;
  color: #283340;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Date = styled.p`
  padding: 0;
  margin: 0;
  color: rgba(40, 51, 64, 0.8);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 0px 60px 0px;
  padding: 0;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    flex-wrap: wrap;
    width: 100%;
  }
`;
export const Item = styled.li`
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0;
  }
`;
