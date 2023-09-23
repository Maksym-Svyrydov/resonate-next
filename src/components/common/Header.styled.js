import styled from 'styled-components';

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  box-sizing: border-box;
  .showNav {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
`;

export const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0px;
  background-color: blue;
  width: 100%;
  height: 100vh;
  padding-left: 100px;
  box-sizing: border-box;
  transform: scale(0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
  a {
    display: block;
    justify-content: center;
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

  span {
    width: 30px;
    height: 2px;

    transition: all 0.5s ease-in-out;
    &:nth-child(1) {
      background-color: tomato;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: green;
    }
  }
  &.showNav {
    border: 2px solid tomato;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    align-items: center;

    span {
      &:nth-child(1) {
        width: 100%;
        transform: rotate(45deg) translateY(150%) translateX(15%);
        background-color: white;
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        width: 100%;
        transform: rotate(-45deg) translateY(-150%) translateX(15%);
        background-color: white;
      }
    }
  }
`;
