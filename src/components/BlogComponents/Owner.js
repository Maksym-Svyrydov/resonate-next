import ValeriyAva from 'public/img/lnkdn-img/Valeriy.png';
import {
  Section,
  List,
  AvatarWrapp,
  Avatar,
  Title,
  SubTitile,
} from './Owner.syled';
export const Owner = () => {
  return (
    <Section>
      <List>
        <li>
          <AvatarWrapp>
            <Avatar src={ValeriyAva} alt="Valeriy Fedorov" />
          </AvatarWrapp>
        </li>
        <li>
          <Title>Valerii Fedorov</Title>
        </li>
        <li>
          <SubTitile>Owner & CEO at Resonate</SubTitile>
        </li>
      </List>
    </Section>
  );
};
