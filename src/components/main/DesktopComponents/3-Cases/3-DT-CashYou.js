import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../../img/Cases/Arrow.svg';
import logo from '../../../../img/Cases/cashyouLogo.svg';
import {
  Section,
  LogoSection,
  TitleWrapp,
  TextTitle,
  TextAccent,
  LogoWrapp,
  Logo,
  ArrowWrapper,
  ArrowImg,
  InfoLayout,
  TextWrapper,
  DecriptionSection,
  CaseTitle,
  CaseList,
  CaseListTitle,
  CaseItem,
  GoalWrapper,
  GoalTitle,
  TimeLineLayout,
  NetedList,
  TimeLayout,
  ProjectWrap,
  ProjectTitle,
  TimeList,
  TimeItem,
  TimeItemLast,
  ListLayout,
  ListLayoutItem,
  Frame,
  CircleList,
  CircleElAccent,
  CircleEl,
  CircleProcess,
} from './3-DT-CashYou.styled';
import arrowBack from '../../../../img/Cases/Arrow_back.svg';
// import bgImg from '../../../../img/Cases/Zoo-Bg-Img.png';
const CashYou = () => {
  const [screen, setScreen] = useState(() => window.innerWidth);
  useState(() => setScreen(window.innerWidth));
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const showLess = () => {
    navigate(-1);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Section>
      {screen > 1364 ? (
        <>
          <LogoSection>
            <TitleWrapp>
              <TextTitle>Outsourced marketing</TextTitle>
              <TextTitle>department</TextTitle>
              <TextTitle>
                with
                <TextAccent>CashYou</TextAccent>
              </TextTitle>
              <LogoWrapp>
                <Logo src={logo} alt="Logo Intericco" />
              </LogoWrapp>
            </TitleWrapp>
          </LogoSection>
          <InfoLayout>
            <ArrowWrapper>
              <ArrowImg src={arrow} alt="Arrow" />
            </ArrowWrapper>
            <DecriptionSection>
              <TextWrapper>
                <CaseTitle>CASE STUDIES</CaseTitle>
                <CaseList>
                  <CaseListTitle>Project team</CaseListTitle>
                  <CaseItem>1 Marketing strategist</CaseItem>
                  <CaseItem>1 Digital marketer</CaseItem>
                  <CaseItem>1 frontend developer</CaseItem>
                  <CaseItem>1 backend developer</CaseItem>
                  <CaseItem>1 Project manager</CaseItem>
                  <CaseItem>1 Graphic designer</CaseItem>
                  <CaseItem>1 UI/UX designer</CaseItem>
                </CaseList>
                <GoalWrapper>
                  <GoalTitle>Our goal</GoalTitle>
                  <p>
                    The main task was a complete rebranding of the agency and
                    the systematization of marketing and sales. During the
                    implementation process, we carried out several key works:
                  </p>
                  <ul>
                    <li>Developed a new company logo</li>
                    <li>Brand and communication strategy</li>
                    <li>Systematized customer acquisition from 12 sources</li>
                    <li>Developed a website</li>
                  </ul>
                  <p>
                    We approached the solution of this problem with all
                    responsibility and received a high-quality result within 2
                    months after the launch of the project. ROMI +754%
                  </p>
                </GoalWrapper>
              </TextWrapper>

              <TimeLineLayout>
                <ProjectTitle> PROJECT TIMELINE</ProjectTitle>
                <ProjectWrap>
                  <Frame />
                  <TimeLayout>
                    <TimeList>
                      <TimeItem>1 m</TimeItem>
                      <TimeItem>2 m</TimeItem>
                      <TimeItem>3 m</TimeItem>
                      <TimeItem>4 m</TimeItem>
                      <TimeItem>5 m</TimeItem>
                      <TimeItemLast>6 m</TimeItemLast>
                    </TimeList>
                    <CircleList>
                      <CircleProcess>
                        <CircleElAccent />
                      </CircleProcess>
                      <CircleProcess>
                        <CircleEl />
                      </CircleProcess>
                      <CircleProcess>
                        <CircleEl />
                      </CircleProcess>
                      <CircleProcess>
                        <CircleEl />
                      </CircleProcess>
                      <CircleProcess>
                        <CircleEl />
                      </CircleProcess>
                      <CircleProcess>
                        <CircleElAccent />
                      </CircleProcess>
                    </CircleList>
                  </TimeLayout>
                  <ListLayout>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Development of brand style concepts</li>
                        <li>Marketing analisys</li>
                        <li>Brand strategy</li>
                      </NetedList>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Brand design development</li>
                        <li>Website prototype development</li>
                        <li>Promotion strategy</li>
                      </NetedList>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Website implementation</li>
                        <li>Funnel development</li>
                        <li>Internal marketing processes</li>
                      </NetedList>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Start advertising companies</li>
                      </NetedList>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Omnichannel settings</li>
                      </NetedList>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Key result achievement</li>
                      </NetedList>
                    </ListLayoutItem>
                  </ListLayout>
                </ProjectWrap>
              </TimeLineLayout>
            </DecriptionSection>
          </InfoLayout>
        </>
      ) : (
        <>
          <LogoSection>
            <TitleWrapp>
              <LogoWrapp>
                <Logo src={logo} alt="Logo Intericco" />
              </LogoWrapp>
              <TextTitle>Outsourced marketing</TextTitle>
              <TextTitle>department</TextTitle>
              <TextTitle>
                with
                <TextAccent>CashYou</TextAccent>
              </TextTitle>
              <div>
                <Link
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    position: 'relative',
                    padding: '6px',
                    fontSize: '16px',
                    color: '#F5F2F0',
                    fontWeight: '600',
                    fontFamily: 'Poppins',
                    gap: '35px',
                    justifyContent: 'flex-end',
                    marginBottom: '15px',
                    marginTop: '25px',
                  }}
                  onClick={showLess}
                >
                  <span>Show less</span>
                  <img src={arrowBack} alt="Arrow back" />
                </Link>
              </div>
            </TitleWrapp>
          </LogoSection>
          <InfoLayout>
            <DecriptionSection>
              <TextWrapper>
                <CaseTitle>CASE STUDIES</CaseTitle>
                <CaseList>
                  <CaseListTitle>Project team</CaseListTitle>
                  <CaseItem>1 Marketing strategist</CaseItem>
                  <CaseItem>1 Digital marketer</CaseItem>
                  <CaseItem>1 frontend developer</CaseItem>
                  <CaseItem>1 backend developer</CaseItem>
                  <CaseItem>1 Project manager</CaseItem>
                  <CaseItem>1 Graphic designer</CaseItem>
                  <CaseItem>1 UI/UX designer</CaseItem>
                </CaseList>
              </TextWrapper>

              <TimeLineLayout>
                <ProjectTitle> PROJECT TIMELINE</ProjectTitle>
                <ProjectWrap>
                  <Frame />
                  <TimeLayout>
                    <TimeList>
                      <TimeItem>1 m</TimeItem>
                      <TimeItem>2 m</TimeItem>
                      <TimeItem>3 m</TimeItem>
                      <TimeItem>4 m</TimeItem>
                      <TimeItem>5 m</TimeItem>
                      <TimeItemLast>6 m</TimeItemLast>
                    </TimeList>
                    <CircleList>
                      <CircleProcess>
                        <CircleElAccent />
                      </CircleProcess>
                      <CircleProcess>
                        <CircleEl />
                      </CircleProcess>
                      <CircleProcess>
                        <CircleEl />
                      </CircleProcess>
                      <CircleProcess>
                        <CircleEl />
                      </CircleProcess>
                      <CircleProcess>
                        <CircleEl />
                      </CircleProcess>
                      <CircleProcess>
                        <CircleElAccent />
                      </CircleProcess>
                    </CircleList>
                  </TimeLayout>
                  <ListLayout>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Development of brand style concepts</li>
                        <li>Marketing analisys</li>
                        <li>Brand strategy</li>
                      </NetedList>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Brand design development</li>
                        <li>Website prototype development</li>
                        <li>Promotion strategy</li>
                      </NetedList>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Website implementation</li>
                        <li>Funnel development</li>
                        <li>Internal marketing processes</li>
                      </NetedList>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Start advertising companies</li>
                      </NetedList>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Omnichannel settings</li>
                      </NetedList>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <NetedList>
                        <li>Key result achievement</li>
                      </NetedList>
                    </ListLayoutItem>
                  </ListLayout>
                </ProjectWrap>
              </TimeLineLayout>
              <GoalWrapper>
                <GoalTitle>Our goal</GoalTitle>
                <p>
                  The main task was a complete rebranding of the agency and the
                  systematization of marketing and sales. During the
                  implementation process, we carried out several key works:
                </p>
                <ul>
                  <li>Developed a new company logo</li>
                  <li>Brand and communication strategy</li>
                  <li>Systematized customer acquisition from 12 sources</li>
                  <li>Developed a website</li>
                </ul>
                <p>
                  We approached the solution of this problem with all
                  responsibility and received a high-quality result within 2
                  months after the launch of the project. ROMI +754%
                </p>
              </GoalWrapper>
            </DecriptionSection>
          </InfoLayout>
        </>
      )}
    </Section>
  );
};
export default CashYou;
