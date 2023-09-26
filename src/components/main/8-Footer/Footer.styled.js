import styled from 'styled-components';
import Image from 'next/image';
export const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding-left: 22px;
  padding-right: 20px;
  padding-top: 100px;
  background: #f5f2f0;
  color: #283340;
  font-family: 'DM Sans', sans-serif;
`;
export const Title = styled.h2`
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 43.2px */
  text-transform: uppercase;
  margin: 0px 0px 36px 0px;
`;
export const TitleTxtAccent = styled.p`
  color: #cbbe9c;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-decoration-line: underline;
  text-transform: uppercase;
  margin: 0;
`;
export const TitleServices = styled.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  text-transform: uppercase;
  margin: 0px 0px 13px 0px;
`;
export const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  gap: 15px;
  padding: 0;
  margin: 0px 0px 51px 0px;
`;
export const ServicesItem = styled.li`
  display: flex;
  width: 156px;
  height: 48px;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 1px solid #283340;
  color: #283340;
  margin: 0px 0px 7px 0px;
`;
export const QuestionTxt = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0px 0px 16px 0px;
  padding: 0px 25px 0px 0px;
`;
export const QuestionList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  gap: 15px;
  padding: 0;
  margin: 0px 0px 58px 0px;
`;
export const QuestionItem = styled.li`
  display: flex;
  width: 156px;
  height: 48px;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 1px solid #283340;
  color: #283340;
  margin: 0px 0px 7px 0px;
`;
export const ContactTitle = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  text-transform: uppercase;
  margin: 0px 0px 36px 0px;
`;
export const Form = styled.form`
  display: flex;
  font-family: 'DM Sans', sans-serif;
  flex-direction: column;
  border: 1px solid #283340;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  padding: 16px 10px;
  border-radius: 4px;
  margin: 0px 0px 70px 0px;
`;
export const FormInput = styled.input`
  font-size: 24px;
  color: #283340;
  margin: 0px 0px 20px 0px;
  background: #f5f2f0;
  border: 1px solid #283340;
  padding: 6px 10px;
`;
export const Textarea = styled.textarea`
  font-size: 24px;
  font-family: 'DM Sans', sans-serif;
  color: #283340;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  background: #f5f2f0;
  margin: 0px 0px 28px 0px;
  resize: none;
  cursor: pointer;
  padding: 6px 10px;
`;
export const ButtonSubmit = styled.button`
  cursor: pointer;
  color: #283340;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 212px;
  height: 49px;
  border: 3px solid #283340;
  margin: 0 auto;
`;
export const LinksTitle = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  text-transform: uppercase;
  margin: 0px 0px 11px 0px;
  padding: 0;
`;
export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px 0px 28px 0px;
`;
export const LinkItem = styled.li`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 28.8px */
  padding: 0;
  margin: 0px 0px 11px 0px;
  text-decoration: none;
`;
export const Contacts = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px 0px 51px 0px;
`;
export const ContactLink = styled.a`
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #283340;
`;
export const SocialLinkList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 10px 0px;
  margin: 0px 0px 83px 0px;
`;
export const IconItem = styled.li`
  padding: 0;
  margin: 0px 35px 11px 0px;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled(Image)`
  width: 24px;
  height: 25px;
  fill: #283340;
  margin: 0px 0px 0px 0px;
  align-items: center;
  justify-content: center;
`;
export const Rsnt = styled.p`
  color: #283340;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0px;
  margin: 0px 0px 32px 0px;
`;
