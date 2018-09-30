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
} from '@redux/biz/property/trees';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.propertyTrees,
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
      title: '产权方',
      field: 'ownerId'
    }, {
      title: '所属产品',
      field: 'productCode'
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
      title: '被认养次数',
      field: 'createDatetime',
      type: 'datetime'
    }, {
      title: '文章数',
      field: 'remark'
    }, {
      title: '点赞数',
      field: 'remark1'
    }, {
      title: '收藏数',
      field: 'remark2'
    }];
    return this.props.buildList({
      fields,
      pageCode: '629035'
    });
  }
}

export default Trees;
