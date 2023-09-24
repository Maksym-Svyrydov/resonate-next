import styled from 'styled-components';
export const Section = styled.div`
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 1080px;
  padding-left: 10px;
  padding-right: 100px;
  padding-top: 176px;
  background: rgba(245, 242, 240, 1);
  @media screen and (min-width: 1365px) {
    width: 100%;
    height: 768px;
    padding-right: 50px;
    padding-top: 106px;
  }

  @media screen and (min-width: 1919px) {
    width: 100%;
    height: 1080px;
    padding-left: 10px;
    padding-right: 100px;
    padding-top: 176px;
  }
`;

export const ListSection = styled.div`
  margin: 80px 138px auto 0px;
  display: flex;
  box-sizing: border-box;
  max-width: 385px;
  @media screen and (min-width: 1365px) {
    margin: 60px 100px auto 0px;
    width: 260px;
  }
  @media screen and (min-width: 1919px) {
    max-width: 385px;
    height: 1080px;
    margin: 80px 138px auto 0px;
  }
`;
export const BannerList = styled.ul`
  margin-bottom: auto;
`;
export const BannerActive = styled.li`
  margin-bottom: 48px;
  color: #283340;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 24px;
  list-style: none;
  @media screen and (min-width: 1365px) {
    margin-bottom: 26px;
  }
  @media screen and (min-width: 1919px) {
    margin-bottom: 48px;
  }
`;
export const Banner = styled.li`
  margin-bottom: 48px;
  color: #828282;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 24px;
  list-style: none;
  @media screen and (min-width: 1365px) {
    margin-bottom: 26px;
  }
  @media screen and (min-width: 1919px) {
    margin-bottom: 48px;
  }
`;
export const Frame = styled.div`
  border: 1px solid #283340;
  position: relative;
  margin-top: 22px;
  margin-left: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 24px;
  list-style: none;
  height: 384px;
  @media screen and (min-width: 1365px) {
    height: 290px;
  }
  @media screen and (min-width: 1919px) {
    margin-bottom: 48px;
    height: 384px;
  }
`;
export const DotList = styled.ul`
  position: absolute;
  list-style: none;
  top: -1px;
  left: -50px;
  margin: 0px 0px 0px 0px;
  @media screen and (min-width: 1365px) {
    left: -48.5px;
  }
  @media screen and (min-width: 1919px) {
    left: -50px;
  }
`;
export const DotActive = styled.li`
  width: 21px;
  height: 21px;
  background-color: #283340;
  border-radius: 50%;
  margin-bottom: 60px;
  @media screen and (min-width: 1365px) {
    width: 18px;
    height: 18px;
    margin-bottom: 41px;
  }
  @media screen and (min-width: 1919px) {
    width: 21px;
    height: 21px;
    margin-bottom: 60px;
  }
`;
export const Dot = styled.li`
  margin-bottom: 48px;
  width: 21px;
  height: 21px;
  background-color: #828282;
  border-radius: 50%;
  margin-bottom: 60px;
  @media screen and (min-width: 1365px) {
    width: 18px;
    height: 18px;
    margin-bottom: 41px;
  }
  @media screen and (min-width: 1919px) {
    margin-bottom: 60px;
    width: 21px;
    height: 21px;
  }
`;
export const ContentWrapp = styled.div`
  display: flex;
  flex-direction: row;
  width: 481px;
  @media screen and (min-width: 1365px) {
    width: 400px;
  }
  @media screen and (min-width: 1919px) {
    width: 481px;
  }
`;
export const Wrapp = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 0px 0px 13px 16px;
  @media screen and (min-width: 1365px) {
    min-width: 400px;
  }
  @media screen and (min-width: 1919px) {
    min-width: 481px;
    padding: 70px 0px 13px 16px;
  }
  ${'' /* border-left: 2px solid #cbbe9c; */}
`;
export const TitleSection = styled.div`
  margin: 0px 0px 0px 57px;
  @media screen and (min-width: 1365px) {
    margin: 0px 0px 0px 20px;
  }
  @media screen and (min-width: 1919px) {
    margin: 0px 0px 0px 57px;
  }
`;

export const WrappTitleLeft = styled.div`
  margin: 0px 0px auto 0px;
  padding: 75px 0px 0px 0px;
  width: 100%;
  height: 100%;
  ${'' /* ; */}
`;
export const TextSectionM = styled.p`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 160px;
  line-height: 80%;
  color: #cbbe9c;

  @media screen and (min-width: 1365px) {
    font-weight: 600;
    font-size: 110px;
    line-height: 80%;
    margin: 0px 0px 11px 0px;
  }
  @media screen and (min-width: 1919px) {
    font-weight: 700;
    font-size: 160px;
    line-height: 80%;
    margin: 0px 0px 21px 0px;
  }
`;
export const TextSectionT = styled.span`
  display: inline-block;
  font-family: 'DM Sans';
  font-size: 160px;
  font-style: normal;
  font-weight: 700;
  line-height: 80%;
  margin-left: 304px;
  @media screen and (min-width: 1365px) {
    font-weight: 600;
    font-size: 110px;
    line-height: 80%;
    margin-left: 150px;
  }
  @media screen and (min-width: 1919px) {
    font-weight: 700;
    font-size: 160px;
    line-height: 80%;
    margin-left: 304px;
  }
`;
export const TextSectionI = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-style: italic;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  color: #828282;
  width: 140px;
  margin-left: 50px;
  @media screen and (min-width: 1365px) {
    font-size: 28px;
    margin-left: 35px;
    line-height: 30px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 36px;
    margin-left: 50px;
    line-height: 50px;
  }
`;

export const WrappTextSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: normal;
  color: #283340;
  padding: 0px;
  margin: 0px 0px 14px 0px;
`;
export const WrappText = styled.div`
  padding: 0px 0px 0px 0px;
`;

export const Line = styled.div`
  min-width: 20px;
  height: 100%;
  margin-right: 12px;
  border-left: 1px solid #cbbe9c;
  border-right: 1px solid #283340;
`;
export const WrappTitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #cbbe9c;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 6px 0px;
  @media screen and (min-width: 1365px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
export const Text = styled.p`
  color: #283340;
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  @media screen and (min-width: 1365px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 18px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 85px 0px 0px auto;
  max-width: 385px;
  @media screen and (min-width: 1365px) {
    gap: 12px;
    margin: 25px 0px 0px auto;
  }
  @media screen and (min-width: 1919px) {
    gap: 14px;
    margin: 85px 0px 0px auto;
  }
`;

export const List = styled.ul`
  font-family: 'DM Sans', sans-serif;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  list-style: none;
  margin: 0px;
  padding: 0px 0px 0px 32px;
`;
export const Item = styled.li`
  font-family: 'DM Sans' sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #283340;
  padding: 0px;
`;
export const TitleItem = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-transform: uppercase;
  padding: 0px;
  margin: 0px 0px 6px 0px;
  @media screen and (min-width: 1365px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 24px;
  }
`;
export const TitleText = styled.p`
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: #283340;
  padding: 0px;
  margin: 0px 0px 14px 0px;
  @media screen and (min-width: 1365px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1919px) {
    font-size: 18px;
  }
`;

export const SectionWrapp = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 260px;
  margin-top: auto;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0;
  background: #283340;
  padding: 0px 12px 0px 12px;
  @media screen and (min-width: 1365px) {
    width: 400px;
    height: 200px;
    margin-top: 90px;
  }
  @media screen and (min-width: 1919px) {
    width: 580px;
    height: 260px;
    margin-top: 110px;
  }
`;
export const ImdBg = styled.img`
  width: 459px;
  height: 300px;
  flex-shrink: 0;
  color: rgba(203, 190, 156, 1);
  position: absolute;
  bottom: -70px;
  left: -50px;
  overflow: hidden;
  @media screen and (min-width: 1365px) {
    width: 984px;
    height: 630px;
    bottom: -390px;
    left: -115px;
  }
  @media screen and (min-width: 1919px) {
    width: 1084px;
    height: 680px;
    bottom: -420px;
    left: -130px;
  }
`;
export const SectionHelp = styled.div`
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 20px 65px 21px;
  margin-top: auto;
  @media screen and (min-width: 1365px) {
    padding: 0px 20px 60px 10px;
  }
  @media screen and (min-width: 1919px) {
    padding: 20px 20px 65px 21px;
  }
`;

export const SectionText = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  color: #f5f2f0;
  margin-top: auto;
  @media screen and (min-width: 1365px) {
    font-size: 20px;
    font-weight: 400;
  }
  @media screen and (min-width: 1919px) {
    font-size: 24px;
    font-weight: 400;
  }
`;
