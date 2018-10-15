import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class ClaimOrdersAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '认养订单编号',
      field: 'orderCode'
    }, {
      title: '树木编号',
      field: 'treeNumber'
    }, {
      title: '当前持有人',
      field: 'currentHolder',
      _keys: ['user', 'mobile']
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
      key: 'adopt_order_tree_status'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629206
    });
  }
}

export default ClaimOrdersAddEdit;
