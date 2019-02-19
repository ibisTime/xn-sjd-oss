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
} from '@redux/biz/rules/realname';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
    state => ({
      ...state.rulesRealname,
      parentCode: state.menu.subMenuCode
    }),
    {
      setTableData, clearSearchParam, doFetching, setBtnList,
      cancelFetching, setPagination, setSearchParam, setSearchData
    }
)
class RulesRealname extends React.Component {
  render() {
    const fields = [
      {
        title: '参数值',
        field: 'cvalue'
      }, {
        title: '备注',
        field: 'remark'
      }];
    return this.props.buildList({
      fields,
      pageCode: 630045,
      rowKey: 'id',
      searchParams: {
        ckey: 'REALNAME_NOTIFI',
        type: 'SYS_TXT'
      }
    });
  }
}

export default RulesRealname;
