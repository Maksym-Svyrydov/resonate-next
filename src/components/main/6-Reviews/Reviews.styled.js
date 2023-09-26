import Image from 'next/image';
import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding-left: 22px;
  padding-right: 20px;
  padding-top: 100px;
  background: #f5f2f0;
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
// export const Quote = styled.div`
//   color: #283340;
//   font-family: 'DM Sans', sans-serif;
//   font-size: 100px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
//   text-transform: uppercase;
//   padding: 0;
// `;
export const Quote = styled.div`
  margin-bottom: 10px;
`;
export const QuoteImg = styled(Image)`
  width: 78px;
  height: 78px;
`;
