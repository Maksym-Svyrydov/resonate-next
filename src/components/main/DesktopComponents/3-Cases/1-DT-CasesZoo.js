import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../../img/Cases/Arrow.svg';
import logoZoo from '../../../../img/Cases/zoo.svg';
import logoZooMod from '../../../../img/Customers/kharkivzoo_white.svg';
import arrowBack from '../../../../img/Cases/Arrow_back.svg';
import {
  Section,
  LogoSection,
  TitleWrapp,
  TextTitle,
  TextAccent,
  LogoWrapp,
  Logo,
  LogoText,
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
  Circle,
  CircleProcess,
} from './1-DT-CasesZoo.styled';
const Zoo = () => {
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
      <LogoSection>
        {screen > 1364 ? (
          <TitleWrapp>
            <TextTitle>Branding &</TextTitle>
            <TextTitle>Website development</TextTitle>
            <TextTitle>
              with
              <TextAccent>KHARKIV ZOO</TextAccent>
            </TextTitle>
            <LogoWrapp>
              <div>
                <Logo src={logoZoo} alt="Logo Zoo" />
              </div>
              <div>
                <LogoText>KHARKIV</LogoText>
                <LogoText>ZOO</LogoText>
              </div>
            </LogoWrapp>
          </TitleWrapp>
        ) : (
          <TitleWrapp>
            <Logo src={logoZooMod} alt="Logo Zoo" />
            <div>
              <TextTitle>Branding &</TextTitle>
              <TextTitle>Website development</TextTitle>
              <TextTitle>
                with
                <TextAccent>KHARKIV ZOO</TextAccent>
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
            </div>
          </TitleWrapp>
        )}
      </LogoSection>
      <InfoLayout>
        <ArrowWrapper>
          <ArrowImg src={arrow} alt="Arrow" />
        </ArrowWrapper>
        {screen > 1364 ? (
          <DecriptionSection>
            <TextWrapper>
              <CaseTitle>CASE STUDIES</CaseTitle>
              <CaseList>
                <CaseListTitle>Project team</CaseListTitle>
                <CaseItem>2 frontend developers</CaseItem>
                <CaseItem>1 backend developer</CaseItem>
                <CaseItem>1 Project manager</CaseItem>
                <CaseItem>1 Graphic designer</CaseItem>
                <CaseItem>1 UI/UX desigher</CaseItem>
                <CaseItem>1 Business analist</CaseItem>
              </CaseList>
              <GoalWrapper>
                <GoalTitle>Our goal</GoalTitle>
                <p>
                  It was necessary to develop a new brand style for the zoo,
                  which would be associated with the city of Kharkiv. Create a
                  multifunctional website for zoo visitors, employees and
                  partners.
                </p>
                <p>
                  We have combined our collective experience of prolific
                  dreamers, designers, front-end developers of the company and
                  connected it with our client's business, demonstrating a
                  unique brand and a functional website that takes into account
                  the entire business logic of the institution.
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
                    <Circle />
                    <CircleProcess />
                    <CircleProcess />
                    <CircleProcess />
                    <CircleProcess />
                    <Circle />
                  </CircleList>
                </TimeLayout>
                <ListLayout>
                  <ListLayoutItem>
                    <ul>
                      <li>Development of project technical documentation</li>
                      <li>Development of brand style concepts</li>
                    </ul>
                  </ListLayoutItem>
                  <ListLayoutItem>
                    <ul>
                      <li>Brand design development</li>
                      <li>Website prototype development</li>
                    </ul>
                  </ListLayoutItem>
                  <ListLayoutItem>
                    <ul>
                      <li>Website development</li>
                      <li>Development of text and graphic content</li>
                    </ul>
                  </ListLayoutItem>
                  <ListLayoutItem>
                    <ul>
                      <li>Business logic implementation</li>
                    </ul>
                  </ListLayoutItem>
                  <ListLayoutItem>
                    <ul>
                      <li>Connecting external units</li>
                      <li>Testing</li>
                    </ul>
                  </ListLayoutItem>
                  <ListLayoutItem>
                    <ul>
                      <li>Project handover</li>
                    </ul>
                  </ListLayoutItem>
                </ListLayout>
              </ProjectWrap>
            </TimeLineLayout>
          </DecriptionSection>
        ) : (
          <DecriptionSection>
            <TextWrapper>
              <CaseTitle>CASE STUDIES</CaseTitle>
              <CaseList>
                <CaseListTitle>Project team</CaseListTitle>
                <CaseItem>2 frontend developers</CaseItem>
                <CaseItem>1 backend developer</CaseItem>
                <CaseItem>1 Project manager</CaseItem>
                <CaseItem>1 Graphic designer</CaseItem>
                <CaseItem>1 UI/UX desigher</CaseItem>
                <CaseItem>1 Business analist</CaseItem>
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
                    <Circle />
                    <CircleProcess />
                    <CircleProcess />
                    <CircleProcess />
                    <CircleProcess />
                    <Circle />
                  </CircleList>
                </TimeLayout>
                <ListLayout>
                  <ListLayoutItem>
                    <ul>
                      <li>Development of project technical documentation</li>
                      <li>Development of brand style concepts</li>
                    </ul>
                  </ListLayoutItem>
                  <ListLayoutItem>
                    <ul>
                      <li>Brand design development</li>
                      <li>Website prototype development</li>
                    </ul>
                  </ListLayoutItem>
                  <ListLayoutItem>
                    <ul>
                      <li>Website development</li>
                      <li>Development of text and graphic content</li>
                    </ul>
                  </ListLayoutItem>
                  <ListLayoutItem>
                    <ul>
                      <li>Business logic implementation</li>
                    </ul>
                  </ListLayoutItem>
                  <ListLayoutItem>
                    <ul>
                      <li>Connecting external units</li>
                      <li>Testing</li>
                    </ul>
                  </ListLayoutItem>
                  <ListLayoutItem>
                    <ul>
                      <li>Project handover</li>
                    </ul>
                  </ListLayoutItem>
                </ListLayout>
              </ProjectWrap>
            </TimeLineLayout>
            <GoalWrapper>
              <GoalTitle>Our goal</GoalTitle>
              <p>
                It was necessary to develop a new brand style for the zoo, which
                would be associated with the city of Kharkiv. Create a
                multifunctional website for zoo visitors, employees and
                partners.
              </p>
              <p>
                We have combined our collective experience of prolific dreamers,
                designers, front-end developers of the company and connected it
                with our client's business, demonstrating a unique brand and a
                functional website that takes into account the entire business
                logic of the institution.
              </p>
            </GoalWrapper>
          </DecriptionSection>
        )}
      </InfoLayout>
    </Section>
  );
};
export default Zoo;
