import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
// import Slider from 'react-slick';
import {
  ReviewsCustomers,
  WrapperReview,
  ReviewTextItem,
  CustomerWrapper,
  CustomerAvatar,
  CustomerNameWrapper,
  CustomerName,
  CustomerCompany,
  ButtonBox,
  ButtonList,
} from './Slider_reviews.styled';
import avatCustomer from '../../../../public/img/Customers-avatars/Igor_Radchenko.png';
import karanda from '../../../../public/img/Customers-avatars/Dmitry_Karanda.png';
import kinan from '../../../../public/img/Customers-avatars/Kinan_Antar.png';
import chepelyk from '../../../../public/img/Customers-avatars/Oleksii_Chepelyk.png';
import cashyou from '../../../../public/img/Customers-avatars/CEO Cash You.png';

export const SliderReviews = () => {
  const appendDots = (dots) => (
    <ButtonBox>
      <ButtonList> {dots} </ButtonList>
    </ButtonBox>
  );

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: appendDots,
  };

  return (
    <>
      <ReviewsCustomers {...settings}>
        <WrapperReview key={1}>
          <ReviewTextItem>
            Resonate is a great partner and helps us drive traffic and
            conversions to our company platform. They contribute enormously to
            our growth with an excellent return on investment in our campaigns.
            They are fast, flexible and have a deep understanding of what they
            are doing.
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar
              src={avatCustomer}
              alt="Igor Radchenko"
              width={82}
            />
            <CustomerNameWrapper>
              <CustomerName>Igor Radchenko</CustomerName>
              <CustomerCompany>CEO | Vikno System</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
        <WrapperReview key={2}>
          <ReviewTextItem>
            I would highly recommend Convert 4 if you're looking for an
            analytical consultant that can help you find the gaps of opportunity
            that are presently in your business.
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={chepelyk} alt="Oleksii Chepelyk" width={82} />
            <CustomerNameWrapper>
              <CustomerName>Oleksii Chepelyk</CustomerName>
              <CustomerCompany>CEO | Startup.inc</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
        <WrapperReview key={3}>
          <ReviewTextItem>
            Resonate team have a lot of patience and understanding of the
            customer's business problem. Together with their experience, they
            have created with us customized and high quality solutions. We are
            very satisfied and look forward to the next project!
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={karanda} alt="Dmitry Karanda" width={82} />
            <CustomerNameWrapper>
              <CustomerName>Dmitry Karanda</CustomerName>
              <CustomerCompany>CEO | Orion City</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
        <WrapperReview key={4}>
          <ReviewTextItem>
            For any business looking to take stock, build, or drive forward to
            the next level - I couldn’t recommend Resonate enough. You honestly
            get the best of both worlds - senior marketing experience and
            expertise, without having to add huge salaries to the payroll
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={cashyou} alt="Igor Radchenko" width={82} />
            <CustomerNameWrapper>
              <CustomerName>Igor Radchenko</CustomerName>
              <CustomerCompany>CEO | CashYou</CustomerCompany>
            </CustomerNameWrapper>
          </CustomerWrapper>
        </WrapperReview>
        <WrapperReview key={5}>
          <ReviewTextItem>
            As consultants, Resonate are brimming with knowledge, experience and
            enthusiasm.
          </ReviewTextItem>
          <CustomerWrapper>
            <CustomerAvatar src={kinan} alt="Kinan Antar" width={82} />
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
