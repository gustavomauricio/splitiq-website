import React from 'react';
import { Calendar as CalendarAntd , Badge } from 'antd';

const Calendar = () => {
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
        ];
        break;
      case 24:
        listData = [
          { type: 'success', content: 'Shadowlands Launch!' },
        ];
      default:
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
      <style jsx>{`
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
