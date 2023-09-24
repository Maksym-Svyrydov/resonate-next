import React from 'react';
import img from '../../../../public/img/03.png';
import Quotes from '../../Quote/Quote';
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
} from './3-Branding.styled';
import ButtonService from '../../Buttons/ButtonService';

const Branding = () => {
  return (
    <Section>
      <TitleSection>
        <TextSectionM>Bran</TextSectionM>
        <TextSectionT>ding.</TextSectionT>
        <TextSectionI>is our impression.</TextSectionI>
      </TitleSection>
      <Wrapp>
        <WrappTitle>brand strategy</WrappTitle>
        <WrappText>
          Brand strategy is an action plan that determines the type of image
          that a company wants to build with its customers. The key components
          of a marketing strategy include purpose, consistency, emotion, and
          employee involvement.
        </WrappText>
      </Wrapp>
      <List>
        <Item>
          <TitleItem>branding design</TitleItem>
          <TitleText>
            A brand needs to stand out from the crowd and a good design gets you
            started. We help our clients connect their brand identity with
            customers through printed and digital materials. Through our design
            services, we communicate what’s unique about your business, answer
            customer questions, and promote brand recognition.
          </TitleText>
        </Item>
        <Item>
          <TitleItem>SERM</TitleItem>
          <TitleText>
            Search engine reputation management avails businesses and websites
            the opportunity to be aware of activities that can damage their
            reputations and those that can enhance their reputations. SERM also
            describes the major areas of manipulation by practitioners.
          </TitleText>
        </Item>
      </List>
      <ButtonService />
      <SectionWrapp>
        <ImdBg src={img} alt="03" />
        <SectionHelp>
          <Quotes />
          <SectionText>
            We help you to create a powerful, memorable image of the enterprise
            in the subconscious of the consumer
          </SectionText>
        </SectionHelp>
      </SectionWrapp>
    </Section>
  );
};

export default Branding;
