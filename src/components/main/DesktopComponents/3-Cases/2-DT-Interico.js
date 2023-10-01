import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import arrow from 'public/img/Cases/Arrow.svg';
import logo from 'public/img/Cases/IntericcoLogo.svg';
import {
  Section,
  LogoSection,
  TitleWrapp,
  BgImage,
  BgWrapp,
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
  CircleElAccent,
  CircleEl,
  CircleProcess,
} from './2-DT-Interico.styled';
import arrowBack from 'public/img/Cases/Arrow_back.svg';
import Header from '@/components/common/Header';
import bgImg from 'public/img/Cases/interico.png';
const Intericco = () => {
  const mobile = useMediaQuery('(max-width:1239px)');
  const desktop = useMediaQuery('(min-width:1240px)');
  const router = useRouter();
  // const [screen, setScreen] = useState(() => window.innerWidth);
  // useState(() => setScreen(window.innerWidth));
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  // const showLess = () => {
  //   navigate(-1);
  // };
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    <Section>
      {desktop ? (
        <>
          <LogoSection>
            <TitleWrapp>
              <TextTitle>Branding,</TextTitle>
              <TextTitle>Website development,</TextTitle>
              <TextTitle>Outsourced marketing</TextTitle>
              <TextTitle>department</TextTitle>
              <TextTitle>
                with
                <TextAccent>intericco</TextAccent>
              </TextTitle>
              <LogoWrapp>
                <LogoText>int</LogoText>
                <Logo src={logo} alt="Logo Intericco" style={{}} />
                <LogoText>ricco</LogoText>
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
                      <ul>
                        <li>Development of brand style concepts</li>
                        <li>Marketing analisys</li>
                        <li>Brand strategy</li>
                      </ul>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <ul>
                        <li>Brand design development</li>
                        <li>Website prototype development</li>
                        <li>Promotion strategy</li>
                      </ul>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <ul>
                        <li>Website implementation</li>
                        <li>Funnel development</li>
                        <li>Internal marketing processes</li>
                      </ul>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <ul>
                        <li>Start advertising companies</li>
                      </ul>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <ul>
                        <li>Omnichannel settings</li>
                      </ul>
                    </ListLayoutItem>
                    <ListLayoutItem>
                      <ul>
                        <li>Key result achievement</li>
                      </ul>
                    </ListLayoutItem>
                  </ListLayout>
                </ProjectWrap>
              </TimeLineLayout>
            </DecriptionSection>
          </InfoLayout>
        </>
      ) : (
        <>
          <Header />
          <LogoSection>
            <TitleWrapp>
              <BgWrapp>
                <BgImage src={bgImg} alt="Bg interrico" fill cover />
              </BgWrapp>
              <LogoWrapp>
                <LogoText>int</LogoText>
                <Logo src={logo} alt="Logo Intericco" />
                <LogoText>ricco</LogoText>
              </LogoWrapp>
              <TextTitle>Branding,</TextTitle>
              <TextTitle>Website development,</TextTitle>
              <TextTitle>Outsourced marketing</TextTitle>
              <TextTitle>department</TextTitle>
              <TextTitle>
                with
                <TextAccent>intericco</TextAccent>
              </TextTitle>
              <div>
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
                        <ul>
                          <li>Development of brand style concepts</li>
                          <li>Marketing analisys</li>
                          <li>Brand strategy</li>
                        </ul>
                      </ListLayoutItem>
                      <ListLayoutItem>
                        <ul>
                          <li>Brand design development</li>
                          <li>Website prototype development</li>
                          <li>Promotion strategy</li>
                        </ul>
                      </ListLayoutItem>
                      <ListLayoutItem>
                        <ul>
                          <li>Website implementation</li>
                          <li>Funnel development</li>
                          <li>Internal marketing processes</li>
                        </ul>
                      </ListLayoutItem>
                      <ListLayoutItem>
                        <ul>
                          <li>Start advertising companies</li>
                        </ul>
                      </ListLayoutItem>
                      <ListLayoutItem>
                        <ul>
                          <li>Omnichannel settings</li>
                        </ul>
                      </ListLayoutItem>
                      <ListLayoutItem>
                        <ul>
                          <li>Key result achievement</li>
                        </ul>
                      </ListLayoutItem>
                    </ListLayout>
                  </ProjectWrap>
                </TimeLineLayout>
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
            </DecriptionSection>
          </InfoLayout>
        </>
      )}
    </Section>
  );
};

export default Intericco;
