import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class SubordinatesAddEdit extends DetailUtil {
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
    let fields = [{
      title: '用户名',
      field: 'loginName',
      hidden: !this.code,
      maxlength: 30
    }, {
      title: '公司名称',
      field: 'companyName',
      _keys: ['company', 'name']
    }, {
      title: '公司负责人',
      field: 'companyCharger',
      _keys: ['company', 'charger']
    }, {
      title: '负责人联系方式',
      field: 'chargerMobile',
      _keys: ['company', 'chargeMobile'],
      mobile: true
    }, {
      title: '公司地址',
      field: 'companyAddress',
      _keys: ['company', 'address']
    }];
    return this.buildDetail({
      fields,
      key: 'userId',
      code: this.code,
      view: this.view,
      detailCode: 730086
    });
  }
}

export default SubordinatesAddEdit;
