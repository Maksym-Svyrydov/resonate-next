import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  height: 62.338px;
  border: 1px solid #cbbe9c;
  background: #283340;
  display: flex;
  align-items: center;
  padding: 16px 0px;
  jusify-content: center;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;

  @media screen and (max-width: 1362px) {
    visibility: hidden;
  }
  @media screen and (min-width: 1365px) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1919px) {
    width: 380px;
    height: 80px;
    margin-top: 0px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  display: block;
  color: #cbbe9c;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  jusify-content: center;
  margin: 0 auto;
  width: 100% @media screen and (min-width: 1366px) {
    font-size: 24px;
  }
`;
