import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class GiveGift extends DetailUtil {
  constructor(props) {
    super(props);
    this.adoptTreeCode = getQueryString('adopt', this.props.location.search);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  fahuoFn(params) {
    let config = {
      code: params.code
    };
    fetch(629322, config).then(data => {
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    });
  }
  render() {
    const fields = [{
      title: '礼物名称',
      field: 'name',
      required: true,
      maxlength: 30
    }, {
      title: '礼物图片',
      field: 'listPic',
      type: 'img',
      single: true
    }, {
      title: '礼物价格',
      field: 'price',
      amount: true
    }, {
      title: '礼物描述',
      field: 'description',
      type: 'textarea'
    }, {
      title: '失效时间',
      field: 'invalidDatetime',
      type: 'datetime'
    }, {
      title: '收件人',
      field: 'province'
    }, {
      title: '省',
      field: 'province'
    }, {
      title: '市',
      field: 'city'
    }, {
      title: '区',
      field: 'area'
    }, {
      title: '详细地址',
      field: 'reAddress'
    }, {
      title: '手机号',
      field: 'reMobile'
    }];
    return this.buildDetail({
      fields,
      view: this.view,
      code: this.code,
      detailCode: 629326,
      beforeSubmit: (params) => {
        params.adoptTreeCode = this.adoptTreeCode;
        return params;
      },
      buttons: [{
        title: '发货',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.fahuoFn(params);
        }
      }, {
        title: '返回',
        code: 'back',
        handler: () => this.props.history.go(-1)
      }]
    });
  }
}

export default GiveGift;
