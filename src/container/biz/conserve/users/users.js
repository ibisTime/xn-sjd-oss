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
} from '@redux/biz/conserve/users';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.conserveUsers,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Users extends React.Component {
  render() {
    const fields = [{
      title: '养护方',
      field: 'maintainId',
      type: 'select',
      params: { kind: 'M' },
      pageCode: 630065,
      searchName: 'keyword',
      keyName: 'userId',
      valueName: '{{realName.DATA}} {{mobile.DATA}}',
      render: (v) => v,
      search: true
    }, {
      title: '养护人姓名',
      field: 'name'
    }, {
      title: '手机号',
      field: 'mobile'
    }, {
      title: '最新更新人',
      field: 'updater'
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
      deleteCode: 629611
    });
  }
}

export default Users;
