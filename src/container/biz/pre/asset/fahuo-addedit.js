import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class ConOrderAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '编号',
      field: 'code',
      search: true
    }, {
      title: '发货数量',
      field: 'deliverCount'
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
    }, {
      field: 'logisticsCompany',
      title: '物流公司',
      type: 'select',
      key: 'logistics_company'
    }, {
      field: 'logisticsNumber',
      title: '物流单号'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629466
    });
  }
}

export default ConOrderAddedit;
