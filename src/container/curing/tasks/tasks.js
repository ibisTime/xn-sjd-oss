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
} from '@redux/curing/tasks';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.curingTasks,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Tasks extends React.Component {
  render() {
    const fields = [{
      title: '系统编号',
      field: 'code'
    }, {
      title: '树木编号',
      field: 'treeNumber'
    }, {
      title: '分类',
      field: 'productCode'
    }, {
      title: '树龄',
      field: 'productCode'
    }, {
      title: '销售分类',
      field: 'scientificName'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      data: [{
        key: '0',
        value: '待认养'
      }, {
        key: '1',
        value: '已认养'
      }],
      keyName: 'key',
      valueName: 'value',
      search: true
    }, {
      title: '认养人',
      field: 'ownerId'
    }, {
      title: '认养剩余时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
      title: '最新养护记录',
      field: 'remark'
    }, {
      title: '养护人',
      field: 'remark1'
    }];
    return this.props.buildList({
      fields,
      pageCode: '629035',
      searchParams: { maintainId: getUserId() }
    });
  }
}

export default Tasks;
