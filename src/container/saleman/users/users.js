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
} from '@redux/saleman/users';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.salemanUsers,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Users extends React.Component {
  render() {
    const fields = [{
      title: '昵称',
      field: 'loginName'
    }, {
      title: '手机号',
      field: 'mobile',
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
      searchParams: {
        userReferee: getUserId()
      }
    });
  }
}

export default Users;
