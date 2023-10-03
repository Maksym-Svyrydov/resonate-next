import { Formik, Form } from 'formik';
import { useState } from 'react';
import {
  CheckboxContainer,
  Wrapper,
  Checkbox,
  Label,
  InputContainer,
  Input,
  ButtonSubmit,
  ContactTitle,
} from './Form.styled';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
    color: #f5f2f0;
    background: #283340;
    border: 3px solid #cbbe9c;
    border-radius: 12px;
  }
  .Toastify__progress-bar {
    background: #cbbe9c;
    height: 10px;
  }
  svg {
    fill: #cbbe9c;
  }
`;
const FormFeedback = () => {
  const [screen, setScreen] = useState(() => window.innerWidth);
  useState(() => setScreen(window.innerWidth));

  return (
    <div>
      <Formik
        initialValues={{
          id: nanoid(),
          Name: '',
          Phone: '',
          email: '',
          services: [],
          details: '',
        }}
        onSubmit={(values, onSubmitProps) => {
          const notify = () =>
            toast.success(
              `Thank you ${values.Name} for your request! We will definitely contact you soon!`
            );
          console.log(values);
          notify();
          onSubmitProps.resetForm();
        }}
      >
        <Form>
          <div id="checkbox-group">
            <h3>Services</h3>
          </div>

          <CheckboxContainer role="group" aria-labelledby="checkbox-group">
            <Wrapper>
              <Checkbox
                id="marketing"
                type="checkbox"
                name="services"
                value="Marketing"
              />
              <Label htmlFor="marketing"> Marketing</Label>
            </Wrapper>
            <Wrapper>
              <Checkbox
                id="Promotion"
                type="checkbox"
                name="services"
                value="Promotion"
              />
              <Label htmlFor="Promotion">Promotion</Label>
            </Wrapper>
            <Wrapper>
              <Checkbox
                id="social"
                type="checkbox"
                name="services"
                value="Social media"
              />
              <Label htmlFor="social">Social media</Label>
            </Wrapper>
            <Wrapper>
              <Checkbox
                id="development"
                type="checkbox"
                name="services"
                value="Development"
              />
              <Label htmlFor="development">Development</Label>
            </Wrapper>
            <Wrapper>
              <Checkbox
                id="branding"
                type="checkbox"
                name="services"
                value="Branding"
              />
              <Label htmlFor="branding">Branding</Label>
            </Wrapper>
            <Wrapper>
              <Checkbox
                id="Other"
                type="checkbox"
                name="services"
                value="Other"
              />
              <Label htmlFor="Other">Other</Label>
            </Wrapper>
          </CheckboxContainer>
          {screen < 1364 ? <ContactTitle>Contact info</ContactTitle> : <></>}
          <InputContainer>
            <Input id="Name" name="Name" placeholder="Name*" required />
            <Input id="Phone" name="Phone" placeholder="Phone" />
            <Input
              id="email"
              name="email"
              placeholder="Email*"
              type="email"
              required
            />
            <Input
              id="details"
              name="details"
              placeholder="Project details"
              type="textarea"
              required
            />
            <ButtonSubmit type="submit">Send</ButtonSubmit>
          </InputContainer>
        </Form>
      </Formik>
      <StyledContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default FormFeedback;
