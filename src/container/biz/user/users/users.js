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
} from '@redux/biz/user/users';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';
import { activateUser } from 'api/user';

@listWrapper(
  state => ({
    ...state.userUsers,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Users extends React.Component {
  rockOrActive(status, code) {
    Modal.confirm({
      okText: '确认',
      cancelText: '取消',
      content: `确认${status === '0' ? '注销' : '激活'}用户？`,
      onOk: () => {
        this.props.doFetching();
        return activateUser(code).then(() => {
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
      title: '手机号',
      field: 'mobile'
    }, {
      title: '推荐人',
      field: 'userReferee'
    }, {
      title: '姓名',
      field: 'realName'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'user_status',
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
      pageCode: 805120,
      btnEvent: {
        // 注销
        rock: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.rockOrActive(items[0].status, keys[0]);
          }
        }
      }
    });
  }
}

export default Users;
