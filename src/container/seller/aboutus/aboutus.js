import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class sellerAboutus extends DetailUtil {
    constructor(props) {
        super(props);
        this.code = getUserId();
    }
    render() {
        const fields = [{
          field: 'kind',
          value: 'B',
          hidden: true
        }, {
          title: '手机号',
          field: 'mobile',
          required: true,
          mobile: true
        }, {
          title: '店铺名称',
          field: 'companyName',
          _keys: ['company', 'name'],
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
        }, {
          title: '备注',
          field: 'remark'
        }];
        return this.buildDetail({
          fields,
          key: 'userId',
          code: this.code,
          view: true,
          detailCode: 630067,
          buttons: [
          //   {
          //     title: '保存',
          //     check: true,
          //     handler: (params) => {
          //         this.doFetching();
          //         fetch(630064, params).then(() => {
          //             this.cancelFetching();
          //             showSucMsg('操作成功');
          //         }).catch(this.cancelFetching);
          //     }
          // }
          ]
        });
    }
}

export default sellerAboutus;
