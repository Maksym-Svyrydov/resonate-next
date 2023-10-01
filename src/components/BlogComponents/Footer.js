import facebook from 'public/img/icons/blog/Facebook.svg';
import twitter from 'public/img/icons/blog/Twitter.svg';
import linkiedIn from 'public/img/icons/blog/Subtract.svg';
import {
  Section,
  Title,
  TitleAccent,
  List,
  Item,
  Facebook,
  Twit,
  Lnkdn,
  Img,
  LinkTxt,
} from './Footer.styled';
export const Footer = () => {
  return (
    <Section>
      <Title>
        did you like the article?
        <Title>
          You can <span> </span>
          <TitleAccent>share it on social networks</TitleAccent>
        </Title>
      </Title>
      <List>
        <Item>
          <Facebook href="/">
            <Img src={facebook} alt="Facebook icon" />
            <LinkTxt>Facebook</LinkTxt>
          </Facebook>
        </Item>
        <Item>
          <Twit href="/">
            <Img src={twitter} alt="Facebook icon" />
            <LinkTxt>Twitter</LinkTxt>
          </Twit>
        </Item>
        <Item>
          <Lnkdn href="/">
            <Img src={linkiedIn} alt="Facebook icon" />
            <LinkTxt>LinkedIn</LinkTxt>
          </Lnkdn>
        </Item>
      </List>
    </Section>
  );
};
