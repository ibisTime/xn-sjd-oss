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
} from '@redux/biz/pre/fahuo';
import { listWrapper } from 'common/js/build-list';
import { showSucMsg, showWarnMsg, getUserId, getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.preFahuo,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class PreFahuo extends React.Component {
  render() {
    const fields = [{
      title: '编号',
      field: 'code',
      search: true
    }, {
      title: '省',
      field: 'province'
    }, {
      title: '市',
      field: 'city'
    }, {
      title: '区',
      field: 'area'
    }, {
      title: '详细地址',
      field: 'address'
    }, {
      title: '收货人',
      field: 'receiver'
    }, {
      title: '收货人手机号',
      field: 'receiverMobile'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'presell_logistics_status',
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629465
    });
  }
}

export default PreFahuo;
