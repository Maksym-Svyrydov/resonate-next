import React from 'react';
import Quotes from '../../../Quote/Quote';
import img from '../../../../img/05.png';

import {
  Section,
  TitleSection,
  TextSectionM,
  TextSectionT,
  TextSectionI,
  Wrapp,
  WrappTitle,
  WrappText,
  WrappTextSubtitle,
  List,
  Item,
  TitleItem,
  TitleText,
  ImdBg,
  SectionWrapp,
  SectionHelp,
  SectionText,
  ListSection,
  BannerList,
  BannerActive,
  Banner,
  Frame,
  DotList,
  DotActive,
  Dot,
  ContentWrapp,
  WrappTitleLeft,
  ButtonWrapper,
  Line,
} from './5-DT-Develop.styled';

import BtnPackage from '../../../Buttons/BtnPackage';

const Marketing = () => {
  return (
    <Section>
      <ListSection>
        <Frame>
          <DotList>
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <DotActive />
          </DotList>
        </Frame>
        <BannerList>
          <Banner>Marketing</Banner>
          <Banner>Promotion</Banner>
          <Banner>Branding</Banner>
          <Banner>Social media</Banner>
          <BannerActive>Development</BannerActive>
        </BannerList>
      </ListSection>
      <ContentWrapp>
        <Wrapp>
          <WrappTextSubtitle>
            <Line />
            <WrappText>
              <WrappTitle>landing page</WrappTitle>
              <WrappText>
                Landing pages are an essential part of the user journey and have
                an important role to fulfill by stimulating a predetermined
                conversion. It highligts product and service advantages and turn
                users into buyers
              </WrappText>
            </WrappText>
          </WrappTextSubtitle>
          <List>
            <Item>
              <TitleItem>corporate website</TitleItem>
              <TitleText>
                Corporate site — is an important component of company’s image,
                its brand identity online. It is created to give maximum
                information to target clients and perspective partners about
                company’s businesses, goods/services it provides and contact
                details online.
              </TitleText>
            </Item>
            <Item>
              <TitleItem>e-commerce</TitleItem>
              <TitleText>
                Attract more online traffic and sales with a custom ecommerce
                website. We provide custom ecommerce website development
                services that include a custom and responsive design for
                platforms like Magento and Opencart
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
        </Wrapp>
      </ContentWrapp>
      <ImdBg src={img} />
      <WrappTitleLeft>
        <TitleSection>
          <TextSectionM>Develop</TextSectionM>
          <TextSectionT>ment.</TextSectionT>
          <TextSectionI>is our technology key.</TextSectionI>
        </TitleSection>
        <ButtonWrapper>
          <BtnPackage />
        </ButtonWrapper>
        <SectionWrapp>
          <SectionHelp>
            <Quotes />
            <SectionText>
              Your website delivers your marketing message 24 hours, 365 days a
              year!
            </SectionText>
          </SectionHelp>
        </SectionWrapp>
      </WrappTitleLeft>
    </Section>
  );
};
export default Marketing;
