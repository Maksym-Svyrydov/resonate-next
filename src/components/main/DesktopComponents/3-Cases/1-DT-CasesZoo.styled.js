import styled from 'styled-components';
import Image from 'next/image';
// import bgImg from '../../../../img/Cases/Zoo-Bg-Img.png';

export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  background-color: #283340;

  @media screen and (min-width: 370px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
    flex-direction: row;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
    flex-direction: row;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  width: 748px;
  height: 1080px;
  flex-direction: row;
  @media screen and (max-width: 1364px) {
    padding-top: 115px;
    width: 100%;
    height: 430px;
  }
  @media screen and (min-width: 1365px) {
    width: 39%;
    height: 768px;
    background-size: 580px auto;
  }
  @media screen and (min-width: 1919px) {
    background-size: 800px auto;
    width: 748px;
    height: 1080px;
  }
`;
export const TitleWrapp = styled.div`
  width: 521px;
  height: 335.343px;
  margin: auto 113px;
  position: relative;
  z-index: 1;

  background-blend-mode: overlay;
  @media screen and (max-width: 1364px) {
    margin: 0;
    width: 100%;
    height: 100%;
    padding-left: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const BgImage = styled(Image)`
  z-index: -1;
  position: relative;
  width: 100%;
  height: 430px;
`;
export const TextTitle = styled.p`
  color: #f5f2f0;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin: 0px;
  padding: 0px;

  @media screen and (max-width: 1364px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1365px) {
    font-size: 34px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 48px;
  }
`;
export const LogoWrapp = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 12px;
  align-items: center;
  margin-top: 20px;
  @media screen and (max-width: 1365px) {
    align-items: center;
    margin-top: 20px;
    width: 100%;
    margin-right: auto;
  }
`;
export const LogoText = styled.p`
  color: #fff;
  margin: 0;
  font-weight: 700;
  letter-spacing: 5px;
  @media screen and (min-width: 1365px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 38px;
  }
`;
export const ArrowWrapper = styled.div`
  height: 100%;
  width: 150px;
  background: #283340;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 375px) {
    display: none;
  }
  @media screen and (min-width: 1365px) {
    display: flex;
    margin-right: 8px;
    margin-left: 8px;
  }
  @media screen and (min-width: 1919px) {
    display: flex;
    padding: 0px;
    margin: 0;
  }
`;
export const ArrowImg = styled(Image)`
  @media screen and (min-width: 1365px) {
    width: ' 95.315px';
    height: '110px';
  }
  @media screen and (min-width: 1919px) {
    width: ' 114.315px';
    height: '128px';
  }
`;
export const TextAccent = styled.span`
  color: #cbbe9c;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-decoration-line: underline;
  margin-left: 20px;
  @media screen and (min-width: 1365px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 48px;
  }
`;
export const Logo = styled(Image)`
  @media screen and (max-width: 1364px) {
    width: 200px;
    height: 84.815px;
    margin-top: 20px;
    margin-right: auto;
  }
  @media screen and (min-width: 1365px) {
    width: 110.32px;
    height: 100.343px;
  }
  @media screen and (min-width: 1919px) {
    width: 132.32px;
    height: 129.343px;
  }
`;
export const InfoLayout = styled.div`
  background: #283340;
  display: flex;
  flex-direction: row;
  color: #f5f2f0;
  @media screen and (max-width: 1364px) {
    flex-direction: column;
  }
`;

export const DecriptionSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-right: 15px;
  @media screen and (max-width: 1364px) {
    flex-direction: column;
    padding-right: 0px;
  }
`;
export const TextWrapper = styled.div`
  margin-right: 25px;
`;
export const CaseTitle = styled.h2`
  color: #f5f2f0;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 1364px) {
    display: none;
  }
  @media screen and (min-width: 1365px) {
    margin-top: 118px;
    margin-bottom: 22px;
    font-size: 42px;
  }
  @media screen and (min-width: 1919px) {
    margin-top: 118px;
    margin-bottom: 52px;
    font-size: 72px;
  }
`;
export const CaseList = styled.ul`
  @media screen and (min-width: 1365px) {
    margin-bottom: 45px;
  }
  @media screen and (min-width: 1919px) {
    margin-bottom: 73px;
  }
`;
export const CaseListTitle = styled.li`
  color: #f5f2f0;
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  list-style: none;
  margin-bottom: 3px;
  @media screen and (max-width: 1364px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1365px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
export const CaseItem = styled.li`
  color: #f5f2f0;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2px;
  @media screen and (max-width: 1364px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1365px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 18px;
  }
`;
export const GoalWrapper = styled.div`
  border: 1px solid #cbbe9c;
  flex-shrink: 0;
  color: #f5f2f0;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 1364px) {
    width: 343px;
    height: 498px;
    margin: 0px auto 37px auto;
    padding: 10px 10px;
    font-size: 18px;
  }
  @media screen and (min-width: 1365px) {
    max-width: 340px;
    max-height: 260px;
    font-size: 12px;
    padding: 10px 10px;
    margin-bottom: 197px;
  }
  @media screen and (min-width: 1919px) {
    max-width: 565px;
    max-height: 362px;
    font-size: 18px;
    padding: 38px 27px;
    margin-bottom: 197px;
  }
`;
export const GoalTitle = styled.h3`
  color: #f5f2f0;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  @media screen and (max-width: 1364px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1365px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;
export const TimeLineLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const TimeLayout = styled.div``;
export const ProjectWrap = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const ProjectTitle = styled.h3`
  color: #f5f2f0;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  @media screen and (max-width: 1364px) {
    padding: 35px 0px 0px 32px;
    margin: 0px 0px 18px 0px;
    font-size: 24px;
  }
  @media screen and (min-width: 1365px) {
    padding: 197px 0px 0px 20px;
    margin: 0px 0px 27px 0px;
    font-size: 18px;
  }
  @media screen and (min-width: 1919px) {
    padding: 264px 0px 0px 20px;
    margin: 0px 0px 18px 0px;
    font-size: 24px;
  }
`;
export const TimeList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding-top: 0px;
  @media screen and (min-width: 1365px) {
    padding: 7px;
    width: 15px;
    padding-top: 0px;
  }
  @media screen and (min-width: 1919px) {
    padding: 10px;
    width: 20px;
    padding-top: 0px;
  }
`;
export const TimeItem = styled.li`
  @media screen and (max-width: 1364px) {
    height: 92px;
    width: 40px;
    padding-top: 0px;
    font-size: 18px;
  }

  @media screen and (min-width: 1365px) {
    height: 65px;
    width: 30px;
    padding-top: 0px;
    font-size: 12px;
  }
  @media screen and (min-width: 1919px) {
    height: 92px;
    width: 40px;
    padding-top: 0px;
    font-size: 18px;
  }
`;
export const TimeItemLast = styled.li`
  @media screen and (max-width: 1364px) {
    height: 92px;
    width: 40px;
    padding-top: 0px;
    font-size: 18px;
  }
  @media screen and (min-width: 1365px) {
    height: 65px;
    width: 30px;
    padding-top: 0px;
    font-size: 12px;
  }
  @media screen and (min-width: 1919px) {
    height: 92px;
    width: 40px;
    padding-top: 0px;
    font-size: 18px;
  }
`;
export const ListLayout = styled.ul`
  list-style: none;
  padding: 0px 0px 0px 25px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1365px) {
  }
  @media screen and (min-width: 1919px) {
    height: 350px;
  }
`;
export const ListLayoutItem = styled.li`
  list-style: none;
  padding: 0;
  @media screen and (max-width: 1364px) {
    height: 92px;
    width: 256px;
    font-size: 18px;
  }
  @media screen and (min-width: 1365px) {
    height: 65px;
    width: 300px;
    font-size: 13px;
  }
  @media screen and (min-width: 1919px) {
    height: 92px;
    width: 350px;
    font-size: 18px;
  }
`;
export const Frame = styled.div`
  position: absolute;
  border-right: 1px solid #f5f2f0;
  width: 1px;
  @media screen and (max-width: 1364px) {
    height: 470px;
    top: 18px;
    left: 93px;
  }
  @media screen and (min-width: 1365px) {
    height: 335px;
    top: 20px;
    left: 62.5px;
  }
  @media screen and (min-width: 1919px) {
    height: 470px;
    top: 0px;
    left: 65px;
  }
`;
export const CircleList = styled.ul`
  list-style: none;
  position: absolute;
  top: 0px;
  left: 16px;
  @media screen and (max-width: 1364px) {
    top: 0px;
    left: 46px;
  }
`;
export const Circle = styled.li`
  background-color: #cbbe9c;
  border-radius: 50%;
  @media screen and (max-width: 1364px) {
    margin-bottom: 71px;
    width: 21px;
    height: 21px;
  }
  @media screen and (min-width: 1365px) {
    margin-bottom: 44px;
    width: 18px;
    height: 18px;
  }
  @media screen and (min-width: 1919px) {
    margin-bottom: 71px;
    width: 21px;
    height: 21px;
  }
`;
export const CircleProcess = styled.li`
  border-radius: 50%;
  background-color: #c1c1c1;
  @media screen and (max-width: 1364px) {
    width: 18px;
    height: 18px;
    margin-bottom: 74px;
  }
  @media screen and (min-width: 1365px) {
    width: 15px;
    height: 15px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1919px) {
    width: 18px;
    height: 18px;
    margin-bottom: 74px;
  }
`;
