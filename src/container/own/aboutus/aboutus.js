import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

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
      required: true
    }, {
      title: '负责人',
      field: 'companyCharger',
      required: true
    }, {
      title: '联系方式',
      field: 'chargerMobile',
      mobile: true,
      required: true
    }, {
      title: '地址',
      field: 'companyAddress',
      required: true
    }, {
      title: '简介',
      field: 'description',
      type: 'textarea',
      normalArea: true
    }, {
      title: '营业执照',
      field: 'bussinessLicense',
      type: 'img',
      single: true
    }, {
      title: '上传合同模版',
      field: 'contractTemplate',
      type: 'file'
    }, {
      title: '上传证书模版',
      field: 'certificateTemplate',
      type: 'file'
    }];
    return this.buildDetail({
      fields,
      key: 'userId',
      code: this.code,
      detailCode: 630067,
      editCode: 630302
    });
  }
}

export default Aboutus;
