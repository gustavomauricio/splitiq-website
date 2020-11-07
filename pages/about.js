import { Layout, Typography } from 'antd';
import 'antd/dist/antd.css';

import { NavBar } from '../components';

const { Header, Content } = Layout;

const About = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <NavBar />
      </Header>
      <Content style={{ padding: '30px 50px' }}>ABOUT WHAT?</Content>
    </Layout>
  );
};

export default About;
