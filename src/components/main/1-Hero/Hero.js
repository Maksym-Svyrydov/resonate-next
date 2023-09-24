import BtnOffer from '../../Buttons/BtnOffer';
import BtnPackage from '../../Buttons/BtnPackage';
import {
  Section,
  Title,
  TitleAccent,
  List,
  Item,
  ListTitle,
  ListText,
} from './Hero.styled';
const Hero = () => {
  return (
    <Section>
      <Title>Marketing agency </Title>
      <Title> that knows</Title>
      <TitleAccent>what’s next.</TitleAccent>
      <List>
        <Item>
          <ListTitle>Result driven</ListTitle>
          <ListText>
            We convert your goals into results. Our competence allows us to
            predict the system of the next steps of your employees and direct
            all goals towards the growth of the company
          </ListText>
        </Item>
        <Item>
          <ListTitle>Wide range of tools</ListTitle>
          <ListText>
            The needs of your business dictate the tools that we will use based
            on the stages at which you have a drawdown
          </ListText>
        </Item>
        <Item>
          <ListTitle>Support 24/7</ListTitle>
          <ListText>
            We are proud to be a Ukranian marketing agency serving premiere
            clientèle worldwide. We provide outstanding customer support within
            24 hours to all inquiries. Always!
          </ListText>
        </Item>
        <Item>
          <BtnOffer />
          <BtnPackage />
        </Item>
      </List>
    </Section>
  );
};
export default Hero;
