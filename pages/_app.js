import Head from 'next/head';
import 'antd/dist/antd.css';
import { Table, Layout } from 'antd';

import { NavBar } from '../components';

const { Header, Content, Footer } = Layout;

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Head>
        <title>Split IQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <NavBar />
      </Header>
      <Content style={{ padding: '30px 50px' }}>
        <Component {...pageProps} />
      </Content>
      <Footer>
        Copyright © GM. All rights reserved.
      </Footer>
    </Layout>
  );
}

export default MyApp;
