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
} from '@redux/biz/seller/order-single';
import { listWrapper } from 'common/js/build-list';
import { showSucMsg, showWarnMsg, getUserId, getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.bizSellerOrderSingle,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class BizSellerOrderSingle extends React.Component {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '编号',
      field: 'code',
      search: true
    }, {
      title: '商品名称',
      field: 'commodityName'
    }, {
      title: '规格名称',
      field: 'specsName'
    }, {
      title: '数量',
      field: 'quantity'
    }, {
      title: '订单金额',
      field: 'amount',
      amount: true
    }, {
      title: '订单状态',
      field: 'status',
      type: 'select',
      key: 'commodity_order_detail_status',
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629735,
      searchParams: {
        orderCode: this.code
      },
      buttons: [{
        name: '详情',
        code: 'detail',
        handler: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/seller/biz-order/addedit?code=${keys[0]}`);
          }
        }
      }, {
          name: '返回',
          code: 'back',
          handler: () => this.props.history.go(-1)
        }
      ]
    });
  }
}

export default BizSellerOrderSingle;
