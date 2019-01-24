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
} from '@redux/proxy/unsettled';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.proxyUnSettled,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class UnSettled extends React.Component {
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code'
    }, {
      title: '待结算金额',
      field: 'amount',
      amount: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'settle_status'
    }, {
      title: '下单时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'userId',
      pageCode: 629645,
      searchParams: {
        status: '0',
        userId: getUserId()
      }
    });
  }
}

export default UnSettled;
