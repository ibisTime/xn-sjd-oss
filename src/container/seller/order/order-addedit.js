import React from 'react';
import { Form } from 'antd';
import { getQueryString, getUserId, showSucMsg } from 'common/js/util';
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
    fetch(629723, params).then(data => {
      this.cancelFetching();
      showSucMsg('操作成功');
      setTimeout(() => {
        this.props.history.go(-1);
      }, 1000);
    }).catch(this.cancelFetching);
  }
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code'
    },
    //   {
    //   title: '产品名称',
    //   field: 'commodityName'
    // }, {
    //   title: '规格名称',
    //   field: 'specsName'
    // }, {
    //   title: '数量',
    //   field: 'quantity'
    // },
      {
      title: '订单金额',
      field: 'amount',
      amount: true
    }, {
      title: '实际支付金额',
      field: 'payAmount',
      amount: true
    }, {
      title: '抵扣的人民币',
      field: 'cnyDeductAmount',
      amount: true
    }, {
      title: '使用积分数量',
      field: 'jfDeductAmount',
      amount: true
    }, {
      title: '下单时间',
      field: 'applyDatetime',
      type: 'datetime'
    }, {
      title: '备注',
      field: 'remark'
    }, {
        title: '订单明细',
        field: 'detailList',
        type: 'o2m',
        noSelect: true,
        options: {
          fields: [{
            title: '产品名称',
            field: 'commodityName'
          }, {
            title: '单价',
            field: 'price',
            amount: true
          }, {
            title: '数量',
            field: 'quantity'
          }, {
            title: '总价',
            field: 'amount',
            amount: true
          }, {
            title: '规格',
            field: 'specsName'
          }, {
            title: '状态',
            field: 'status',
            type: 'select',
            key: 'commodity_order_detail_status'
          }]
        },
        required: true
      }, {
      title: '订单状态',
      field: 'status',
      type: 'select',
      key: 'commodity_cnavigate_status'
    }, {
      title: '地址信息',
      field: 'province',
      formatter: (v, d) => `${d.province} ${d.city} ${d.district} ${d.detailAddress}`
    }, {
      title: '收货人',
      field: 'receiverName'
    }, {
      title: '收货人手机号',
      field: 'receiverMobile'
    }, {
      title: '物流公司',
      field: 'logisticsCompany',
      type: 'select',
      key: 'logistics_company',
      readonly: !this.fahuo
    }, {
      title: '物流单号',
      field: 'logisticsNumber',
      readonly: !this.fahuo
    }];
    let config = {
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629726
    };
    if (this.fahuo) {
      config.buttons = [{
        title: '发货',
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
