import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class ConOrderAddedit extends DetailUtil {
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
      field: 'productName'
    }, {
      title: '产品分类',
      field: 'parentCategoryCode',
      _keys: ['presellProduct', 'parentCategoryCode'],
      type: 'select',
      listCode: '629007',
      params: {type: 1},
      keyName: 'code',
      valueName: 'name'
    }, {
      title: '产品小类',
      field: 'categoryCode',
      _keys: ['presellProduct', 'categoryCode'],
      type: 'select',
      listCode: '629007',
      params: {type: 1},
      keyName: 'code',
      valueName: 'name'
    }, {
      title: '下单人',
      field: 'applyUserName'
    }, {
      title: '购买规格',
      field: 'specsName'
    }, {
      title: '购买单价',
      field: 'price',
      amount: true
    }, {
      title: '购买数量',
      field: 'quantity'
    }, {
      title: '订单价格',
      field: 'amount',
      amount: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'presell_order_status'
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
      detailCode: 629476
    });
  }
}

export default ConOrderAddedit;
