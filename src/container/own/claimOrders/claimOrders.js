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
import { getUserId, getQueryString, showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ownClaimOrders,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class ClaimOrders extends React.Component {
  constructor(props) {
    super(props);
    this.treeNumber = getQueryString('treeNumber', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '认养订单编号',
      field: 'orderCode'
    }, {
      title: '树木编号',
      field: 'treeNumber',
      search: true
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
    let config = {
      fields,
      pageCode: 629205,
      searchParams: {
        ownerId: getUserId(),
        treeNumber: this.treeNumber || ''
      }
    };
    if(this.treeNumber) {
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

export default ClaimOrders;
