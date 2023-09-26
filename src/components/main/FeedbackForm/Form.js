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
import { nanoid } from 'nanoid';

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
          console.log(values);
          // console.log(values.Name);
          onSubmitProps.resetForm();
          alert(`Dear ${values.Name} we are callback you!`);
        }}
      >
        <Form>
          <div id="checkbox-group">
            <h3>Services</h3>
          </div>

          <CheckboxContainer role="group" aria-labelledby="checkbox-group">
            <Wrapper>
              <Checkbox
                id="Marketing"
                type="checkbox"
                name="services"
                value="Marketing"
              />
              <Label htmlFor="Marketing"> Marketing</Label>
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
                id="Social"
                type="checkbox"
                name="services"
                value="Social media"
              />
              <Label htmlFor="Social">Social media</Label>
            </Wrapper>
            <Wrapper>
              <Checkbox
                id="Development"
                type="checkbox"
                name="services"
                value="Development"
              />
              <Label htmlFor="Development">Development</Label>
            </Wrapper>
            <Wrapper>
              <Checkbox
                id="Branding"
                type="checkbox"
                name="services"
                value="Branding"
              />
              <Label htmlFor="Branding">Branding</Label>
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
    </div>
  );
};

export default FormFeedback;
