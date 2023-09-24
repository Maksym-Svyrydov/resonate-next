import Slider from 'react-slick';
import styled from 'styled-components';
import Image from 'next/image';
export const LogoItem = styled.div`
  width: 280px;
  height: 80px;
`;
export const LogoImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const LogoCustomers = styled(Slider)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 85px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    width: 1183px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 25px;
  justify-content: space-around;
  padding-bottom: 51px;

  @media (min-width: 768px) {
    margin-top: 18px;
    padding-bottom: 100px;
  }

  @media (min-width: 1280px) {
    margin-top: 32px;
    padding-bottom: 118px;
  }
`;
export const ButtonPreview = styled.button`
  margin: 0;
  width: auto;
  height: auto;
  border: none;
  background-color: transparent;
  // стили для кнопки - предыдущий комент
  transition: transform 0.2s ease-in-out;
  :hover,
  :focus {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const ButtonNext = styled.button`
  transform: rotate(180deg);
  border: none;
  // стили для кнопки - следующий комент
  transition: transform 0.2s ease-in-out;
  width: auto;
  height: auto;
  background-color: transparent;
  &:hover,
  &:focus {
    transform: scale(1.2) rotate(180deg);
    cursor: pointer;
  }
`;
