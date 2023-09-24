import React from 'react';
import Quotes from '../../../Quote/Quote';
import img from '../../../../img/03.png';

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
} from './3-DT-Branding.styled';

import BtnPackage from '../../../Buttons/BtnPackage';

const Marketing = () => {
  return (
    <Section>
      <ListSection>
        <Frame>
          <DotList>
            <Dot />
            <Dot />
            <DotActive />
            <Dot />
            <Dot />
          </DotList>
        </Frame>
        <BannerList>
          <Banner>Marketing</Banner>
          <Banner>Promotion</Banner>
          <BannerActive>Branding</BannerActive>
          <Banner>Social media</Banner>
          <Banner>Development</Banner>
        </BannerList>
      </ListSection>
      <ContentWrapp>
        <Wrapp>
          <WrappTextSubtitle>
            <Line />
            <WrappText>
              <WrappTitle>brand strategy</WrappTitle>
              <WrappText>
                Brand strategy is an action plan that determines the type of
                image that a company wants to build with its customers. The key
                components of a marketing strategy include purpose, consistency,
                emotion, and employee involvement.
              </WrappText>
            </WrappText>
          </WrappTextSubtitle>
          <List>
            <Item>
              <TitleItem>branding design</TitleItem>
              <TitleText>
                A brand needs to stand out from the crowd and a good design gets
                you started. We help our clients connect their brand identity
                with customers through printed and digital materials. Through
                our design services, we communicate what’s unique about your
                business, answer customer questions, and promote brand
                recognition.
              </TitleText>
            </Item>
            <Item>
              <TitleItem>SERM</TitleItem>
              <TitleText>
                Search engine reputation management avails businesses and
                websites the opportunity to be aware of activities that can
                damage their reputations and those that can enhance their
                reputations. SERM also describes the major areas of manipulation
                by practitioners.
              </TitleText>
            </Item>
          </List>
        </Wrapp>
      </ContentWrapp>
      <ImdBg src={img} />
      <WrappTitleLeft>
        <TitleSection>
          <TextSectionM>Bran-</TextSectionM>
          <TextSectionT>ding.</TextSectionT>
          <TextSectionI>is our impression.</TextSectionI>
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
