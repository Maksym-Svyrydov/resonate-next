import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding-left: 22px;
  padding-right: 13px;
  padding-top: 100px;
  background: rgba(245, 242, 240, 1);
`;

export const Text = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  color: #283340;
  padding: 0px;
  margin: 0px 0px 55px 0px;
`;
export const TextAccent = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  text-decoration: underline;
  color: #cbbe9c;
`;

export const List = styled.ul`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  list-style: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
  overflow: scroll;
`;
export const Item = styled.div`
  padding: 0px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 70px;
`;
