import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'antd/dist/antd.dark.css';
import { Table, Layout, Spin } from 'antd';

import { NavBar, Dimmer } from '../components';

const { Header, Content, Footer } = Layout;

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true));
    router.events.on('routeChangeComplete', () => setIsLoading(false));
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <title>Split IQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <NavBar />
      </Header>
      <Content style={{ padding: '30px 50px' }}>
        {!isLoading
          ? <Component {...pageProps} />
          : (
            <Dimmer>
              <Spin size="large" />
            </Dimmer>
          )
        }
      </Content>
      <Footer>
        Copyright © GM. All rights reserved.
      </Footer>
    </Layout>
  );
}

export default MyApp;
