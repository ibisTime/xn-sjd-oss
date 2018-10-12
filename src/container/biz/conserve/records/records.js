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
} from '@redux/biz/conserve/records';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.conserveRecords,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Records extends React.Component {
  render() {
    const fields = [{
      title: '养护项目',
      field: 'projectName'
    }, {
      title: '关联古树',
      field: 'treeNumber'
    }, {
      title: '养护方',
      field: 'mobile',
      render: (v, d) => d.maintainInfo ? d.maintainInfo.mobile : ''
    }, {
      title: '养护人',
      field: 'maintainerName'
    }, {
      title: '养护时间',
      field: 'updateDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629635
    });
  }
}

export default Records;
