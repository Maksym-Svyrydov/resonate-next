import Image from 'next/image';
import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 700px;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  @media screen and (max-width: 767px) {
    height: 100%;
    padding: 40px 0px;
  }
  ${'' /* background-color: rgba(203, 190, 156, 0.15); */}
`;

export const AvatarWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background: #cbbe9c;
  padding: 2px;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    width: 180px;
    height: 180px;
  }
`;

export const Avatar = styled(Image)`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  @media screen and (max-width: 767px) {
    width: 160px;
    height: 160px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  jusify-content: center;
  align-items: center;
  margin: auto;
  padding: 0;
`;
export const Title = styled.p`
  color: #283340;
  text-align: center;
  font-size: 86px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  @media screen and (max-width: 767px) {
    font-size: 46px;
  }
`;
export const SubTitile = styled.p`
  color: rgba(40, 51, 64, 0.8);
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;
