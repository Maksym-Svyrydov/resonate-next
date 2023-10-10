'use client';
import { useRouter } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import arrow from 'public/img/Cases/Arrow.svg';
import logoZoo from 'public/img/Cases/zoo.svg';
import logoZooMod from 'public/img/Customers/kharkivzoo_white.svg';
import arrowBack from 'public/img/Cases/Arrow_back.svg';
import {
  Section,
  LogoSection,
  TitleWrapp,
  BgImage,
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
  LinkStyled,
} from './1-DT-CasesZoo.styled';
import Image from 'next/image';
import bgImg from 'public/img/Cases/Zoo-Bg-Img2.png';
import Header from '@/components/common/Header';
const Zoo = () => {
  const mobile = useMediaQuery('(max-width:1239px)');
  const desktop = useMediaQuery('(min-width:1240px)');
  const router = useRouter();
  return (
    <Section id="Cases">
      {desktop ? (
        <LogoSection>
          <BgImage
            src={bgImg}
            alt="Bgzoo"
            fill
            style={{ maxWidth: '1320px', height: '100%' }}
          />
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
        </LogoSection>
      ) : (
        <LogoSection>
          <Header />
          <TitleWrapp>
            <BgImage src={bgImg} alt="Bgzoo" fill cover />
            <Logo src={logoZooMod} alt="Logo Zoo" />
            <div>
              <TextTitle>Branding &</TextTitle>
              <TextTitle>Website development</TextTitle>
              <TextTitle>
                with
                <TextAccent>KHARKIV ZOO</TextAccent>
              </TextTitle>
              <div>
                <div
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
                    zIndex: '2',
                  }}
                  onClick={() => router.back()}
                >
                  <span>Show less</span>
                  <Image src={arrowBack} alt="Arrow back" />
                </div>
              </div>
            </div>
          </TitleWrapp>
        </LogoSection>
      )}

      <InfoLayout>
        {!mobile && (
          <ArrowWrapper>
            <ArrowImg src={arrow} alt="Arrow" />
          </ArrowWrapper>
        )}
        {desktop ? (
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
                  connected it with our clients business, demonstrating a unique
                  brand and a functional website that takes into account the
                  entire business logic of the institution.
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
                with our clients business, demonstrating a unique brand and a
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
