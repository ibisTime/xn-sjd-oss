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
      _keys: ['company', 'name'],
      readonly: true
    }, {
      title: '负责人',
      field: 'companyCharger',
      _keys: ['company', 'charger'],
      readonly: true
    }, {
      title: '联系方式',
      field: 'chargerMobile',
      _keys: ['company', 'chargeMobile'],
      mobile: true,
      readonly: true
    }, {
      title: '地址',
      field: 'companyAddress',
      _keys: ['company', 'address'],
      readonly: true
    }, {
      title: '简介',
      field: 'description',
      _keys: ['company', 'description'],
      type: 'textarea',
      normalArea: true,
      readonly: true
    }, {
      title: '营业执照',
      field: 'bussinessLicense',
      _keys: ['company', 'bussinessLicense'],
      type: 'img',
      single: true,
      readonly: true
    }, {
      title: '组织机构代码',
      field: 'organizationCode',
      _keys: ['company', 'organizationCode'],
      required: true
    }, {
      title: '合同模版',
      field: 'contractTemplate',
      _keys: ['company', 'contractTemplate'],
      type: 'textarea',
      required: true
    }, {
      title: '证书模版',
      field: 'certificateTemplate',
      _keys: ['company', 'contractTemplate'],
      type: 'img',
      single: true,
      required: true
    }];
    return this.buildDetail({
      fields,
      key: 'userId',
      code: this.code,
      detailCode: 630067,
      buttons: [{
        title: '保存',
        check: true,
        handler: (params) => {
          this.doFetching();
          fetch(630064, params).then(() => {
            this.cancelFetching();
            showSucMsg('操作成功');
          }).catch(this.cancelFetching);
        }
      }]
    });
  }
}

export default Aboutus;
