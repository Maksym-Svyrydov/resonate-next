import styled from 'styled-components';
import Image from 'next/image';
export const Section = styled.section`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding-left: 22px;
  padding-right: 20px;
  padding-top: 100px;
  background: rgba(245, 242, 240, 1);
`;
export const TitleSection = styled.div``;

export const TextSectionM = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 80%;
  color: #f5f2f0;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #cbbe9c;
  /* or 43px */
`;
export const TextSectionT = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-style: Bold;
  font-weight: 700;
  font-size: 54px;
  line-height: 80%;
  /* or 43px */
`;
export const TextSectionI = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 22px;
  line-height: 50px;
  /* identical to box height, or 227% */

  color: #283340;
`;
export const Wrapp = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  padding: 0px 0px 13px 16px;
  border-left: 2px solid #cbbe9c;
  width: 100%;
`;
export const WrappTitle = styled.p`
  font-family: 'DM Sans', open sans;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 21px;
  line-height: 31px;
  color: #cbbe9c;
  padding: 0px;
  margin: 0px 0px 0px 0px;
`;

export const WrappText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #283340;
  padding: 0px;
  margin: 0px 0px 0px 0px;
`;
export const List = styled.ul`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  list-style: none;
  margin: 0px;
  padding: 0px 0px 0px 16px;
  ${'' /* margin-bottom: 74px; */}
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
`;
export const TitleText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #283340;
  padding: 0px;
  margin: 0px 0px 13px 0px;
`;

export const SectionWrapp = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0px;
  left: 0px;
`;
export const ImdBg = styled(Image)`
  width: 525px;
  height: 300px;
  color: rgba(203, 190, 156, 1);
  position: absolute;
  top: -120px;
  left: -95px;
`;
export const SectionHelp = styled.div`
  background: #283340;
  padding: 0px 34px 44px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 142px;
  left: -55px;
  top: 0;
  padding: 0px 34px 0px 42px;
  overflow: hidden;
`;

export const SectionText = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #f5f2f0;
  padding: 0px 0px 0px 0px;
  margin-left: auto;
  position: absolute;
  box-sizing: border-box;
  width: 300px;
  top: 62px;
  left: 82px;
`;
