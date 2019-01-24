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
import { showWarnMsg } from 'common/js/util';

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
      title: '编号',
      field: 'code'
    }, {
      title: '古树学名',
      field: 'scientificName',
      search: true
    }, {
      title: '树木编号',
      field: 'treeNumber',
      search: true
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
    }];
    return this.props.buildList({
      fields,
      pageCode: '629035',
      btnEvent: {
        // 详情
        detail: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/property/trees/addedit?productType=${items[0].productType}&v=1&code=${keys[0]}`);
          }
        }
      }
    });
  }
}

export default Trees;
