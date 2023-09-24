import styled from 'styled-components';
import Image from 'next/image';

export const BtnWrapper = styled.div`
  display: flex;
  border: 1px solid #cbbe9c;
  width: 300px;
  height: 63px;
  margin: auto;
  margin-bottom: 48px;
`;
export const Link = styled.a`
  display: block;
  color: #cbbe9c;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: auto;
  padding: 0;
  text-decoration: none;
`;
export const Arrow = styled(Image)``;
