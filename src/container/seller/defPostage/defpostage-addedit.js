import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserId, showSucMsg, getCompanyCode } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class SellerOrderAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '商铺编号',
      field: 'shopCode',
      value: getCompanyCode(),
      hidden: true
    }, {
      title: '更新人',
      field: 'updater',
      value: getUserId(),
      hidden: true
    }, {
      title: '价格',
      field: 'price',
      amount: true,
      required: true
    }, {
      title: '备注',
      field: 'remark',
      readonly: true
    }];
    let config = {
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629796,
      editCode: 629790
    };
    return this.buildDetail(config);
  }
}

export default SellerOrderAddEdit;
