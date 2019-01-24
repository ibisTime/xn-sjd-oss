import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class ConOrderAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
    this.detail = !!getQueryString('detail', this.props.location.search);
  }
  fahuo(params) {
    this.doFetching();
    params.deliver = getUserId();
    fetch(629460, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
  render() {
    const fields = [{
      title: '编号',
      field: 'code',
      search: true
    }, {
      title: '产品名称',
      field: 'name',
      _keys: ['presellProduct', 'name']
      // render: (v, d) => d.presellProduct ? d.presellProduct.name || d.presellProduct.mobile : ''
    }, {
      title: '产品分类',
      field: 'parentCategoryCode',
      _keys: ['presellProduct', 'parentCategoryCode'],
      type: 'select',
      listCode: '629007',
      params: {type: 1},
      keyName: 'code',
      valueName: 'name',
      render: (v, d) => {
        if (this.props.searchData.parentCategoryCode && d.presellProduct) {
          let obj = this.props.searchData.parentCategoryCode.find(c => c.code === d.presellProduct.parentCategoryCode);
          return obj ? obj.name : '';
        }
        return '';
      }
    }, {
      title: '产品小类',
      field: 'categoryCode',
      _keys: ['presellProduct', 'categoryCode'],
      type: 'select',
      listCode: '629007',
      params: {type: 1},
      keyName: 'code',
      valueName: 'name',
      render: (v, d) => {
        if (this.props.searchData.categoryCode && d.presellProduct) {
          let obj = this.props.searchData.categoryCode.find(c => c.code === d.presellProduct.categoryCode);
          return obj ? obj.name : '';
        }
        return '';
      }
    }, {
      title: '发货数量',
      field: 'deliverCount'
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
      field: 'address'
    }, {
      title: '收货人',
      field: 'receiver'
    }, {
      title: '收货人手机号',
      field: 'receiverMobile'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'presell_logistics_status',
      search: true
    }, {
      field: 'logisticsCompany',
      title: '物流公司',
      type: 'select',
      key: 'logistics_company',
      readonly: this.detail,
      required: true
    }, {
      field: 'logisticsNumber',
      title: '物流单号',
      readonly: this.detail,
      required: true
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629466,
      buttons: this.detail ? [
        {
          title: '返回',
          check: true,
          handler: () => {
            this.props.history.go(-1);
          }
        }
      ] : [
        {
          title: '确认发货',
          check: true,
          type: 'primary',
          handler: (params) => {
            this.fahuo(params);
          }
        }
      ]
    });
  }
}

export default ConOrderAddedit;
