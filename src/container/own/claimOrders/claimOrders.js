import React from 'react';
import { Modal } from 'antd';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/own/claimOrders';
import { listWrapper } from 'common/js/build-list';
import fetch from 'common/js/fetch';
import { showSucMsg, showWarnMsg, getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ownClaimOrders,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class ClaimOrders extends React.Component {
  render() {
    const fields = [{
      title: '认养订单编号',
      field: 'orderCode'
    }, {
      title: '树木编号',
      field: 'treeNumber'
    }, {
      title: '当前持有人',
      field: 'currentHolder'
    }, {
      title: '认养开始时间',
      field: 'startDatetime',
      type: 'date'
    }, {
      title: '认养结束时间',
      field: 'endDatetime',
      type: 'date'
    }, {
      title: '认养金额',
      field: 'amount',
      amount: true
    }, {
      title: '状态',
      field: 'status'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629205
    });
  }
}

export default ClaimOrders;
