import styled from 'styled-components';
export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  jusify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  jusify-content: center;
  width: 0;
  height: 10000px;

  @media screen and (max-width: 1364px) {
    visibility: hidden;
  }
  @media screen and (min-width: 1365px) {
    padding: 0px 0px;
    width: 294px;
    margin-left: 34px;
  }
  @media screen and (min-width: 1919px) {
    padding: 0px 0px;
    width: 359px;
    margin-left: 84px;
  }
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px;
  margin-right: auto;
  @media screen and (max-width: 1364px) {
    margin-left: 9px;
  }
  @media screen and (min-width: 1365px) {
    margin-left: 42px;
  }
  @media screen and (min-width: 1919px) {
    margin-left: 84px;
  }
`;
