import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserId, showSucMsg } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class SellerOrderAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.handle = getQueryString('handle', this.props.location.search);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  handleFun(result, params) {
    this.doFetching();
    params.handleResult = result;
    fetch(629772, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code',
      search: true
    }, {
      title: '商品名称',
      field: 'commodityName',
      _keys: ['orderDetail', 'commodityName']
    }, {
      title: '规格名称',
      field: 'specsName',
      _keys: ['orderDetail', 'specsName']
    }, {
      title: '数量',
      field: 'quantity',
      _keys: ['orderDetail', 'quantity']
    }, {
      title: '订单金额',
      field: 'amount',
      _keys: ['orderDetail', 'amount'],
      amount: true
    }, {
      title: '退款金额',
      field: 'refundAmount',
      amount: true
    }, {
      title: '售后诉求',
      field: 'type',
      type: 'select',
      key: 'after_sale_type',
      search: true
    }, {
      title: '售后订单状态',
      field: 'status',
      type: 'select',
      key: 'after_sale_status',
      search: true
    }];
    let config = {
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629776
    };
    if (this.handle) {
      config.buttons = [{
        title: '拒绝',
        check: true,
        handler: (params) => {
          this.handleFun(0, params);
        }
      }, {
        title: '同意',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.handleFun(1, params);
        }
      }, {
        title: '返回',
        handler: () => {
          this.props.history.go(-1);
        }
      }];
    }
    return this.buildDetail(config);
  }
}

export default SellerOrderAddEdit;
