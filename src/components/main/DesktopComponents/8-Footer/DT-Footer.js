// import { nanoid } from 'nanoid';
import {
  Section,
  Title,
  TitleTxtAccent,
  // TitleServices,
  // ServicesList,
  // QuestionTxt,
  // QuestionList,
  // QuestionItem,
  // ContactTitle,
  // Form,
  // FormInput,
  // Textarea,
  // ButtonSubmit,
  LinksTitle,
  LinkList,
  Contacts,
  LinkItem,
  ContactLink,
  SocialLinkList,
  IconItem,
  Icon,
  Rsnt,
  LinksWrapper,
  // CheckboxContainer,
  // Checkbox,
  // Label,
} from './DT-Footer.styled';
import insta from '../../../../img/icons/footer-icons/instagaram.svg';
import facebook from '../../../../img/icons/footer-icons/facebook.svg';
import be from '../../../../img/icons/footer-icons/Be.svg';
import whtsp from '../../../../img/icons/footer-icons/whatsup.svg';
import lnkdin from '../../../../img/icons/footer-icons/linkiedIn.svg';
import twitter from '../../../../img/icons/footer-icons/twitter.svg';
import mailIco from '../../../../img/icons/footer-icons/mail.svg';
import youtube from '../../../../img/icons/footer-icons/youtube.svg';
import FormFeedback from '../../../FeedbackForm/Form';

const FooterDesktop = () => {
  return (
    <Section>
      <LinksWrapper>
        <LinksTitle>Quick links</LinksTitle>
        <LinkList>
          <LinkItem>Marketing</LinkItem>
          <LinkItem>Promotion</LinkItem>
          <LinkItem>Branding</LinkItem>
          <LinkItem>Social media</LinkItem>
          <LinkItem>Development</LinkItem>
        </LinkList>
        <LinksTitle>Contacts</LinksTitle>
        <Contacts>
          <LinkItem>
            <ContactLink type="email" href="info@resonate.com.ua">
              info@resonate.com.ua
            </ContactLink>
          </LinkItem>
          <LinkItem>
            <ContactLink type="tel" href="+380671200002">
              +380671200002
            </ContactLink>
          </LinkItem>
        </Contacts>
        <LinksTitle>Follow</LinksTitle>
        <SocialLinkList>
          <IconItem>
            <Icon src={insta} alt="insta" />
          </IconItem>
          <IconItem>
            <Icon src={facebook} alt="insta" />
          </IconItem>
          <IconItem>
            <Icon src={be} alt="insta" />
          </IconItem>
          <IconItem>
            <Icon src={whtsp} alt="insta" />
          </IconItem>
          <IconItem>
            <Icon src={lnkdin} alt="insta" />
          </IconItem>
          <IconItem>
            <Icon src={twitter} alt="insta" />
          </IconItem>
          <IconItem>
            <Icon src={mailIco} alt="insta" />
          </IconItem>
          <IconItem>
            <Icon src={youtube} alt="insta" />
          </IconItem>
        </SocialLinkList>
        <Rsnt> &#169; resonate 2022</Rsnt>
      </LinksWrapper>
      <div>
        <Title>
          let’s <TitleTxtAccent>resonate</TitleTxtAccent> your project.
        </Title>
        <FormFeedback />
      </div>
    </Section>
  );
};
export default FooterDesktop;
