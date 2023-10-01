import {
  Section,
  AuthorWrap,
  AvatarWrapp,
  Avatar,
  Author,
  Name,
  Date,
  List,
  Item,
} from './Intro.styled';
import ValeriyAva from 'public/img/Customers-avatars/Valeriy.png';
export const Intro = () => {
  return (
    <Section>
      <AuthorWrap>
        <AvatarWrapp>
          <Avatar src={ValeriyAva} alt="Valeriy Fedorov" />
        </AvatarWrapp>
        <Author>
          <Name>Valerii Fedorov</Name>
          <Date>April 22, 2022 | 9 min read</Date>
        </Author>
      </AuthorWrap>
      <List>
        <Item>
          When LinkedIn was first created, it was basically a resume book on the
          internet. People would connect with others they had worked with in the
          past and share their experiences. The platform has come a long way
          since then – it is now used as a powerful business tool that can help
          you grow your company.
        </Item>
        <Item>
          While LinkedIn is not brand new, it does seem to have taken off in the
          last few years. This social media platform has introduced new
          interactive features and content to help users reach their specific
          target groups more quickly. Since LinkedIn is geared specifically
          toward professionals, it can be a great way to connect with potential
          customers and promote your products or services.
        </Item>
        <Item>
          Here we will discuss how to build a good LinkedIn strategy and how you
          can implement it quickly and almost effortlessly.
        </Item>
      </List>
    </Section>
  );
};
