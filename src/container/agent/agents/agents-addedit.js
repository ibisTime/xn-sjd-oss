import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId, isUndefined } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class AgentsAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.check = !!getQueryString('check', this.props.location.search);
    this.state = {
      ...this.state,
      isTop: !this.code
    };
  }
  checkUser(approveResult, params) {
    this.doFetching();
    params.approveResult = approveResult;
    fetch(730074, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
  getIsTop() {
    let { pageData } = this.state;
    return (isUndefined(pageData) || isUndefined(pageData.parentUserId) ||
      pageData.parentUserId === '0') ? '1' : '0';
  }
  render() {
    const fields = [{
      title: '是否顶级',
      field: 'isTop',
      type: 'select',
      data: [{
        dkey: '0',
        dvalue: '否'
      }, {
        dkey: '1',
        dvalue: '是'
      }],
      required: true,
      value: this.getIsTop(),
      onChange: (v) => {
        this.setState({ isTop: v === '1' });
      },
      readonly: this.code && !this.check
    }, {
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
      hidden: this.state.isTop,
      required: !this.state.isTop,
      readonly: this.code && !this.check
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
      field: 'name',
      _keys: ['company', 'name'],
      required: true
    }, {
      title: '公司负责人',
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
      title: '公司地址',
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
      single: true,
      required: true
    }, {
      title: '组织机构代码',
      field: 'organizationCode',
      _keys: ['company', 'organizationCode'],
      required: true
    }];
    let config = {
      fields,
      key: 'userId',
      code: this.code,
      view: this.view,
      detailCode: 730086,
      addCode: 730072
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

export default AgentsAddEdit;
