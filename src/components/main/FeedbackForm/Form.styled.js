import styled from 'styled-components';
import Image from 'next/image';
import { Field } from 'formik';
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 1364px) {
    gap: 45px;
    width: 100%;
    margin-bottom: 30px;
    justify-content: center;
  }
  @media screen and (min-width: 1365px) {
    width: 850px;
    gap: 40px;
    margin-bottom: 45px;
  }
`;
export const Wrapper = styled.div`
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

      @media screen and (max-width: 1364px) {
        width: 140px;
        height: 32px;
        font-size: 14px;
      }
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
export const Checkbox = styled(Field)`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  appearance: none;
`;
export const Label = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 1px solid #283340;
  color: #283340;

  @media screen and (max-width: 1364px) {
    width: 140px;
    height: 32px;
    font-size: 14px;
  }
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
export const ContactTitle = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
  text-transform: uppercase;
  margin: 0px 0px 36px 0px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  gap: 25px;
  @media screen and (max-width: 1364px) {
    width: 100%;
  }
`;
export const Input = styled(Field)`
  font-size: 24px;
  color: #283340;
  background: #f5f2f0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #283340;
  padding: 6px 10px;
  @media screen and (max-width: 1364px) {
    ${'' /* width: 100%; */}
    font-size: 16px;
    margin: 0px 0px 12px 0px;
  }
  @media screen and (min-width: 1365px) {
    font-size: 18px;
    margin: 0px 0px 12px 0px;
  }

  @media screen and (min-width: 1919px) {
    margin: 0px 0px 20px 0px;
    font-size: 24px;
  }
`;
export const ButtonSubmit = styled.button`
  border: 1px solid #283340;
  margin: 25px auto 0px 0px;
  color: #283340;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media screen and (max-width: 1364px) {
    width: 140px;
    height: 42px;
    font-size: 14px;
    margin: 25px auto 25px 0px;
  }
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
