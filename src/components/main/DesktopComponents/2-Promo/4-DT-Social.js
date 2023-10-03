import React from 'react';
import Quotes from '../../../Quote/Quote';
import img from 'public/img/04.png';

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
} from './4-DT-Social.styled';

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
            <DotActive />
            <Dot />
          </DotList>
        </Frame>
        <BannerList>
          <Banner>Marketing</Banner>
          <Banner>Promotion</Banner>
          <Banner>Branding</Banner>
          <BannerActive>Social media</BannerActive>
          <Banner>Development</Banner>
        </BannerList>
      </ListSection>
      <ContentWrapp>
        <Wrapp>
          <WrappTextSubtitle>
            <Line />
            <WrappText>
              <WrappTitle>Social media Strategy</WrappTitle>
              <WrappText>
                Social media strategy is a plan of how to maximise engagement
                and interactions across social media to achieve a company&apos;s
                objective. These objectives may be to generate leads, improve
                brand awareness or create a viral effect
              </WrappText>
            </WrappText>
          </WrappTextSubtitle>
          <List>
            <Item>
              <TitleItem>SMM Promoution</TitleItem>
              <TitleText>
                Social media marketing has transformed the way businesses are
                able to influence consumer behavior—from promoting content that
                drives engagement to extracting personal data that makes
                messaging resonate with users
              </TitleText>
            </Item>
            <Item>
              <TitleItem>content Production</TitleItem>
              <TitleText>
                By creating new content, you&apos;re building a library of
                amazing videous, images and other resources that define your
                brand. Every time someone clicks on your article or image,
                you&apos;re instilling name recognition
              </TitleText>
            </Item>
            <Item>
              <TitleItem>Influence marketing</TitleItem>
              <TitleText>
                Influence marketing, or working with opinion leaders (bloggers
                and vloggers), is a complete promotion tool. In just a few
                years, it has turned from an auxiliary marketing mechanic into
                an industry.
              </TitleText>
            </Item>
          </List>
        </Wrapp>
      </ContentWrapp>
      <ImdBg src={img} alt="04" />
      <WrappTitleLeft>
        <TitleSection>
          <TextSectionM>Social</TextSectionM>
          <TextSectionT>media.</TextSectionT>
          <TextSectionI>is our engagement.</TextSectionI>
        </TitleSection>
        <ButtonWrapper>
          <BtnPackage />
        </ButtonWrapper>
        <SectionWrapp>
          <SectionHelp>
            <Quotes />
            <SectionText>
              We help you to create a powerful, memorable image of the
              enterprise in the subconscious of the consumer
            </SectionText>
          </SectionHelp>
        </SectionWrapp>
      </WrappTitleLeft>
    </Section>
  );
};
export default Marketing;
