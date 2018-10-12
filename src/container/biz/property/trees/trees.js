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
      field: 'ownerName'
    }, {
      title: '所属产品',
      field: 'productName'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'tree_status',
      search: true
    }, {
      title: '被认养次数',
      field: 'adoptCount'
    }, {
      title: '文章数',
      field: 'articleCount'
    }, {
      title: '点赞数',
      field: 'pointCount'
    }, {
      title: '收藏数',
      field: 'collectionCount'
    }];
    return this.props.buildList({
      fields,
      pageCode: '629035'
    });
  }
}

export default Trees;
