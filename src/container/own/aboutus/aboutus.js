import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId, clearUser } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class Aboutus extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getUserId();
  }
  render() {
    let fields = [{
      field: 'kind',
      value: 'O',
      hidden: true
    }, {
      title: '手机号',
      field: 'mobile',
      required: true,
      mobile: true
    }, {
      title: '公司/组织名称',
      field: 'companyName',
      _keys: ['company', 'name'],
      placeholder: '若是个人请直接填写姓名',
      required: true
    }, {
      title: '负责人',
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
      title: '地址',
      field: 'companyAddress',
      _keys: ['company', 'address'],
      required: true
    }, {
      title: '简介',
      field: 'description',
      _keys: ['company', 'description'],
      type: 'textarea',
      normalArea: true,
      maxlength: 200,
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
    }];
    // if (this.view && !this.check) {
    fields = fields.concat([{
      title: '合同模版',
      field: 'contractTemplate',
      _keys: ['company', 'contractTemplate'],
      type: 'textarea',
      required: true
    }, {
      title: '证书模版',
      field: 'certificateTemplate',
      _keys: ['company', 'certificateTemplate'],
      type: 'img',
      single: true,
      required: true
    }, {
           title: '公司公章',
          field: 'commonSeal',
          _keys: ['company', 'commonSeal'],
          type: 'img',
          single: true
    }]);
    // }
    fields = fields.concat([{
      title: '备注',
      field: 'remark'
    }]);
    return this.buildDetail({
      fields,
      key: 'userId',
      code: this.code,
      view: true,
      detailCode: 630067,
      buttons: [
      //   {
      //   title: '保存',
      //   check: true,
      //   handler: (params) => {
      //     this.doFetching();
      //     fetch(630080, params).then((res) => {
      //       if(res.isSuccess) {
      //         showSucMsg('操作成功');
      //         setTimeout(() => {
      //           clearUser();
      //           window.location.href = '/login';
      //         }, 500);
      //       }
      //       this.cancelFetching();
      //     }).catch(this.cancelFetching);
      //   }
      // }
      ]
    });
  }
}

export default Aboutus;
