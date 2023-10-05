import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Section,
  Wrapper,
  Title,
  ListTitle,
  List,
  Item,
} from './Contents.styled';
export const Contenst = () => {
  return (
    <Section>
      <Wrapper>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <Title>Contents</Title>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ListTitle>
                Before you start with your LinkedIn strategy
              </ListTitle>
              <List>
                <Item>Identify your goalss</Item>
                <Item>Verify your target audience</Item>
                <Item>Set up responsibilities</Item>
                <Item>Check how your competitors are doing</Item>
                <Item>Rethink your resources</Item>
              </List>
              <ListTitle>Checklist: LinkedIn strategy</ListTitle>
              <List>
                <Item>
                  #1 Create and fill in your Company Page or Showcase Page
                </Item>
                <Item>#2 Share it internally </Item>
                <Item>
                  #3 Work on your communication lines for your LinkedIn page
                </Item>
                <Item>#4 Check what type of content you can publish</Item>
                <Item>#5 Set up a few series of hashtags</Item>
                <Item>#6 Consider creating a content calendar</Item>
                <Item>
                  #7 Think about using LinkedIn Groups and LinkedIn ads
                </Item>
              </List>
              <ListTitle>
                Role of personal profiles in supporting your LinkedIn strategy
              </ListTitle>
              <List>
                <Item>Employee advocacy</Item>
                <Item>Brand ambassadorship</Item>
                <Item>Social Selling</Item>
              </List>
              <ListTitle>
                Benefits of running a successful Linkedin strategy
              </ListTitle>
              <List>
                <Item>More professional performance</Item>
                <Item>Reach target groups of people</Item>
                <Item>Better employer branding</Item>
                <Item>Build thought leadership</Item>
                <Item>Generate leads, extra traffic, and sales</Item>
              </List>
              <ListTitle>Time for your LinkedIn strategy</ListTitle>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Wrapper>
    </Section>
  );
};
