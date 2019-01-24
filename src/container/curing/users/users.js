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
} from '@redux/curing/users';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.curingUsers,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Users extends React.Component {
  render() {
    const fields = [{
      title: '姓名',
      field: 'name'
    }, {
      title: '手机号',
      field: 'mobile'
    }, {
      title: '最新更新人',
      field: 'updaterName'
    }, {
      title: '最新更新时间',
      field: 'updateDatetime',
      type: 'datetime'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629615,
      deleteCode: 629611,
      searchParams: {
        maintainId: getUserId()
      }
    });
  }
}

export default Users;
