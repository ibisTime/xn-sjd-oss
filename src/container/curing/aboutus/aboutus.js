import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class Aboutus extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getUserId();
  }
  render() {
    const fields = [{
      title: '名称',
      field: 'companyName',
      _keys: ['company', 'name']
    }, {
      title: '负责人',
      field: 'companyCharger',
      _keys: ['company', 'charger']
    }, {
      title: '联系方式',
      field: 'chargerMobile',
      _keys: ['company', 'chargeMobile'],
      mobile: true
    }, {
      title: '地址',
      field: 'companyAddress',
      _keys: ['company', 'address']
    }, {
      title: '简介',
      field: 'description',
      _keys: ['company', 'description'],
      type: 'textarea',
      normalArea: true
    }, {
      title: '营业执照',
      field: 'bussinessLicense',
      _keys: ['company', 'bussinessLicense'],
      type: 'img',
      single: true
    }, {
      title: '组织机构代码',
      field: 'organizationCode',
      _keys: ['company', 'organizationCode'],
      required: true
    }];
    return this.buildDetail({
      fields,
      key: 'userId',
      code: this.code,
      view: true,
      detailCode: 630067,
      buttons: []
    });
  }
}

export default Aboutus;
