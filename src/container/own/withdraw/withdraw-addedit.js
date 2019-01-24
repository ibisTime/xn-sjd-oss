import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserId, showSucMsg } from 'common/js/util';
import fetch from 'common/js/fetch';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class WithdrawAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = getQueryString('v', this.props.location.search);
  }
  render() {
    let fields = [{
      title: '编号',
      field: 'code'
    }, {
      field: 'amount',
      title: '金额',
      amount: true
    }, {
      field: 'fee',
      title: '手续费',
      amount: true
    }, {
      field: 'payCardInfo',
      title: '收款银行'
    }, {
      field: 'payCardNo',
      title: '收款卡号'
    }, {
      field: 'status',
      title: '状态',
      type: 'select',
      key: 'jour_status'
    }, {
      field: 'applyUser',
      title: '申请人'
    }, {
      field: 'applyDatetime',
      title: '申请时间',
      type: 'datetime'
    }, {
      field: 'applyNote',
      title: '申请说明',
      type: 'textarea',
      normalArea: true,
      required: true
    }, {
      field: 'approveDatetime',
      title: '审核时间',
      type: 'datetime'
    }, {
      field: 'approveNote',
      title: '审核意见'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: true,
      detailCode: 802356
    });
  }
}

export default WithdrawAddedit;
