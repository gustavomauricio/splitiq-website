import {
  Divider,
  Layout,
  Typography,
} from 'antd';

import { NavBar } from '../components';

const { Header, Content } = Layout;
const { Title, Link, Paragraph } = Typography;

const Recruitment = () => {
  return (
    <Typography>
      <Title level={2}>Overview</Title>
      <Paragraph>
        Split IQ is a semi-hardcore PvE guild on Kazzak. We're a core crew of experienced and dedicated players looking to push the game content as far as we can, both in raid and M+. Our progress in the current tier is 11/12M.
      </Paragraph>
      <Paragraph>Split IQ's goal is to be cutting edge level raiders by the first tier of Shadowlands.</Paragraph>
      <Paragraph>We raid on Mondays, Wednesdays and Sundays from 8 to 11 pm server time.</Paragraph>
      <Paragraph>
        If you are willing to improve at World of Warcraft and progress to the highest lvls of the game with friendly and dedicated players, then you might want to join us.
      </Paragraph>
      <Paragraph>
        We expect applicants to be skilled and committed players, which means optimizing your character(s) in every possible way to ensure maximum effectiveness and always having your flask/food/etc.. with you. We are also very serious with raid attendance, if you confirm your presence to a raid and don't come without a good reason, we're probably not taking you back. We are not looking for and will not accept not committed people or people who can not act as part of a team. If this is the kind of WoW experience you want, Split IQ is not what you're looking for.
      </Paragraph>
      <Paragraph>
        We're currently looking for 3 DPS (1 RET 1 DH 1 HUNTER) and 1 HEALER (PREF MISTWEAVER) but all exceptionally good players will be considered.
      </Paragraph>
      <Paragraph>All experienced Mythic + runner will be considered for the guild mythic + community.</Paragraph>
      <Paragraph>You're obviously expected to be a respectful and mature person towards everyone in the guild.</Paragraph>

      <Divider />

      <Title level={3}>Application</Title>
      <Link href="https://forms.gle/4ZJH82vfM4DyaPPX9" target="_blank">
        Fill this form
      </Link>
      <Paragraph>Or add those battletags:</Paragraph>
      <Paragraph strong>Kaleee#21539</Paragraph>
      <Paragraph strong>Stecto#2856</Paragraph>
      <Link href="https://discord.gg/ha5y4vf" target="_blank">
        Our Discord
      </Link>
      <Paragraph>For a talk/questions!</Paragraph>
    </Typography>
  );
}

export default Recruitment;
