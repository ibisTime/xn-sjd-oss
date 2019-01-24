  import React from 'react';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/biz/claim/giftOrders';
import { listWrapper } from 'common/js/build-list';
import { dateTimeFormat, showWarnMsg, getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.claimGiftOrders
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class GiftOrders extends React.Component {
  constructor(props) {
    super(props);
    this.adoptTreeCode = getQueryString('code', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '礼物名称',
      field: 'name'
    }, {
      title: '礼物价格',
      field: 'price',
      amount: true
    }, {
      title: '认领人',
      field: 'claimerName'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'gift_order_status',
      search: true
    }, {
      title: '收货地址',
      field: 'province',
      render: (v, d) => {
        return `${d.province} ${d.city} ${d.area} ${d.reAddress}`;
      }
    }, {
      title: '发放时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
      title: '失效时间',
      field: 'invalidDatetime',
      type: 'datetime'
    }, {
      title: '认领时间',
      field: 'claimDatetime',
      type: 'date',
      rangedate: ['claimDatetimeStart', 'claimDatetimeEnd'],
      render: dateTimeFormat,
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629325,
      searchParams: {
        adoptTreeCode: this.adoptTreeCode
      },
      buttons: [{
        name: '发货',
        code: 'delivery',
        handler: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/claim/rights/giftOrders/delivery?code=${keys[0]}&v=1`);
          }
        }
      }, {
        name: '详情',
        code: 'detail',
        handler: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/claim/rights/giftOrders/addedit?code=${keys[0]}&v=1`);
          }
        }
      }, {
        name: '返回',
        code: 'back',
        handler: () => this.props.history.go(-1)
      }]
    });
  }
}

export default GiftOrders;
