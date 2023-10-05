import { useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Section, Wrapper, Title, SubTitile, Text } from './Privacy.styled';

export const PrivacyArt = () => {
  const [screen, setScreen] = useState(() => window.innerWidth);
  useState(() => setScreen(window.innerWidth));

  return (
    <Section>
      {screen > 1365 && <ContactForm />}
      <Wrapper>
        <Title>Who we are</Title>
        <Text>
          This website is operated by Resonate LTD. The privacy of our user
          Resonate LTD (&#39;we&#39;, &#39;us&#39;, &#39;our&#39;) collect, use
          and are responsible for storing certain personal information about you
          (&#39;you&#39;, &#39;your&#39;, &#39;yours&#39;). Resonate LTD
          (&#39;we&#39;, &#39;us&#39;, &#39;our&#39;) collect, use and are
          responsible for storing certain personal information about you
          (&#39;you&#39;, &#39;your&#39;, &#39;yours&#39;).s is extremely
          important to us and therefore we encourage all users to read this
          policy very carefully because it contains important information
          regarding:who we are;how and why we collect, store, use and share
          personal information;your rights in relation to your personal
          information; and how to contact us and supervisory authorities in the
          event that you have a complaint.
        </Text>
        <SubTitile>The personal information we collect and use</SubTitile>
        <Text>
          Personal information is information which you can be identified from
          (and does not include any anonymised forms of information).
        </Text>
        <Text>
          1. Types of personal information We may process the following types of
          personal information in relation to you: Contact details such us:
          email addresses, full names or telephone numbers
        </Text>
        <SubTitile>How your personal information is collected</SubTitile>
        <Text>
          This section describes how the above types of personal information are
          collected by us. Your personal information will be collected as
          follows:
        </Text>
        <Text>
          1. Personal information obtained from you directly We will sometimes
          obtain information from you directly, including when you:subscribe to
          the newsletter or contact us using the contact forms or chat service.
        </Text>
        <Text>
          2. Changes to the way in which we collect your personal information In
          the event that we need to obtain personal information in relation to
          you from any other source than those described above, we shall notify
          you of this.
        </Text>
        <SubTitile>How we use your personal information</SubTitile>
        <Text>
          1. General purposes In general, your personal information will
          generally be processed for the following purposes: Contact purposes
          only.
        </Text>
        <Text>
          2. Monitoring We may monitor communications, and in doing so we may
          obtain your personal information through this process. We will
          undertake monitoring in the following circumstances: Emails and forms
          submissions can be monitored for quality assurance.
        </Text>
        <SubTitile>How we use your personal information</SubTitile>
        <Text>
          We have described above the purposes for which we may process your
          personal information. These purposes will at all times be justified by
          data protection law.
        </Text>
        <Text>1. General lawful bases</Text>
        <Text>
          The lawful basis upon which we are able to process your personal data
          are:
        </Text>
        <Text>
          (1) where we have your consent to use your data for a specific
          purpose;
        </Text>
        <Text>
          (2) where it is necessary to enter into a legal contract with you or
          to perform obligations under a legal contract with you;
        </Text>
        <Text>
          (3) where it is necessary to enable us to comply with a legal
          obligation;
        </Text>
        <Text>
          (4) where it is necessary to ensure our own legitimate interests or
          the legitimate interests of a third party (provided that your own
          interests and rights do not override those interests). Wherever we
          rely upon this basis, details of the legitimate interests concerned
          shall be provided to you;
        </Text>
        <Text>
          (5) where we need to protect your own vital interests (or the vital
          interests of another person); and/or
        </Text>
        <Text>
          (6) where it is needed in the public interest (or where we are acting
          in our official functions), provided that the task or function has a
          clear basis in law.
        </Text>
        <Text>
          In general, in order to meet the purposes we have described above, we
          will process your personal information where it is necessary to comply
          with legal obligations which we are required to adhere to.
        </Text>
        <Text>
          2. Lawful bases specifically applicable to marketing We will only ever
          use your personal information to send you marketing directly where we
          have your explicit consent (which will be obtained in a format
          separately to this policy).
        </Text>
        <SubTitile>Sharing of your personal information</SubTitile>
        <Text>
          On any occasion where any of your personal information is shared with
          any third party, we shall only permit them to process such information
          for our required purposes, under our specific instruction, and not for
          their own purposes. We are required to enter into a formal legal
          agreement to enable such sharing to take place.
        </Text>
        <SubTitile>How long your personal information will be kept</SubTitile>
        <Text>
          Your personal information will only be kept for the period of time
          which is necessary for us to fulfil the above purposes. We envisage
          that your personal information shall be retained by us for the
          following:
        </Text>
        <Text>Contact purposes only.</Text>
        <Text>
          After the period described above, your information shall be properly
          deleted or anonymised.
        </Text>
        <Text>Keeping your information secure</Text>
        <Text>
          We will ensure the proper safety and security of your personal
          information and have measures in place to do so. We will also use
          technological and organisation measures to keep your information
          secure. These measures are as follows:
        </Text>
        <Text>
          All data is stored on secure servers and your details are encrypted
          using SSL.
        </Text>
        <Text>
          We have proper procedures in place to deal with any data security
          breach, which shall be reported and dealt with in accordance with data
          protection laws and regulations. You shall also be notified of any
          suspected data breach concerning your personal information.
        </Text>
        <SubTitile>Children</SubTitile>
        <Text>
          Our website is not intended for children (anybody under the age of
          18). We do not intend to collect data from children.
        </Text>
        <SubTitile>Your rights</SubTitile>
        <Text>
          Under the General Data Protection Regulation you have a number of
          important rights free of charge. In summary, those include rights to:
        </Text>
        <Text>
          (1) fair processing of information and transparency over how we use
          your use personal information;
        </Text>
        <Text>
          (2) access to your personal information and to certain other
          supplementary information that this Privacy Statement is already
          designed to address;
        </Text>
        <Text>
          (3) require us to correct any mistakes in your information which we
          hold;
        </Text>
        <Text>
          (4) require the erasure of personal information concerning you in
          certain situations;
        </Text>
        <Text>
          (5) receive the personal information concerning you which you have
          provided to us, in a structured, commonly used and machine-readable
          format and have the right to transmit this information to a third
          party in certain situations;
        </Text>
        <Text>
          (6) object at any time to processing of personal information
          concerning you for direct marketing;
        </Text>
        <Text>
          (7) object to decisions being taken by automated means which produce
          legal effects concerning you or similarly significantly affect you;
        </Text>
        <Text>
          (8) object in certain other situations to our continued processing of
          your personal information, or ask us to suspend the processing
          procedure in order for you confirm its assurance or our reasoning for
          processing it;
        </Text>
        <Text>
          (9) object to processing our your personal information where we are
          doing so in reliance upon a legitimate interest of our own or of a
          third party and where you wish to raise to an objection to this
          particular ground;
        </Text>
        <Text>
          (10) otherwise restrict our processing of your personal information in
          certain circumstances;
        </Text>
        <Text>
          (11) claim compensation for damages caused by our breach of any data
          protection laws; and/or
        </Text>
        <Text>
          (12) in any circumstance where we rely upon your consent for
          processing personal information, you may withdraw this consent at any
          time.
        </Text>
        <Text>
          If you would like to exercise any of these rights please contact
          Resonate LTD in the following manner: via email to
          info@resonate.com.ua
        </Text>
        <SubTitile>Your Requirements</SubTitile>
        <Text>
          If you would like this policy in another format (for example: audio,
          large print, braille) please contact us using the details below.
        </Text>
        <SubTitile>Contacting us</SubTitile>
        <Text>
          Any requests or questions regarding the use of your personal
          information should be made to the above named person using the
          following method: via email to info@resonate.com.ua
        </Text>
      </Wrapper>
    </Section>
  );
};
