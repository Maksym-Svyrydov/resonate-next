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
export const ArticlesWrapp = styled.div`
  display: flex;
  flex-direction: column;
  jusify-content: center;
  width: 100%;
  @media screen and (min-width: 1365px) {
    padding: 0px 0px;
    width: 995px;
    margin-left: 34px;
  }
  @media screen and (min-width: 1919px) {
    padding: 0px 0px;
    width: 1466px;
    margin-left: 34px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  jusify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
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
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 0px;
  margin-right: auto;
  width: 100%;
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
