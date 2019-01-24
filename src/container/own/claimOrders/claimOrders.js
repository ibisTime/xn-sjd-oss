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
import { getUserId } from 'common/js/util';

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
      field: 'orderCode',
      search: true
    }, {
      title: '树木编号',
      field: 'treeNumber'
    }, {
      title: '当前持有人',
      field: 'currentHolder',
      render: (v, d) => d.user ? d.user.mobile : ''
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
      field: 'status',
      type: 'select',
      key: 'adopt_order_tree_status',
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629205,
      searchParams: {
        ownerId: getUserId()
      }
    });
  }
}

export default ClaimOrders;
