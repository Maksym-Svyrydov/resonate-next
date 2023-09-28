import {
  Section,
  Title,
  TitleTxtAccent,
  LinksTitle,
  LinkList,
  Contacts,
  LinkItem,
  ContactLink,
  SocialLinkList,
  IconItem,
  Icon,
  Rsnt,
  LinkScroll,
} from './Footer.styled';
import insta from 'public/img/icons/footer-icons/instagaram.svg';
import facebook from 'public/img/icons/footer-icons/facebook.svg';
import be from 'public/img/icons/footer-icons/Be.svg';
import whtsp from 'public/img/icons/footer-icons/whatsup.svg';
import lnkdin from 'public/img/icons/footer-icons/linkiedIn.svg';
import twitter from 'public/img/icons/footer-icons/twitter.svg';
import mailIco from 'public/img/icons/footer-icons/mail.svg';
import youtube from 'public/img/icons/footer-icons/youtube.svg';
import FeedbackForm from '../FeedbackForm/Form';
const Footer = ({ ...props }) => {
  const { mobile, desktop } = props;

  console.log('mobile', mobile);
  console.log('desktop', desktop);

  // console.log(marketing.current);
  // const scrollHandler = () => {
  // scrollIntoView({
  //     behavior: 'smooth',
  //   });
  // };
  // const scrollHandler = (elemRef) => {
  //   console.log(elemRef.current);
  //   window.scrollTo({ top: elemRef.current.offsetTop, behavior: 'smooth' });
  // };
  return (
    <Section>
      <Title>
        let’s <TitleTxtAccent>resonate</TitleTxtAccent> your project.
      </Title>
      {/* <TitleServices>SERVICES</TitleServices> */}
      {/* <ServicesList>
        <ServicesItem>Marketing</ServicesItem>
        <ServicesItem>Promotion</ServicesItem>
        <ServicesItem>Social media</ServicesItem>
        <ServicesItem>Development</ServicesItem>
        <ServicesItem>Branding</ServicesItem>
        <ServicesItem>Other</ServicesItem>
      </ServicesList>
      <QuestionTxt>Have you filled out our brief yet?</QuestionTxt>
      <QuestionList>
        <QuestionItem>Yes I did</QuestionItem>
        <QuestionItem>Download</QuestionItem>
      </QuestionList> */}
      {/* <ContactTitle>Contact info</ContactTitle> */}
      <FeedbackForm />
      {/* <Form onSubmit={handleSubmitForm}>
        <FormInput
          id="name"
          type="text"
          name="name"
          required
          placeholder="Name*"
        />
        <FormInput id="phone" type="tel" name="phone" placeholder="Phone*" />
        <FormInput type="email" name="email" placeholder="Email" />
        <Textarea
          id="details"
          type="text"
          name="details"
          placeholder="Project details"
        />
        <ButtonSubmit type="submit">SEND</ButtonSubmit>
      </Form> */}

      <LinksTitle>Quick links</LinksTitle>
      <LinkList>
        {mobile ? (
          <>
            <LinkItem>
              <LinkScroll
                to="Marketing"
                spy={true}
                smooth={true}
                duration={500}
              >
                Marketing
              </LinkScroll>
            </LinkItem>
            <LinkItem>
              <LinkScroll to="Promo" spy={true} smooth={true} duration={500}>
                Promotion
              </LinkScroll>
            </LinkItem>
            <LinkItem>
              <LinkScroll to="Branding" spy={true} smooth={true} duration={500}>
                Branding
              </LinkScroll>
            </LinkItem>
            <LinkItem>
              <LinkScroll to="Social" spy={true} smooth={true} duration={500}>
                Social media
              </LinkScroll>
            </LinkItem>
            <LinkItem>
              <LinkScroll
                to="Development"
                spy={true}
                smooth={true}
                duration={500}
              >
                Development
              </LinkScroll>
            </LinkItem>
          </>
        ) : (
          'null'
        )}
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
    </Section>
  );
};
export default Footer;
