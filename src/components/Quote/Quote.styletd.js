import styled from 'styled-components';
import Image from 'next/image';
export const Quote = styled.div`
  margin-bottom: 10px;
  margin-left: 36px;
  @media screen and (min-width: 1366px) {
    margin-left: 0px;
  }
  @media screen and (min-width: 1919px) {
    margin-left: 0px;
  }
`;
export const QuoteImg = styled(Image)`
  width: 55px;
  height: 73px;
`;
