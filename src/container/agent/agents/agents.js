import React from 'react';
import { Modal } from 'antd';
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
import { activateAgentUser } from 'api/user';

@listWrapper(
  state => ({
    ...state.agentAgents,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Agents extends React.Component {
  rockOrActive(status, code) {
    Modal.confirm({
      okText: '确认',
      cancelText: '取消',
      content: `确认${status === '2' ? '注销' : '激活'}用户？`,
      onOk: () => {
        this.props.doFetching();
        return status === '2' ? activateAgentUser(code).then(() => {
          this.props.getPageData();
          showWarnMsg('操作成功');
        }).catch(() => {
          this.props.cancelFetching();
        })
          : activateAgentUser(code).then(() => {
            this.props.getPageData();
            showWarnMsg('操作成功');
          }).catch(() => {
            this.props.cancelFetching();
          })
          ;
      }
    });
  }
  render() {
    const fields = [{
      title: '用户名',
      field: 'loginName'
    }, {
      title: '手机号',
      field: 'mobile'
    }, {
      title: '等级',
      field: 'level',
      type: 'select',
      key: 'agent_level'
    }, {
      title: '上级代理',
      field: 'mobile1',
      render: (v, d) => d.parentAgentUser ? d.parentAgentUser.mobile : '-'
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
        type: '0',
        orderColumn: 'create_datetime',
        orderDir: 'desc'
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
          } else {
            if(items[0].status === '2' || items[0].status === '3' || items[0].status === '4') {
              this.rockOrActive(items[0].status, keys[0]);
            } else {
              showWarnMsg('该用户无法注销或激活');
            }
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
        },
        // 重置密码
        resetPwd: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/agent/agents/pwd_reset?userId=${keys[0]}`);
          }
        }
      }
    });
  }
}

export default Agents;
