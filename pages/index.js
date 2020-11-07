import Head from 'next/head';
import Link from 'next/link';

import {
  Calendar,
  Divider,
  Layout,
  Typography,
  Card,
  Col,
  Row,
} from 'antd';
import 'antd/dist/antd.css';

import NavBar from '../components/NavBar';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function Home() {
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
        <Title level={2}>
          Welcome to Split IQ
        </Title>

        <Row gutter={16}>
          <Col span={8}>
            <Card className="h-100" title="Card Random Title" bordered={false} hoverable>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat augue semper mollis ornare. Quisque bibendum est purus, non blandit felis laoreet eu. Proin rutrum magna rutrum, aliquet velit nec, laoreet nunc. Fusce efficitur lorem eget diam finibus rhoncus. Cras pellentesque quis lacus lobortis dapibus. Nunc elementum elementum turpis, ac malesuada elit semper eu. Donec sed auctor orci, id placerat leo. Integer tortor quam, cursus nec enim suscipit, consectetur molestie risus. Pellentesque sit amet ante nulla.
            </Card>
          </Col>
          <Col span={8}>
            <Card className="h-100" title="Card Random Title 2" bordered={false} hoverable>
              Donec tempor nec velit nec efficitur. Maecenas odio nulla, egestas in dignissim non, aliquet eget arcu. Cras consequat nec risus a rhoncus. Aliquam porta libero eu magna tempor dignissim. Morbi ac sem nec velit dictum accumsan. Etiam sagittis quam tempor sollicitudin dapibus. Cras non ornare sapien, sed congue lacus. Donec non fermentum justo. Nunc velit augue, eleifend ac lectus in, faucibus bibendum lorem. Curabitur in placerat ligula. Sed eu efficitur est. Praesent eu condimentum risus. Etiam id efficitur dolor.
            </Card>
          </Col>
          <Col span={8}>
            <Card className="h-100" title="Not so random title" bordered={false} hoverable>
              We are recruiting! Check <Link href="/recruitment">this</Link> section for more info.
            </Card>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span="16"></Col>
          <Col span="8">
            <Calendar fullscreen={false} />
          </Col>
        </Row>

        {/*<div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>*/}
      </Content>

      <Footer>
        {/*<a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>*/}
      </Footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .h-100 {
          height: 100%;
        }
      `}</style>
    </Layout>
  )
}
