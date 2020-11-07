import { Table, Layout } from 'antd';
import 'antd/dist/antd.css';

import { NavBar } from '../components';
import { fetchGuildRoster, fetchPlayableClasses } from '../api';
import { guildRanksMap } from '../constants';

const { Header, Content, Footer } = Layout;

const Roster = ({ classes, roster }) => {
  // sort by rank
  roster.sort((a, b) => a.rank - b.rank);

  const getClassName = (id) => {
    const wowClass = classes.find(elem => { return elem.id === id });

    return wowClass ? wowClass.name : 'NOT FOUND';
  }

  const getClassIcon = (id) => {
    let name = getClassName(id);
    name = name.replace(' ', '').toLowerCase();

    return `https://render-eu.worldofwarcraft.com/icons/56/classicon_${name}.jpg`;
  }

  const renderTable = () => {
    const dataSource = roster.map((member, index) => {
      return {
        key: String(index),
        level: member.character.level,
        class_wow: member.character.playable_class.id,
        name: member.character.name,
        rank: member.rank,
      };
    })

    const columns = [
      {
        title: 'Class',
        dataIndex: 'class_wow',
        key: 'class_wow',
        width: 250,
        sorter: (a, b) => a.class_wow - b.class_wow,
        render: (class_wow) => (
          <div>
            <img
              height="36"
              src={getClassIcon(class_wow)}
              style={{ borderRadius: '50%', marginRight: 8, border: '2px solid black' }}
            />
            <span>{getClassName(class_wow)}</span>
          </div>
        )
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: 'Level',
        dataIndex: 'level',
        key: 'level',
        width: 150,
        sorter: (a, b) => a.level - b.level,
      },
      {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank',
        width: 150,
        sorter: (a, b) => a.rank - b.rank,
        render: (rank) => guildRanksMap[rank] || `Rank ${rank + 1}`,
      },
    ];

     return <Table dataSource={dataSource} columns={columns} tableLayout="fixed" />;
  }

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <NavBar />
      </Header>
      <Content style={{ padding: '30px 50px' }}>
        {renderTable(roster)}
      </Content>
    </Layout>
  );
};

export const getStaticProps = async (ctx) => {
  const [roster, classes] = await Promise.all([
    fetchGuildRoster(),
    fetchPlayableClasses(),
  ]);

  return {
    props: {
      roster,
      classes,
    }
  }
}

export default Roster;
