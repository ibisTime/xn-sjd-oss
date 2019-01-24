import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class PersonOrdersAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code'
    }, {
      title: '产品名称',
      field: 'name',
      _keys: ['product', 'name']
    }, {
      title: '产品分类',
      field: 'parentCategoryCode',
      _keys: ['product', 'parentCategoryCode'],
      type: 'select',
      listCode: '629007',
      params: {level: 1},
      keyName: 'code',
      valueName: 'name'
    }, {
      title: '产品小类',
      field: 'categoryCode',
      _keys: ['product', 'categoryCode'],
      type: 'select',
      listCode: '629007',
      params: {level: '2'},
      keyName: 'code',
      valueName: 'name'
    }, {
      title: '认养分类',
      field: 'sellType',
      _keys: ['product', 'sellType'],
      type: 'select',
      key: 'sell_type'
    }, {
      title: '认养人',
      field: 'applyUserName'
    }, {
      title: '认养单价',
      field: 'price',
      amount: true
    }, {
      title: '认养数量',
      field: 'quantity'
    }, {
      title: '订单金额',
      field: 'amount',
      amount: true
    }, {
      title: '实际支付金额',
      field: 'payAmount',
      amount: true
    }, {
      title: '抵扣的人民币',
      field: 'cnyDeductAmount',
      amount: true
    }, {
      title: '使用积分数量',
      field: 'jfDeductAmount',
      amount: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'adopt_order_status'
    }, {
      title: '下单时间',
      field: 'applyDatetime',
      type: 'datetime'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629046
    });
  }
}

export default PersonOrdersAddEdit;
