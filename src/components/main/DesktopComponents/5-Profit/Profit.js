import { Section } from './Profit.styled';
import profitImg from '../../../../img/Profit_img.png';
import ButtonMore from '../../../Button-more/ButtonMore';
import {
  TextWrapperTitle,
  TextTitle,
  TextCremeColor,
  TextWhiteColor,
  ImgWrapper,
  Img,
  TextWrapper,
  TitleCremeColor,
  TitleWhiteColor,
  Text,
  BtnWrapper,
} from './Profit.styled';

const ProfitFormula = () => {
  return (
    <Section>
      <TextWrapperTitle>
        <TextTitle>
          <TextWhiteColor>Using the </TextWhiteColor>
          <TextCremeColor>profit formula</TextCremeColor>
          <TextWhiteColor>, we bring </TextWhiteColor>
          <TextCremeColor>high-quality leads </TextCremeColor>
          <TextWhiteColor>to your business, increase the </TextWhiteColor>
          <TextCremeColor>conversion into a purchase, </TextCremeColor>
          <TextWhiteColor>increase the </TextWhiteColor>
          <TextCremeColor>average bill </TextCremeColor>
          <TextWhiteColor>and increase the </TextWhiteColor>
          <TextCremeColor>LTV.</TextCremeColor>
        </TextTitle>
        <ImgWrapper>
          <Img src={profitImg} alt="Profit-formula" />
        </ImgWrapper>
      </TextWrapperTitle>
      <TextWrapper>
        <TitleCremeColor>PROFIT FORMULA</TitleCremeColor>
        <Text>
          Model describing 17 components of profit. Thanks to this model, you
          can decompose the profit into parameters and determine which
          parameters you need to work with first
        </Text>

        <TitleWhiteColor>6 SIGMA</TitleWhiteColor>
        <Text>
          A statistical method that allows you to optimize / improve the
          processes in the company. The method is used to assess the improvement
          in the quality of management
        </Text>
        <TitleWhiteColor>LCPQ</TitleWhiteColor>
        <Text>
          Leads/Conversion/Average check/Frequency. A minimal formula model that
          allows it to be used even by companies that up to this point only kept
          records of the most basic indicators
        </Text>
        <BtnWrapper>
          <ButtonMore />
        </BtnWrapper>
      </TextWrapper>
    </Section>
  );
};
export default ProfitFormula;
