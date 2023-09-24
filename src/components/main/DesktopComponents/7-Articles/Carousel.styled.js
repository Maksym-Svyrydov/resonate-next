import Slider from 'react-slick';
import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-style: normal;
  line-height: normal;
  width: 100%;
  height: 1080px;
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
  }
  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
  }
`;

export const SliderBox = styled(Slider)`
  box-sizing: border-box;
  width: 100%;
  height: 100%px;
`;
export const SliderItem = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  bottom: 30px;
  right: 50px;
  @media screen and (min-width: 1365px) {
    bottom: 40px;
    right: 20px;
    gap: 18px;
  }
  @media screen and (min-width: 1919px) {
    bottom: 30px;
    right: 50px;
    gap: 25px;
  }
`;
export const ButtonPreview = styled.button`
  margin: 0;
  width: auto;
  height: auto;
  border: none;
  background-color: transparent;
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
  transition: transform 0.2s ease-in-out;
  width: auto;
  height: auto;

  background-color: transparent;

  :hover,
  :focus {
    transform: scale(1.2) rotate(180deg);
    cursor: pointer;
  }
`;
export const Arrow = styled.img`
  @media screen and (min-width: 1365px) {
    width: 100px;
  }
  @media screen and (min-width: 1919px) {
    width: 152px;
  }
`;
