import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class GiveGift extends DetailUtil {
  constructor(props) {
    super(props);
    this.adoptTreeCode = getQueryString('adopt', this.props.location.search);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '礼物名称',
      field: 'name',
      required: true,
      maxlength: 30
    }, {
      title: '礼物图片',
      field: 'listPic',
      type: 'img',
      single: true,
      required: true
    }, {
      title: '礼物价格',
      field: 'price',
      amount: true,
      required: true
    }, {
      title: '礼物描述',
      field: 'description',
      type: 'textarea',
      required: true
    }, {
      title: '收货地址',
      field: 'province',
      hidden: !this.view,
      formatter: (v, d) => {
        return `${d.province} ${d.city} ${d.area} ${d.reAddress}`;
      }
    }, {
      title: '失效时间',
      field: 'invalidDatetime',
      type: 'date',
      required: true
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629326,
      addCode: 629320,
      beforeSubmit: (params) => {
        params.adoptTreeCode = this.adoptTreeCode;
        return params;
      }
    });
  }
}

export default GiveGift;
