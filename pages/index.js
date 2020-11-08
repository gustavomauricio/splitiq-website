import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { parseString } from 'xml2js';
import {
  Divider,
  Typography,
  Card,
  Col,
  Row,
  Pagination,
} from 'antd';

import { Calendar, NavBar } from '../components';
import { NEWS_PAGE_SIZE } from '../constants';
const { Title } = Typography;

export default function Home({ news }) {
  const [currentPage, setCurrentPage] = useState(1);
  const newsSlice = news.slice((currentPage - 1) * NEWS_PAGE_SIZE, currentPage * NEWS_PAGE_SIZE);

  return (
    <React.Fragment>
      <Title level={2}>
        News
      </Title>

      <Row gutter={[24, 24]}>
        {newsSlice.map(elem => (
          <Col xs={24} lg={8} key={elem.pubDate}>
            <Card
              className="h-100"
              title={elem.title}
              bordered={false}
              hoverable
              cover={<img alt="example" style={{ maxHeight: '160px' }} src={elem['media:content']['$'].url} />}
            >
              <div dangerouslySetInnerHTML={{ __html: elem.description }} />
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        defaultCurrent={1}
        defaultPageSize={NEWS_PAGE_SIZE}
        total={news.length}
        onChange={(page) => setCurrentPage(page)}
      />
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

export const getStaticProps = async (ctx) => {
  const res = await fetch('https://www.wowhead.com/news/rss/all');
  const text = await res.text();

  let items = [];
  const options = {
    trim: true,
    explicitArray: false,
  }

  parseString(text, options, (err, result) => {
    if (!err) {
      items = result.rss.channel.item;
    }
  });

  return {
    props: {
      news: items,
    }
  }
}
