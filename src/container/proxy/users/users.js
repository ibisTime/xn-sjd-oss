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
} from '@redux/proxy/users';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.proxyUsers,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Users extends React.Component {
  render() {
    const fields = [{
      title: '昵称',
      field: 'nickname'
    }, {
      title: '手机号',
      field: 'mobile',
      search: true
    }, {
      title: '推荐人',
      field: 'userReferee',
      render: (v, d) => d.refereeUser ? d.refereeUser.mobile : ''
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
      searchParams: {
        agentid: getUserId()
      }
    });
  }
}

export default Users;
