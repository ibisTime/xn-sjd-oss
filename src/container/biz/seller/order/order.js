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
} from '@redux/biz/seller/order';
import { listWrapper } from 'common/js/build-list';
import { showSucMsg, showWarnMsg, getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.bizSellerOrder,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class BizSellerOrder extends React.Component {
  render() {
    const fields = [{
      title: '编号',
      field: 'code'
    }, {
      title: '商品数量',
      field: 'quantity'
    }, {
      title: '订单金额',
      field: 'amount',
      amount: true
    }, {
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
      title: '订单状态',
      field: 'status',
      type: 'select',
      key: 'commodity_order_status',
      search: true
    }, {
      title: '物流公司',
      field: 'logisticsCompany',
      type: 'select',
      key: 'logistics_company'
    }, {
      title: '物流单号',
      field: 'logisticsNumber'
    }, {
      title: '下单时间',
      field: 'applyDatetime',
      type: 'datetime'
    }, {
      title: '下单人',
      field: 'applyUserName'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629725,
      btnEvent: {
        // 编辑
        detail: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/seller/biz-order/orderSingle?code=${keys[0]}`);
          }
        }
      }
    });
  }
}

export default BizSellerOrder;
