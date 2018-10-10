import React from 'react';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/agent/agents';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.agentAgents,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Agents extends React.Component {
  render() {
    const fields = [{
      title: '用户名',
      field: 'loginName'
    }, {
      title: '手机号',
      field: 'mobile'
    }, {
      title: '等级',
      field: 'level'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'agent_user_status',
      search: true
    }, {
      title: '辖区',
      field: 'province',
      render: (v, d) => {
        if (d.company && d.company.province) {
          return `${d.company.province} ${d.company.city || ''} ${d.company.area || ''}`;
        }
        return '';
      }
    }, {
      title: '注册时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'userId',
      pageCode: 730085,
      searchParams: {
        type: '0'
      },
      btnEvent: {
        check: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '0') {
            showWarnMsg('该用户不是待审核状态');
          } else {
            this.props.history.push(`/agent/agents/addedit?code=${keys[0]}&v=1&check=1`);
          }
        },
        // 注销
        rock: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '2') {
            showWarnMsg('该用户无法注销');
          } else {
            this.rockOrActive(items[0].status, keys[0]);
          }
        },
        // 账户查询
        accounts: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/agent/agents/accounts?code=${keys[0]}`);
          }
        }
      }
    });
  }
}

export default Agents;
