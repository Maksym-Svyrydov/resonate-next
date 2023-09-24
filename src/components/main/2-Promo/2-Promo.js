import React from 'react';
import img from '../../../../public/img/02.png';

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
} from './2-Promo.styled';

const Promo = () => {
  return (
    <Section>
      <TitleSection>
        <TextSectionM>Promo</TextSectionM>
        <TextSectionT>tion.</TextSectionT>
        <TextSectionI>is our pro tool.</TextSectionI>
      </TitleSection>
      <Wrapp>
        <WrappTitle>Performance marketing</WrappTitle>
        <WrappText>
          Performance marketing (performance-based marketing) is marketing aimed
          at achieving specific, measurable business results. Closely associated
          with digital promotion and weakly associated with offline.
        </WrappText>
      </Wrapp>
      <List>
        <Item>
          <TitleItem>SEO</TitleItem>
          <TitleText>
            Since “to Google” is now an acceptable verb, it’s vital to ensure
            your website is right up there, clear and visible. We start with
            optimised content, regularly updated and written by a content
            specialist to appeal to the latest Google guidance. SEO marketing
            can be incredibly cost-effective and has delivered up to 12.2x
            return on investment!
          </TitleText>
        </Item>
        <Item>
          <TitleItem>EMAIL MARKETING</TitleItem>
          <TitleText>
            A well set up go-to-market funnel is essential to Sales and
            Marketing alignment. It ensures that go-to-market efforts across
            both teams are optimised to target and nurture the right leads at
            the right time.
          </TitleText>
        </Item>
        <Item>
          <TitleItem>sales funnels</TitleItem>
          <TitleText>
            While digital advertising is one of the best ways to reach your
            target market quickly, it’s critical for organizations to maximize
            different acquisition channels in their strategy. Working on an
            inbound marketing strategy will allow you to solidify your online
            presence and accelerate your long-term growth by putting the
            customer at the center of your activities.
          </TitleText>
        </Item>
      </List>
      <ButtonService />
      <SectionWrapp>
        <ImdBg src={img} alt="02" />
        <SectionHelp>
          <Quotes />
          <SectionText>
            Let’s make performance marketing a tool for your business and reach
            your audience wherever it is
          </SectionText>
        </SectionHelp>
      </SectionWrapp>
    </Section>
  );
};

export default Promo;
