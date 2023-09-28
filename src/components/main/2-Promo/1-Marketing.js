import { React, forwardRef } from 'react';
import ButtonService from '../../Buttons/ButtonService';
import Quotes from '../../Quote/Quote';
import img from '../../../../public/img/01.svg';

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
} from './1-Marketing.styled';

const Marketing = () => {
  return (
    <Section id="Marketing">
      <TitleSection>
        <TextSectionM>Marke</TextSectionM>
        <TextSectionT>ting.</TextSectionT>
        <TextSectionI>is our ingredient.</TextSectionI>
      </TitleSection>
      <Wrapp>
        <WrappTitle>MARKETING ANALYSIS</WrappTitle>
        <WrappText>
          Marketing analysis helps entrepreneurs reduce business risks,
          effectively connect with the target audience, provide the right
          products, and align with the market trends.
        </WrappText>
      </Wrapp>
      <List>
        <Item>
          <TitleItem>MARKETING RESEARCH</TitleItem>
          <TitleText>
            Marketing research helps a business by giving it insights into what
            customers say they like and dislike, what they say they want. These
            insights come in both quantitative and qualitative forms and can
            play a massive role in empowering a business’s decision-making.
          </TitleText>
        </Item>
        <Item>
          <TitleItem>MARKETING STRATEGY</TitleItem>
          <TitleText>
            The main tool of the business owner in opening market territories
            and consumers. It is not easy to achieve success without thoughtful
            actions, on luck alone.
          </TitleText>
        </Item>
        <Item>
          <TitleItem>INBOUND MARKETING</TitleItem>
          <TitleText>
            While digital advertising is one of the best ways to reach your
            target market quickly, it s critical for organizations to maximize
            different acquisition channels in their strategy. Working on an
            inbound marketing strategy will allow you to solidify your online
            presence and accelerate your long-term growth by putting the
            customer at the center of your activities.
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
      <ButtonService />
      <SectionWrapp>
        <ImdBg alt="01" src={img} />
        <SectionHelp>
          <Quotes />
          <SectionText>
            We will help you develop efficient and working strategy to scale-up
            your business
          </SectionText>
        </SectionHelp>
      </SectionWrapp>
    </Section>
  );
};
export default forwardRef(Marketing);
