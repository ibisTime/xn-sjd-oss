import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class ProductsAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.check = !!getQueryString('check', this.props.location.search);
  }
  checkProduct(approveResult, params) {
    this.doFetching();
    params.approveResult = approveResult;
    fetch(629602, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
  getPageFields() {
    return this.check ? [{
      title: '产权方',
      field: 'ownerId',
      _keys: ['ownerUser', 'mobile']
    }, {
      title: '养护方',
      field: 'maintainId',
      _keys: ['maintainUser', 'mobile']
    }, {
      title: '备注',
      field: 'remark',
      maxlength: 30,
      readonly: false
    }] : [{
      title: '产权方',
      field: 'ownerId',
      type: 'select',
      pageCode: 630065,
      params: { status: 2, kind: 'O' },
      keyName: 'userId',
      valueName: 'mobile',
      searchName: 'keyword',
      required: true
    }, {
      title: '养护方',
      field: 'maintainId',
      type: 'select',
      pageCode: 630065,
      params: { status: 2, kind: 'M' },
      keyName: 'userId',
      valueName: 'mobile',
      searchName: 'keyword',
      required: true
    }];
  }
  render() {
    const fields = this.getPageFields();
    let config = {
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629606,
      addCode: 629600,
      editCode: 629602
    };
    if (this.check) {
      config.buttons = [{
        title: '通过',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.checkProduct(1, params);
        }
      }, {
        title: '不通过',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.checkProduct(0, params);
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

export default ProductsAddEdit;
