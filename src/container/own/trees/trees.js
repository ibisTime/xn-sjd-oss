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
} from '@redux/own/trees';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ownTrees,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Trees extends React.Component {
  render() {
    const fields = [{
      title: '系统编号',
      field: 'code'
    }, {
      title: '古树学名',
      field: 'scientificName'
    }, {
      title: '树木编号',
      field: 'treeNumber'
    }, {
      title: '所属产品',
      field: 'productCode'
    }, {
      title: '品种',
      field: 'variety'
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
    }];
    return this.props.buildList({
      fields,
      pageCode: '629035',
      searchParams: {
        ownerId: getUserId()
      }
    });
  }
}

export default Trees;
