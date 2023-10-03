import React from 'react';

import Prime from 'public/img/Customers/BluePrime.svg';
import Orion from 'public/img/Customers/orioncity.svg';
import Vikno from 'public/img/Customers/Vikno.svg';
import Zoo from 'public/img/Customers/kharkivzoo.svg';
import Uuutoo from 'public/img/Customers/uuutoo.svg';
import Gleam from 'public/img/Customers/Gleam.svg';
import Marlu from 'public/img/Customers/marludesign.svg';
import StartUp from 'public/img/Customers/startupinc.svg';
import Cash from 'public/img/Customers/cashyou.svg';
import Interico from 'public/img/Customers/intericco.svg';
import Avangard from 'public/img/Customers/Avangard.svg';
import Step from 'public/img/Customers/stepINVEST_logo_1 2.svg';
import Spribe from 'public/img/Customers/SPRIBE.svg';
import Nika from 'public/img/Customers/Nika.svg';
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
} from './Customers.styled';
const Customers = () => {
  return (
    <Section id="Clients">
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
            <LogoImg
              src={Prime}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={Orion}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={Vikno}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={Zoo}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={Uuutoo}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImgSquare
              src={Gleam}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={Marlu}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={StartUp}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImgSquare
              src={Cash}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={Interico}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={Avangard}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={Step}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={Spribe}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
          </LogoItem>
          <LogoItem>
            <LogoImg
              src={Nika}
              alt="logo"
              style={{ maxWidth: '220px', height: 'auto' }}
            />
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
