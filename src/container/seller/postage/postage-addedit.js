import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserId, showSucMsg, getCompanyCode } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class SellerOrderAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.fahuo = getQueryString('fahuo', this.props.location.search);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  fahuoFun(params) {
    this.doFetching();
    params.deliver = getUserId();
    fetch(629730, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
  render() {
    const fields = [{
      title: '商铺编号',
      field: 'shopCode',
      value: getCompanyCode(),
      hidden: true
    }, {
      title: '发货地',
      field: 'deliverPlace',
      type: 'provSelect',
      required: true,
      hidden: this.code
    }, {
      title: '收货地',
      field: 'receivePlace',
      type: 'provSelect',
      required: true,
      hidden: this.code
    }, {
      title: '价格',
      field: 'price',
      amount: true,
      required: true
    }, {
      title: '备注',
      field: 'remark'
    }];
    let config = {
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629746,
      addCode: 629740,
      editCode: 629742
    };
    if (this.fahuo) {
      config.buttons = [{
        title: 'fahuo',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.fahuoFun(params);
        }
      }, {
        title: '返回',
        handler: () => {
          this.props.history.go(-1);
        }
      }];
    }
    return this.buildDetail(config);
  }
}

export default SellerOrderAddEdit;
