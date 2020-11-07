import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import {
  Divider,
  Typography,
  Card,
  Col,
  Row,
} from 'antd';

import { Calendar, NavBar } from '../components';

const { Title } = Typography;

export default function Home() {
  return (
    <React.Fragment>
      <Title level={2}>
        Welcome to Split IQ
      </Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <Card className="h-100" title="Card Random Title" bordered={false} hoverable>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat augue semper mollis ornare. Quisque bibendum est purus, non blandit felis laoreet eu. Proin rutrum magna rutrum, aliquet velit nec, laoreet nunc. Fusce efficitur lorem eget diam finibus rhoncus. Cras pellentesque quis lacus lobortis dapibus. Nunc elementum elementum turpis, ac malesuada elit semper eu. Donec sed auctor orci, id placerat leo. Integer tortor quam, cursus nec enim suscipit, consectetur molestie risus. Pellentesque sit amet ante nulla.
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="h-100" title="Card Random Title 2" bordered={false} hoverable>
            Donec tempor nec velit nec efficitur. Maecenas odio nulla, egestas in dignissim non, aliquet eget arcu. Cras consequat nec risus a rhoncus. Aliquam porta libero eu magna tempor dignissim. Morbi ac sem nec velit dictum accumsan. Etiam sagittis quam tempor sollicitudin dapibus. Cras non ornare sapien, sed congue lacus. Donec non fermentum justo. Nunc velit augue, eleifend ac lectus in, faucibus bibendum lorem. Curabitur in placerat ligula. Sed eu efficitur est. Praesent eu condimentum risus. Etiam id efficitur dolor.
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="h-100" title="Not so random title" bordered={false} hoverable>
            We are recruiting! Check <Link href="/recruitment">this</Link> section for more info.
          </Card>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col xs={24}>
          <Calendar />
        </Col>
      </Row>

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
    </React.Fragment>
  )
}
