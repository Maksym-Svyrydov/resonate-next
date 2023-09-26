import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import interic from '../../../../public/img/Cases/intericoo_res.png';
import cashyou from '../../../../public/img/Cases/cashyou.png';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  background-color: #283340;
  position: relative;
  z-index: -1;
`;
export const Title = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  color: #f5f2f0;
  text-shadow:: 3px 3px 1px #CBBE9C;
  margin-left:22px;

 
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  justify-content: flex-start;
  padding: 0px;
  list-style: none;
`;
import myImage from '/public/img/bg-zoo.png';
export const ItemZoo = styled.li`
  padding-left: 30px;
  padding-top: 18px;
  position: relative;
  background-color: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 54.17%
  );

  border: 1px solid #cbbe9c;
`;
export const ZooBg = styled(Image)`
l`;
export const ItemInterico = styled.li`
  padding-left: 30px;
  padding-top: 18px;
  position: relative;
  z-index: 1;
  border: 1px solid #cbbe9c;
`;
export const BgWrapp = styled.div`
  overflow: hidden;
  zindex: 0;
  background: linear-gradient(
    90deg,
    rgba(29, 29, 29, 0.6446953781512605) 0%,
    rgba(1, 1, 1, 0.39539565826330536) 16%,
    rgba(0, 0, 0, 1) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const IntericcoBg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
`;
export const ItemCashYou = styled.li`
  padding-left: 30px;
  position: relative;
  z-index: 1;
  padding-top: 18px;
  position: relative;
  border: 1px solid #cbbe9c;
`;
export const CashBg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
`;
export const TextWrapper = styled.div`
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
`;

export const Text = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #f5f2f0;
`;
export const Customer = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  color: #cbbe9c;
  text-decoration: underline;
  margin-bottom: 12px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 2;
  justify-content: flex-end;
  ${'' /* margin-left: 200px; */}
  padding-right: 0px;
  margin-bottom: 12px;
  align-items: center;
`;

export const TextLink = styled.span`
  font-family: 'Poppins', sans-serif;
  display: flex;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #f5f2f0;
  margin-right: 20px;
`;
export const LinkRef = styled(Link)`
  display: flex;
  color: white;
`;
export const Icon = styled.svg`
  flex: none;
  fill: #f5f2f0;
  transition: fill 0.25s;
  width: 88px;
  height: 18px;

  ${
    '' /* ${Link}:hover & {
    fill: #cbbe9c;
  } */
  }
`;
