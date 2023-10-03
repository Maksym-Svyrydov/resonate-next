import React from 'react';
import Quotes from '../../../Quote/Quote';
import img from 'public/img/01.svg';

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
  Text,
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
} from './1-DT-Marketing.styled';
import BtnOffer from '../../../Buttons/BtnOffer';
import BtnPackage from '../../../Buttons/BtnPackage';

const Marketing = () => {
  return (
    <Section id="Marketing_DT">
      <ListSection>
        <Frame>
          <DotList>
            <DotActive />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </DotList>
        </Frame>
        <BannerList>
          <BannerActive>Marketing</BannerActive>
          <Banner>Promotion</Banner>
          <Banner>Branding</Banner>
          <Banner>Social media</Banner>
          <Banner>Development</Banner>
        </BannerList>
      </ListSection>
      <ContentWrapp>
        <Wrapp>
          <WrappTextSubtitle>
            <Line />
            <WrappText>
              <WrappTitle>MARKETING ANALYSIS</WrappTitle>
              <Text>
                Marketing analysis helps entrepreneurs reduce business risks,
                effectively connect with the target audience, provide the right
                products, and align with the market trends.
              </Text>
            </WrappText>
          </WrappTextSubtitle>
          <List>
            <Item>
              <TitleItem>MARKETING RESEARCH</TitleItem>
              <TitleText>
                Marketing research helps a business by giving it insights into
                what customers say they like and dislike, what they say they
                want. These insights come in both quantitative and qualitative
                forms and can play a massive role in empowering a business’s
                decision-making.
              </TitleText>
            </Item>
            <Item>
              <TitleItem>MARKETING STRATEGY</TitleItem>
              <TitleText>
                The main tool of the business owner in opening market
                territories and consumers. It is not easy to achieve success
                without thoughtful actions, on luck alone.
              </TitleText>
            </Item>
            <Item>
              <TitleItem>INBOUND MARKETING</TitleItem>
              <TitleText>
                While digital advertising is one of the best ways to reach your
                target market quickly, it&apos;s critical for organizations to
                maximize different acquisition channels in their strategy.
                Working on an inbound marketing strategy will allow you to
                solidify your online presence and accelerate your long-term
                growth by putting the customer at the center of your activities.
              </TitleText>
            </Item>
            <Item>
              <TitleItem>Outsourced marketing department</TitleItem>
              <TitleText>
                Centralize all your Digital Marketing scope in the hands of one
                expert team to maximize efficiency and optimize results.
              </TitleText>
            </Item>
          </List>
        </Wrapp>
      </ContentWrapp>
      <ImdBg src={img} alt="01" />
      <WrappTitleLeft>
        <TitleSection>
          <TextSectionM>Marke-</TextSectionM>
          <p>
            <TextSectionT>ting.</TextSectionT>
            <TextSectionI>is our ingredient.</TextSectionI>
          </p>
        </TitleSection>
        <ButtonWrapper>
          <BtnPackage />
          <BtnOffer />
        </ButtonWrapper>
        <SectionWrapp>
          <SectionHelp>
            <Quotes />
            <SectionText>
              We will help you develop efficient and working strategy to
              scale-up your business
            </SectionText>
          </SectionHelp>
        </SectionWrapp>
      </WrappTitleLeft>
    </Section>
  );
};
export default Marketing;
