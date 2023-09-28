import React from 'react';
import img from '../../../../public/img/05.png';
import Quotes from '../../Quote/Quote';
import ButtonService from '../../Buttons/ButtonService';
import {
  Section,
  TitleSection,
  TextSectionM,
  TextSectionT,
  TextSectionI,
  Wrapp,
  WrappTitle,
  WrappText,
  List,
  Item,
  TitleItem,
  TitleText,
  ImdBg,
  SectionWrapp,
  SectionHelp,
  SectionText,
} from './5-Develop.styled';

const Develop = () => {
  return (
    <Section id="Development">
      <TitleSection>
        <TextSectionM>Develop</TextSectionM>
        <TextSectionT>ment.</TextSectionT>
        <TextSectionI>is our technology key.</TextSectionI>
      </TitleSection>
      <Wrapp>
        <WrappTitle>landing page</WrappTitle>
        <WrappText>
          Landing pages are an essential part of the user journey and have an
          important role to fulfill by stimulating a predetermined conversion.
          It highligts product and service advantages and turn users into buyers
        </WrappText>
      </Wrapp>
      <List>
        <Item>
          <TitleItem>corporate website</TitleItem>
          <TitleText>
            Corporate site — is an important component of company’s image, its
            brand identity online. It is created to give maximum information to
            target clients and perspective partners about company’s businesses,
            goods/services it provides and contact details online.
          </TitleText>
        </Item>
        <Item>
          <TitleItem>e-commerce</TitleItem>
          <TitleText>
            Attract more online traffic and sales with a custom ecommerce
            website. We provide custom ecommerce website development services
            that include a custom and responsive design for platforms like
            Magento and Opencart
          </TitleText>
        </Item>
        <Item>
          <TitleItem>Mobile applications</TitleItem>
          <TitleText>
            Delight your users with expressive and feature-rich native iOS /
            Android, cross-platform or progressive web apps leveraging our
            extensive experience of working with all major technologies.
          </TitleText>
        </Item>
      </List>
      <ButtonService />
      <SectionWrapp>
        <ImdBg src={img} alt="05" />
        <SectionHelp>
          <Quotes />
          <SectionText>
            Your website delivers your marketing message 24 hours, 365 days a
            year!
          </SectionText>
        </SectionHelp>
      </SectionWrapp>
    </Section>
  );
};

export default Develop;
