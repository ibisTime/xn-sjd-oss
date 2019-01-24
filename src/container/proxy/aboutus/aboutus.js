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
      title: '上级代理',
      field: 'parentUserId',
      type: 'select',
      params: {
        type: 0,
        status: 2
      },
      pageCode: 730085,
      keyName: 'userId',
      valueName: 'mobile',
      searchName: 'keyword',
      readonly: this.check || this.view
    }, {
      title: '用户名',
      field: 'loginName',
      hidden: !this.code,
      maxlength: 30
    }, {
      title: '等级',
      field: 'level',
      type: 'select',
      key: 'agent_level',
      required: true
    }, {
      title: '手机号',
      field: 'mobile',
      required: true,
      mobile: true
    }, {
      title: '公司/组织名称',
      field: 'name',
      _keys: ['company', 'name'],
      placeholder: '若是个人请直接填写姓名',
      required: true
    }, {
      title: '负责人',
      field: 'charger',
      _keys: ['company', 'charger'],
      required: true
    }, {
      title: '负责人联系方式',
      field: 'chargeMobile',
      _keys: ['company', 'chargeMobile'],
      mobile: true,
      required: true
    }, {
      title: '辖区',
      field: 'province',
      type: 'citySelect',
      required: true,
      formatter: (v, d) => {
        let result = [];
        if (d.company) {
          let prov = d.company.province;
          if (prov) {
            let city = d.company.city ? d.company.city : '全部';
            let area = d.company.area ? d.company.area : '全部';
            result = [prov, city, area];
          } else {
            result = [];
          }
        }
        return result;
      }
    }, {
      title: '地址',
      field: 'address',
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
      single: true
    }, {
      title: '组织机构代码',
      field: 'organizationCode',
      _keys: ['company', 'organizationCode']
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      key: 'userId',
      code: this.code,
      view: true,
      detailCode: 730086,
      buttons: []
    });
  }
}

export default Aboutus;
