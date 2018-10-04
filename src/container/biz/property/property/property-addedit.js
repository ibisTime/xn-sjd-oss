import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class PropertyAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.check = !!getQueryString('check', this.props.location.search);
  }
  checkUser(approveResult, params) {
    this.doFetching();
    params.approveResult = approveResult;
    fetch(630062, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
  render() {
    const fields = [{
      field: 'kind',
      value: 'O',
      hidden: true
    }, {
      title: '用户名',
      field: 'loginName',
      hidden: !this.code,
      maxlength: 30
    }, {
      title: '真实姓名',
      field: 'realName',
      hidden: !this.code,
      maxlength: 30
    }, {
      title: '手机号',
      field: 'mobile',
      required: true,
      mobile: true
    }, {
      title: '公司名称',
      field: 'companyName',
      _keys: ['company', 'name'],
      required: true
    }, {
      title: '公司负责人',
      field: 'companyCharger',
      _keys: ['company', 'charger'],
      required: true
    }, {
      title: '负责人联系方式',
      field: 'chargerMobile',
      _keys: ['company', 'chargeMobile'],
      mobile: true,
      required: true
    }, {
      title: '公司地址',
      field: 'companyAddress',
      _keys: ['company', 'address'],
      required: true
    }, {
      title: '简介',
      field: 'description',
      _keys: ['company', 'description'],
      type: 'textarea',
      normalArea: true,
      required: true
    }, {
      title: '营业执照',
      field: 'bussinessLicense',
      _keys: ['company', 'bussinessLicense'],
      type: 'img',
      single: true,
      required: true
    }, {
      title: '备注',
      field: 'remark',
      maxlength: 250
    }];
    let config = {
      fields,
      key: 'userId',
      code: this.code,
      view: this.view,
      detailCode: 630067,
      addCode: 630063
    };
    if (this.check) {
      config.buttons = [{
        title: '通过',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.checkUser(1, params);
        }
      }, {
        title: '不通过',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.checkUser(0, params);
        }
      }, {
        title: '返回',
        handler: (params) => {
          this.props.history.go(-1);
        }
      }];
    }
    return this.buildDetail(config);
  }
}

export default PropertyAddEdit;
