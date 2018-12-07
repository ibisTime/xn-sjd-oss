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
} from '@redux/agent/group-settlement';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.agentGroupSettlement,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class MallSettlement extends React.Component {
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code'
    }, {
      title: '订单金额',
      field: 'amount',
      amount: true
    }, {
      title: '实际支付金额',
      field: 'payAmount',
      amount: true
    }, {
      title: '积分抵扣金额',
      field: 'jfDeductAmount',
      amount: true
    }, {
      title: '运费',
      field: 'postalFee',
      amount: true
    }, {
      title: '下单人',
      field: 'applyUserName'
    }, {
      title: '结算状态',
      field: 'settleStatus',
      type: 'select',
      key: 'commodity_settle_status',
      search: true
    }, {
      title: '订单状态',
      field: 'status',
      type: 'select',
      key: 'commodity_order_status'
    }, {
      title: '下单时间',
      field: 'applyDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629725,
      searchParams: { status: '1', existsSettle: 1 },
      btnEvent: {
        // 状态（0不结算/1待结算/2已结算）
        edit: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].settleStatus !== '1') {
            showWarnMsg('该用户不是待结算状态');
          } else {
            this.props.history.push(`/mall/mall-settlement/addedit?code=${keys[0]}&v=1&check=1`);
          }
        }
      }
    });
  }
}

export default MallSettlement;
