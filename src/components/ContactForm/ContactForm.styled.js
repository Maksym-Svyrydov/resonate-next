import styled from 'styled-components';

export const FormContainer = styled.div`
  flex-direction: column;
  background: #283340;
  color: #f5f2f0;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  line-height: normal;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1364px) {
    visibility: hidden;
  }
  @media screen and (min-width: 1365px) {
    height: 452px;
    width: 260px;
    padding: 7px 4px;
  }
  @media screen and (min-width: 1919px) {
    display: flex;
    height: 580px;
    width: 339px;
    padding: 17px 14px;
  }
  ${'' /* margin-right: auto; */}
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(203, 190, 156, 0.5);
  jusify-content: center;
  align-items: center;

  @media screen and (min-width: 1365px) {
    padding: 0px 10px 10px 10px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1919px) {
    padding: 22px 37px 36px 37px;
    margin-bottom: 31px;
  }
`;
export const Tiitle = styled.p`
  color: #f5f2f0;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const TitleAccent = styled.span`
  color: #cbbe9c;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;
export const SubTitile = styled.p`
  color: rgba(245, 242, 240, 0.8);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 35px;
`;
export const SocialContainer = styled.div``;
export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 31px;
  jusify-content: center;
  margin: 0 auto;
  padding: 0;
`;
export const Item = styled.li``;
export const Link = styled.a``;
export const Icon = styled.img``;
export const WrapperBottom = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(203, 190, 156, 0.5);
  jusify-content: center;
  align-items: center;
  @media screen and (min-width: 1365px) {
    padding: 0px 10px 20px 10px;
  }
  @media screen and (min-width: 1919px) {
    padding: 26px 55px 26px 55px;
  }
`;
export const TitleBottom = styled.p`
  color: #f5f2f0;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const TxtAccent = styled.span`
  color: #cbbe9c;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;
export const LinkWrapper = styled.div`
  display: flex;
  width: 200px;
  height: 65px;
  border: 1px solid #cbbe9c;
  align-items: center;
  justify-content: center;
`;
export const LinkBottom = styled.a`
  color: #cbbe9c;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
