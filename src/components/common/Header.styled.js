import styled from 'styled-components';
import Link from 'next/link';
export const HeaderSection = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  box-sizing: border-box;
  border-bottom: 2px solid #283340;
  background-color: #283340;
  border-bottom: 1px solid #cbbe9c;
  @media screen and (max-width: 1365px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
`;

export const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0px;
  width: 300px;
  height: 100vh;
  box-sizing: border-box;
  ${'' /* transition: all 1s ease-in-out; */}
  background-color: #283340;
  border-left: 2px solid #cbbe9c;
  padding: 80px 0px;
  gap: 15px;
  transition: all 300ms cubic-bezier(0, 0, 0.58, 1);
  transform: translateX(100%);
  &.showNav {
    transition: all 1s ease-in-out;
    transform: translateX(0%);
    z-index: 999;
  }

  @media (max-width: 767px) {
    &.showNav {
      transition: all 1s ease-in-out;
      transform: translateX(0%);
      width: 100%;
      padding: 120px 0px;
      gap: 45px;
      z-index: 9999;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 22px;
  text-transform: uppercase;
  color: #cbbe9c;
  padding: 8px;
  margin-left: auto;
  margin-right: auto;

  &.active {
    background-color: #cbbe9c;
    color: #283340;
    border-radius: 8px;
  }
  @media (max-width: 767px) {
    font-size: 44px;
    line-height: 32px;
  }
`;
export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-right: 35px;
  z-index: 2;
  width: 40px;
  height: 40px;
  padding: 5px;
  z-index: 9999;
  position: fixed;
  top: 30px;
  right: 0px;
  span {
    width: 30px;
    height: 2px;

    transition: all 1s ease-in-out;
    &:nth-child(1) {
      background-color: #cbbe9c;
    }
    &:nth-child(2) {
      background-color: #cbbe9c;
    }
    &:nth-child(3) {
      background-color: #cbbe9c;
    }
  }
  &.showNav {
    border: 2px solid #cbbe9c;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    align-items: center;
    transition: all 1s ease-in-out;

    span {
      &:nth-child(1) {
        width: 100%;
        transform: rotate(45deg) translateY(150%) translateX(15%);
        background-color: #cbbe9c;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        width: 100%;
        transform: rotate(-45deg) translateY(-150%) translateX(15%);
        background-color: #cbbe9c;
      }
    }
  }
`;
