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
  }
  checkOrder(approveResult, params) {
    this.doFetching();
    params.approveResult = approveResult;
    params.refCode = this.code;
    params.refType = this.state.pageData.type;
    params.handler = getUserId();
    fetch(629640, params).then(data => {
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
    }, {
      title: '认养人',
      field: 'applyUser'
    }, {
      title: '状态',
      field: 'settleStatus',
      type: 'select',
      key: 'adopt_settle_status',
      search: true
    }, {
      title: '下单时间',
      field: 'applyDatetime',
      type: 'datetime'
    }, {
      type: 'o2m',
      field: 'settleList',
      options: {
        fields: [{
          title: '代理商',
          field: 'mobile',
          render: (v, d) => d.agentUser ? d.agentUser.mobile : ''
        }, {
          title: '提成额',
          field: 'amount',
          amount: true
        }, {
          title: '发生时间',
          field: 'createDatetime',
          type: 'datetime'
        }, {
          title: '状态',
          field: 'status',
          type: 'select',
          key: 'adopt_order_tree_status'
        }, {
          title: '备注',
          field: 'remark'
        }]
      }
    }, {
      title: '备注',
      field: 'handleNote',
      readonly: !this.check
    }];
    let config = {
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629046,
      beforeDetail: (params) => {
        params.isSettle = '1';
      }
    };
    if (this.check) {
      config.buttons = [{
        title: '通过',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.checkOrder(1, params);
        }
      }, {
        title: '不通过',
        check: true,
        type: 'primary',
        handler: (params) => {
          this.checkOrder(0, params);
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
