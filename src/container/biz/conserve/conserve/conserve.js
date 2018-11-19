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
} from '@redux/biz/conserve/conserve';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';
import { activateSysUser } from 'api/user';

@listWrapper(
  state => ({
    ...state.conserveConserve,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Conserve extends React.Component {
  rockOrActive(status, code) {
    Modal.confirm({
      okText: '确认',
      cancelText: '取消',
      content: `确认${status === '2' ? '注销' : '激活'}用户？`,
      onOk: () => {
        this.props.doFetching();
        return activateSysUser(code).then(() => {
          this.props.getPageData();
          showWarnMsg('操作成功');
        }).catch(() => {
          this.props.cancelFetching();
        });
      }
    });
  }
  render() {
    const fields = [{
      title: '关键字',
      field: 'keyword',
      noVisible: true,
      placeholder: '名字/手机号',
      search: true
    }, {
      title: '手机号',
      field: 'mobile'
    }, {
      title: '总收入',
      field: 'totalIncome',
      amount: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'sys_user_status',
      search: true
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
      pageCode: '630065',
      searchParams: {
        kind: 'M',
        orderColumn: 'create_datetime',
        orderDir: 'desc'
      },
      btnEvent: {
        // 审核
        check: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '0') {
            showWarnMsg('该用户不是待审核状态');
          } else {
            this.props.history.push(`/conserve/conserve/addedit?code=${keys[0]}&v=1&check=1`);
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
        //  绑定产权方
        binds: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/conserve/conserve/binds?code=${keys[0]}`);
          }
        },
        // 账户查询
        account: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/conserve/conserve/accounts?code=${keys[0]}`);
          }
        }
      }
    });
  }
}

export default Conserve;
