import React from 'react';
import { Table } from 'antd';
import { dateFormat } from 'common/js/util';
import YhrwImg from './yhrw.png';
import './index.css';

const statusDict = {
  '0': '待认养',
  '1': '已认养'
};
const columns = [{
  title: '树木编号',
  dataIndex: 'treeNumber',
  key: 'treeNumber'
}, {
  title: '养护人',
  dataIndex: 'maintainerName',
  key: 'maintainerName'
}, {
  title: '养护时间',
  key: 'updateDatetime',
  dataIndex: 'updateDatetime',
  render: (v) => dateFormat(v)
}];

export default class Zjyhrw extends React.Component {
  render() {
    return (
      <div className="notice-wrapper">
        <div className="notice-title"><img src={YhrwImg}/>最新养护任务</div>
        <Table
          className="notice-table-wrapper"
          columns={columns}
          onRowClick={this.props.goRecord}
          dataSource={this.props.data}
          pagination={false} />
      </div>
    );
  }
}
