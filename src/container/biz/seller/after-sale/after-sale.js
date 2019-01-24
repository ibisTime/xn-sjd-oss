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
} from '@redux/biz/seller/after-sale';
import { listWrapper } from 'common/js/build-list';
import { showSucMsg, showWarnMsg, getUserId, getCompanyCode, moneyFormat } from 'common/js/util';
@listWrapper(
  state => ({
    ...state.sellerAfterSale,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class sellerAfterSale extends React.Component {
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code'
    }, {
      title: '商品名称',
      field: 'commodityName',
      render: (v, d) => d.orderDetail ? d.orderDetail.commodityName : ''
    }, {
      title: '规格名称',
      field: 'specsName',
      render: (v, d) => d.orderDetail ? d.orderDetail.specsName : ''
    }, {
      title: '数量',
      field: 'quantity',
      render: (v, d) => d.orderDetail ? d.orderDetail.quantity : ''
    }, {
      title: '订单金额',
      field: 'amount1',
      render: (v, d) => d.orderDetail ? moneyFormat(d.orderDetail.amount) : 0
    }, {
      title: '退款金额',
      field: 'refundAmount',
      amount: true
    }, {
      title: '售后诉求',
      field: 'type',
      type: 'select',
      key: 'after_sale_type',
      search: true
    }, {
      title: '售后订单状态',
      field: 'status',
      type: 'select',
      key: 'after_sale_status',
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629775,
      searchParams: {
        shopCode: getCompanyCode()
      }
    });
  }
}

export default sellerAfterSale;
