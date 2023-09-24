import React from 'react';

import Prime from '../../../../img/Customers/BluePrime.svg';
import Orion from '../../../../img/Customers/orioncity.svg';
import Vikno from '../../../../img/Customers/Vikno.svg';
import Zoo from '../../../../img/Customers/kharkivzoo.svg';
import Uuutoo from '../../../../img/Customers/uuutoo.svg';
import Gleam from '../../../../img/Customers/Gleam.svg';
import Marlu from '../../../../img/Customers/marludesign.svg';
import StartUp from '../../../../img/Customers/startupinc.svg';
import Cash from '../../../../img/Customers/cashyou.svg';
import Interico from '../../../../img/Customers/intericco.svg';
import Avangard from '../../../../img/Customers/Avangard.svg';
import Step from '../../../../img/Customers/stepINVEST_logo_1 2.svg';
import Spribe from '../../../../img/Customers/SPRIBE.svg';
import Nika from '../../../../img/Customers/Nika.svg';
import {
  Section,
  Wrapper,
  Titlle,
  TitleAccent,
  TitleSection,
  LogoSection,
  LogoList,
  LogoItem,
  LogoImg,
  LogoImgSquare,
  YourLogo,
  TextLogo,
} from './Custimers.styled';
const Customers = () => {
  return (
    <Section>
      <TitleSection>
        <Wrapper>
          <Titlle>
            WE ARE PROUD TO CONTRIBUTE TO <TitleAccent>OUR CLIENTS</TitleAccent>{' '}
            SUCCESS.
          </Titlle>
        </Wrapper>
      </TitleSection>
      <LogoSection>
        <LogoList>
          <LogoItem>
            <LogoImg src={Prime} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={Orion} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={Vikno} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={Zoo} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={Uuutoo} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImgSquare src={Gleam} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={Marlu} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={StartUp} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImgSquare src={Cash} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={Interico} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={Avangard} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={Step} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={Spribe} alt="logo" />
          </LogoItem>
          <LogoItem>
            <LogoImg src={Nika} alt="logo" />
          </LogoItem>
          <YourLogo>
            <TextLogo>Your Logo</TextLogo>
          </YourLogo>
        </LogoList>
      </LogoSection>
    </Section>
  );
};
export default Customers;
