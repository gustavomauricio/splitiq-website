import React from 'react';
import { Calendar as CalendarAntd , Badge } from 'antd';

const Calendar = () => {
  const getListData = (value) => {
    let listData;

    if (value.year() === 2020) {
      switch (value.date()) {
        case 9:
          if (value.month() === 11) {
            listData = [
              { type: 'error', content: 'Season 1 Start' },
              { type: 'success', content: 'Castle Nathria (Normal/Heroic)' },
            ];
          }
          break;
        case 16:
          if (value.month() === 11) {
            listData = [
              { type: 'success', content: 'Castle Nathria (Mythic)' },
            ];
          }
          break;
        case 24:
          if (value.month() === 10) {
            listData = [
              { type: 'success', content: 'Shadowlands Launch!' },
            ];
          }
          break;
        default:
      }
    }

    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  return (
    <React.Fragment>
      <CalendarAntd
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        fullscreen={true}
      />
      <style jsx global>{`
        .events {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .events .ant-badge-status {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          text-overflow: ellipsis;
          font-size: 12px;
        }

        .notes-month {
          text-align: center;
          font-size: 28px;
        }

        .notes-month section {
          font-size: 28px;
        }
      `}</style>
    </React.Fragment>
  );
}

export default Calendar;
