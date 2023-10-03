import {
  Section,
  Title,
  List,
  Item,
  ImgWrapp,
  ImgBaner,
  ImgLogo,
  Customer,
  Name,
  Type,
  Percentage,
  DescriptionResult,
} from './Result.styled';

import intericco from 'public/img/Cases/intericoo_res.png';
import intericcoLogo from 'public/img/Customers/intericco_white.svg';
import vikno from 'public/img/Cases/vikno.png';
import viknoLogo from 'public/img/Customers/Vikno.svg';
import cashyou from 'public/img/Cases/cashyou.png';
import cashyouLogo from 'public/img/Customers/cashyou.svg';
const Result = () => {
  return (
    <Section>
      <Title>OUR CASES</Title>
      <List>
        <Item>
          <ImgWrapp>
            <ImgBaner
              src={intericco}
              alt="Intericco"
              style={{ maxWidth: '1320px', height: 'auto' }}
            />
            <ImgLogo
              src={intericcoLogo}
              alt="Intericco logo"
              style={{ maxWidth: '320px', height: 'auto' }}
            />
          </ImgWrapp>
          <Customer>
            <Name>intericco</Name>
            <Type>interior design studio</Type>
            <Percentage>916%</Percentage>
            <DescriptionResult>
              Return of marketing investment
            </DescriptionResult>
          </Customer>
        </Item>
        <Item>
          <ImgWrapp>
            <ImgBaner
              src={vikno}
              alt="ViknoSystems"
              style={{ maxWidth: '1420px', height: 'auto' }}
            />
            <ImgLogo
              src={viknoLogo}
              alt="ViknoSystems logo"
              style={{ maxWidth: '320px', height: 'auto' }}
            />
          </ImgWrapp>
          <Customer>
            <Name>ViknoSystem</Name>
            <Type>Window manufacturer</Type>
            <Percentage>4200%</Percentage>
            <DescriptionResult>Return on Ad Spend</DescriptionResult>
          </Customer>
        </Item>
        <Item>
          <ImgWrapp>
            <ImgBaner
              src={cashyou}
              alt="CashYou"
              style={{ maxWidth: '1320px', height: 'auto' }}
            />
            <ImgLogo
              src={cashyouLogo}
              alt="CashYou logo"
              style={{ width: '102px', height: '60.21px' }}
            />
          </ImgWrapp>
          <Customer>
            <Name>CashYou</Name>
            <Type>PDL Finance Company</Type>
            <Percentage>280%</Percentage>
            <DescriptionResult>
              Return of marketing investment
            </DescriptionResult>
          </Customer>
        </Item>
      </List>
    </Section>
  );
};
export default Result;
