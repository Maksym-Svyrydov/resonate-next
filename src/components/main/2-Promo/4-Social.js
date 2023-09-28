import React from 'react';
import img from '../../../../public/img/04.png';
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
} from './4-Social.styled';

const Social = () => {
  return (
    <Section id="Social">
      <TitleSection>
        <TextSectionM>Social</TextSectionM>
        <TextSectionT>Media.</TextSectionT>
        <TextSectionI>is our engagement.</TextSectionI>
      </TitleSection>
      <Wrapp>
        <WrappTitle>Social media Strategy</WrappTitle>
        <WrappText>
          Social media strategy is a plan of how to maximise engagement and
          interactions across social media to achieve a company’s objective.
          These objectives may be to generate leads, improve brand awareness or
          create a viral effect
        </WrappText>
      </Wrapp>
      <List>
        <Item>
          <TitleItem>SMM Promoution</TitleItem>
          <TitleText>
            Social media marketing has transformed the way businesses are able
            to influence consumer behavior—from promoting content that drives
            engagement to extracting personal data that makes messaging resonate
            with users
          </TitleText>
        </Item>
        <Item>
          <TitleItem>content Production</TitleItem>
          <TitleText>
            By creating new content, you’re building a library of amazing
            videous, images and other resources that define your brand. Every
            time someone clicks on your article or image, you’re instilling name
            recognition
          </TitleText>
        </Item>
        <Item>
          <TitleItem>Influence marketing</TitleItem>
          <TitleText>
            Influence marketing, or working with opinion leaders (bloggers and
            vloggers), is a complete promotion tool. In just a few years, it has
            turned from an auxiliary marketing mechanic into an industry.
          </TitleText>
        </Item>
      </List>
      <ButtonService />
      <SectionWrapp>
        <ImdBg src={img} alt="04" />
        <SectionHelp>
          <Quotes />
          <SectionText>
            We help you to engage your brand awareness and bring cliens throw
            social networks
          </SectionText>
        </SectionHelp>
      </SectionWrapp>
    </Section>
  );
};

export default Social;
