import React from 'react';
import { useState } from 'react';
//component
import MainTable from './MainTable.js';

const originData = [
  { id: '1', key: 'program1', name: '仪器借用平台', date: '2021-03-10' },
  { id: '2', key: 'program2', name: '质量回顾系统', date: '2021-05-10' },
  { id: '3', key: 'program3', name: '培训百事通', date: '2022-04-22' },
  { id: '4', key: 'program4', name: '计量管理平台', date: '2022-08-25' },
  { id: '5', key: 'program5', name: '辅助排产平台', date: '2023-04-17' },
  { id: '6', key: 'program6', name: '合理化建议平台', date: '2023-08-10' },
  { id: '7', key: 'program7', name: '调查问卷', date: '2023-08-30' },
  { id: '8', key: 'program8', name: '工业物联网平台', date: '2022-08-30' },
];
function Main() {
  const [data, setData] = useState(originData);
  const filterData = (id) => {
    setData(
      data.filter((item) => {
        if (item.id !== id) {
          return true;
        } else {
          return false;
        }
      })
    );
  };
  return (
    <div className=" p-20">
      <MainTable data={data} filterData={filterData} />
    </div>
  );
}

export default Main;
