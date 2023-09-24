import React from 'react';
// import { BsArrowRight } from 'react-icons/bs';

import {
  Section,
  Title,
  List,
  ItemZoo,
  ItemInterico,
  ItemCashYou,
  TextWrapper,
  Text,
  Customer,
  TextLink,
  LinkWrapper,
  LinkRef,
  Icon,
} from './Cases.styled';

const Cases = () => {
  return (
    <Section>
      <Title>CASE STUDIES</Title>
      <List>
        <ItemZoo>
          <TextWrapper>
            <Text>Branding &</Text>
            <br />
            <Text>
              Website development <br />
            </Text>
            <Text>with </Text>
            <Customer>KHARKIV ZOO</Customer>
          </TextWrapper>
          <LinkWrapper>
            <TextLink>Show more</TextLink>
            <LinkRef to="/Zoo">
              {/* <BsArrowRight /> */}
              <Icon viewBox="0 0 88 32">
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
              </Icon>
            </LinkRef>
          </LinkWrapper>
        </ItemZoo>
        <ItemInterico>
          <TextWrapper>
            <Text>Branding &</Text>
            <br />
            <Text>
              Website development <br />
              Outsourced marketing department
              <br />
              <Text>with </Text>
            </Text>
            <Customer>intericco</Customer>
          </TextWrapper>
          <LinkWrapper>
            <TextLink>Show more</TextLink>
            <LinkRef to="/intericco">
              {/* <BsArrowRight /> */}
              <Icon viewBox="0 0 88 32">
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
              </Icon>
            </LinkRef>
          </LinkWrapper>
        </ItemInterico>
        <ItemCashYou>
          <TextWrapper>
            <Text>Outsourced marketing department</Text>
            <br />
            <Text></Text>
            <Text>with </Text>
            <Customer>CashYou</Customer>
          </TextWrapper>
          <LinkWrapper>
            <TextLink>Show more</TextLink>
            <LinkRef to="/cashyou">
              {/* <BsArrowRight /> */}
              <Icon viewBox="0 0 88 32">
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
                <path d="M86.747 17.414c0.781-0.781 0.781-2.047 0-2.828l-12.728-12.728c-0.781-0.781-2.047-0.781-2.829 0s-0.781 2.047 0 2.828l11.314 11.314-11.314 11.314c-0.781 0.781-0.781 2.047 0 2.829s2.047 0.781 2.829 0l12.728-12.728zM0 18h85.333v-4h-85.333v4z"></path>
              </Icon>
            </LinkRef>
          </LinkWrapper>
        </ItemCashYou>
      </List>
    </Section>
  );
};
export default Cases;
