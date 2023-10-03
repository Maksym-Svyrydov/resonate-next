import Image from 'next/image';
import styled from 'styled-components';
import { Link } from 'react-scroll';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  background-color: #f5f2f0;
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
    padding-top: 100px;
    padding-left: 50px;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
    padding: 148px 155px 166px 130px;
  }
`;
export const LinkScroll = styled(Link)`
  cursor: pointer;
`;

export const LinksWrapper = styled.div`
  @media screen and (min-width: 1365px) {
    padding: 75px 0px 0px 0px;
    margin-right: 160px;
  }
  @media screen and (min-width: 1919px) {
    padding: 115px 0px 0px 0px;
    margin-right: 260px;
  }
`;
export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 43.2px */
  text-transform: uppercase;
  @media screen and (min-width: 1365px) {
    font-size: 48px;
    margin: 0px 0px 15px 0px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 64px;
    margin: 0px 0px 36px 0px;
  }
`;
export const TitleTxtAccent = styled.span`
  color: #cbbe9c;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-decoration-line: underline;
  text-transform: uppercase;
  margin: 0;
`;
export const TitleServices = styled.h3`
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  text-transform: uppercase;
  margin: 0px 0px 13px 0px;
  @media screen and (min-width: 1365px) {
    margin: 0px 0px 8px 0px;
    font-size: 18px;
  }

  @media screen and (min-width: 1919px) {
    margin: 0px 0px 13px 0px;
    font-size: 24px;
  }
`;
export const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0px 0px 0px 0px;

  @media screen and (min-width: 1365px) {
    width: 650px;
    gap: 32px;
    margin: 0px 0px 12px 0px;
  }

  @media screen and (min-width: 1919px) {
    width: 900px;
    gap: 40px;
    margin: 0px 0px 25px 0px;
  }
`;
export const ServicesItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border: 1px solid #283340;
  color: #283340;
  ${'' /* margin: 0px 57px 43px 0px; */}
  @media screen and (min-width: 1365px) {
    width: 140px;
    height: 32px;
    font-size: 14px;
  }

  @media screen and (min-width: 1919px) {
    width: 212px;
    height: 49px;
    font-size: 18px;
  }
`;
export const QuestionTxt = styled.p`
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  padding: 0px 25px 0px 0px;
  @media screen and (min-width: 1365px) {
    margin: 0px 0px 8px 0px;
    font-size: 18px;
  }

  @media screen and (min-width: 1919px) {
    margin: 0px 0px 16px 0px;
    font-size: 24px;
  }
`;
export const QuestionList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;

  padding: 0;

  @media screen and (min-width: 1365px) {
    margin: 0px 0px 12px 0px;
    gap: 10px;
  }

  @media screen and (min-width: 1919px) {
    margin: 0px 0px 28px 0px;
    gap: 15px;
  }
`;
export const QuestionItem = styled.li`
  display: flex;
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
  @media screen and (min-width: 1365px) {
    width: 140px;
    height: 32px;
    font-size: 14px;
  }
  @media screen and (min-width: 1919px) {
    width: 156px;
    height: 48px;
    font-size: 18px;
  }
`;
export const ContactTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  text-transform: uppercase;

  @media screen and (min-width: 1365px) {
    margin: 0px 0px 8px 0px;
    font-size: 18px;
  }

  @media screen and (min-width: 1919px) {
    margin: 0px 0px 18px 0px;
    font-size: 24px;
  }
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
  margin: 0px 0px 70px 0px;
`;
export const FormInput = styled.input`
  font-size: 24px;
  color: #283340;

  background: #f5f2f0;
  border: 1px solid #283340;
  padding: 6px 10px;
  @media screen and (min-width: 1365px) {
    font-size: 18px;
    margin: 0px 0px 12px 0px;
  }

  @media screen and (min-width: 1919px) {
    margin: 0px 0px 20px 0px;
    font-size: 24px;
  }
`;
export const Textarea = styled.textarea`
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
  @media screen and (min-width: 1365px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
export const ButtonSubmit = styled.button`
  cursor: pointer;
  color: #283340;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: 3px solid #283340;
  margin: 0 auto;
  @media screen and (min-width: 1365px) {
    font-size: 18px;
    width: 180px;
    height: 38px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 20px;
    width: 212px;
    height: 49px;
  }
`;
export const LinksTitle = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  text-transform: uppercase;
  margin: 0px 0px 11px 0px;
  padding: 0;
  @media screen and (min-width: 1365px) {
    font-size: 19px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px 0px 28px 0px;
`;
export const LinkItem = styled.li`
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 28.8px */
  padding: 0;
  margin: 0px 0px 11px 0px;
  text-decoration: none;
  @media screen and (min-width: 1365px) {
    font-size: 19px;
    height: 23px;
    transition: 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    &:hover,
    :focus {
      color: #283340;
      font-size: 20px;
      font-weight: 800;
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
export const Contacts = styled.ul`
  list-style: none;
  padding: 0;

  @media screen and (min-width: 1365px) {
    margin: 0px 0px 25px 0px;
  }

  @media screen and (min-width: 1919px) {
    margin: 0px 0px 51px 0px;
  }
`;
export const ContactLink = styled.a`
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  color: #283340;
  @media screen and (min-width: 1365px) {
    font-size: 19px;
  }

  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
export const SocialLinkList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 10px 5px;
  gap: 32px;
  overflow: hidden;
  @media screen and (min-width: 1365px) {
    margin: 0px 0px 20px 0px;
    width: 300px;
  }

  @media screen and (min-width: 1919px) {
    margin: 0px 0px 83px 0px;
  }
`;
export const IconItem = styled.li`
  display: flex;
  padding: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  :focus {
    outline: 2px solid #283340;
  }
`;
export const Icon = styled(Image)`
  width: 24px;
  height: 24px;
  fill: #283340;
  margin: 0px 0px 0px 0px;
  align-items: center;
  justify-content: center;
  transition: 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  :focus {
    transform: scale(1.2);
    fill: tomato;
  }
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
export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 1px solid #283340;
  color: #283340;
  ${'' /* margin: 0px 57px 43px 0px; */}
  @media screen and (min-width: 1365px) {
    width: 140px;
    height: 32px;
    font-size: 14px;
  }

  @media screen and (min-width: 1919px) {
    width: 212px;
    height: 49px;
    font-size: 18px;
  }
`;
export const Checkbox = styled.input`
  ${'' /* display: none; */}
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  appearance: none;
`;
export const CheckboxContainer = styled.ul`
  label {
    cursor: pointer;
  }
  input:checked {
    & + label {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      border: 1px solid #283340;
      color: #cbbe9c;
      background-color: #283340;

      @media screen and (min-width: 1365px) {
        width: 140px;
        height: 32px;
        font-size: 14px;
      }

      @media screen and (min-width: 1919px) {
        width: 212px;
        height: 49px;
        font-size: 18px;
      }
    }
  }
`;
