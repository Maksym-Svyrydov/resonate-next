import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import quote from 'public/img/quote.svg';
// import Slider from 'react-slick';
import {
  ReviewsCustomers,
  WrapperReview,
  ReviewTextItem,
  Quote,
  QuoteImg,
  CustomerWrapper,
  CustomerAvatar,
  CustomerNameWrapper,
  CustomerName,
  CustomerCompany,
  ButtonBox,
  ButtonList,
} from './Slider_reviews.styled';
import avatCustomer from 'public/img/Customers-avatars/Igor_Radchenko.png';
import OleksiiChepelyk from 'public/img/Customers-avatars/Oleksii_Chepelyk.png';
import DmitryKaranda from 'public/img/Customers-avatars/Dmitry_Karanda.png';
import CashYou from 'public/img/Customers-avatars/CEO Cash You.png';
import KinanAntar from 'public/img/Customers-avatars/Kinan_Antar.png';
export const SliderReviews = () => {
  const appendDots = (dots) => (
    <ButtonBox
    // style={{
    //   backgroundColor: '#ddd',
    //   borderRadius: '10px',
    //   padding: '10px',
    // }}
    >
      <ButtonList> {dots} </ButtonList>
    </ButtonBox>
  );

  // const customPaging = (i) => (
  //   <div
  //     style={{
  //       width: '20px',
  //       color: 'blue',
  //       border: '1px blue solid',
  //     }}
  //   >
  //     {i + 1}
  //   </div>
  // );

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendDots: appendDots,
    // customPaging: customPaging,
  };
  return (
    <>
      <ReviewsCustomers {...settings}>
        <WrapperReview key={1}>
          <li>
            <Quote>
              <QuoteImg src={quote} alt="quote" />
            </Quote>
          </li>
          <ReviewTextItem>
            Resonate is a great partner and helps us drive traffic and
            conversions to our company platform. They contribute enormously to
            our growth with an excellent return on investment in our campaigns.
            They are fast, flexible and have a deep understanding of what they
            are doing.
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={avatCustomer} alt="Igor Radchenko" />
            <CustomerNameWrapper>
              <CustomerName>Igor Radchenko</CustomerName>
              <CustomerCompany>CEO | Vikno System</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
        <WrapperReview key={2}>
          <li>
            <Quote>
              <QuoteImg src={quote} alt="quote" />
            </Quote>
          </li>
          <ReviewTextItem>
            I would highly recommend Convert 4 if you&apos;re looking for an
            analytical consultant that can help you find the gaps of opportunity
            that are presently in your business.
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={OleksiiChepelyk} alt="Igor Radchenko" />
            <CustomerNameWrapper>
              <CustomerName>Oleksii Chepelyk</CustomerName>
              <CustomerCompany>CEO | Startup.inc</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
        <WrapperReview key={3}>
          <li>
            <Quote>
              <QuoteImg src={quote} alt="quote" />
            </Quote>
          </li>
          <ReviewTextItem>
            Resonate team have a lot of patience and understanding of the
            customer&apos;s business problem. Together with their experience,
            they have created with us customized and high quality solutions. We
            are very satisfied and look forward to the next project!
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={DmitryKaranda} alt="Igor Radchenko" />
            <CustomerNameWrapper>
              <CustomerName>Dmitry Karanda</CustomerName>
              <CustomerCompany>CEO | Orion City</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
        <WrapperReview key={4}>
          <li>
            <Quote>
              <QuoteImg src={quote} alt="quote" />
            </Quote>
          </li>
          <ReviewTextItem>
            For any business looking to take stock, build, or drive forward to
            the next level - I couldn’t recommend Resonate enough. You honestly
            get the best of both worlds - senior marketing experience and
            expertise, without having to add huge salaries to the payroll
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={CashYou} alt="Igor Radchenko" />
            <CustomerNameWrapper>
              <CustomerName>Igor Radchenko</CustomerName>
              <CustomerCompany>CEO | CashYou</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
        <WrapperReview key={5}>
          <li>
            <Quote>
              <QuoteImg src={quote} alt="quote" />
            </Quote>
          </li>
          <ReviewTextItem>
            As consultants, Resonate are brimming with knowledge, experience and
            enthusiasm.
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={KinanAntar} alt="Igor Radchenko" />
            <CustomerNameWrapper>
              <CustomerName>Kinan Antar</CustomerName>
              <CustomerCompany>Owner | Overdose</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
      </ReviewsCustomers>
    </>
  );
};
