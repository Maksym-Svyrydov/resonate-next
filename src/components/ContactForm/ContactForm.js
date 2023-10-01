import {
  FormContainer,
  Wrapper,
  Tiitle,
  TitleAccent,
  SubTitile,
  SocialContainer,
  List,
  Item,
  Link,
  Icon,
  WrapperBottom,
  TitleBottom,
  TxtAccent,
  LinkWrapper,
  LinkBottom,
} from './ContactForm.styled';
import facebookIcon from 'public/img/icons/Sticky/Facebook Icon.svg';
import telegramIcon from 'public/img/icons/Sticky/telegram.svg';
import mailIcon from 'public/img/icons/Sticky/mail.svg';
export const ContactForm = () => {
  return (
    <FormContainer>
      <Wrapper>
        <Tiitle>
          <TitleAccent>Subscribe </TitleAccent>to useful content from Resonate
        </Tiitle>
        <SubTitile>
          All fresh materials in your mail or in a convenient messenger
        </SubTitile>
        <SocialContainer>
          <List>
            <Item>
              <Link>
                <Icon src={facebookIcon} alt="facebook" />
              </Link>
            </Item>
            <Item>
              <Link>
                <Icon src={telegramIcon} alt="telegramm" />
              </Link>
            </Item>
            <Item>
              <Link>
                <Icon src={mailIcon} alt="mail" />
              </Link>
            </Item>
          </List>
        </SocialContainer>
      </Wrapper>
      <WrapperBottom>
        <TitleBottom>
          Want to <TxtAccent>become our client?</TxtAccent>
        </TitleBottom>
        <LinkWrapper>
          <LinkBottom href="/resonate">Hire us</LinkBottom>
        </LinkWrapper>
      </WrapperBottom>
    </FormContainer>
  );
};
