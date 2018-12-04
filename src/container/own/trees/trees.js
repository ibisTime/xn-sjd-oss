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
import { getUserId, getQueryString, showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ownTrees,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Trees extends React.Component {
  constructor(props) {
    super(props);
    this.productCode = getQueryString('productCode', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '编号',
      field: 'code'
    }, {
      title: '古树学名',
      field: 'scientificName'
    }, {
      title: '树木编号',
      field: 'treeNumber'
    }, {
      title: '所属产品',
      field: 'productName'
    }, {
      title: '品种',
      field: 'variety'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'tree_status',
      search: true
    }];
    let config = {
      fields,
      pageCode: '629035',
      searchParams: {
        ownerId: getUserId(),
        productCode: this.productCode || ''
      }
    };
    if(this.productCode) {
      config.buttons = [{
        name: '详情',
        code: 'detail',
        handler: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`${this.props.location.pathname}/addedit?code=${keys[0]}&v=1`);
          }
        }
      }, {
        name: '返回',
        code: 'back',
        handler: () => this.props.history.go(-1)
      }];
    }
    return this.props.buildList(config);
  }
}

export default Trees;
