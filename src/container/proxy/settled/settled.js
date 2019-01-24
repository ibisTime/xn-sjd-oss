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
} from '@redux/proxy/settled';
import { listWrapper } from 'common/js/build-list';
import { getUserId, dateTimeFormat } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.proxySettled,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Settled extends React.Component {
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code'
    }, {
      title: '消费帐号',
      field: 'applyUserName'
    }, {
      title: '概述',
      field: 'refNote'
    }, {
      title: '佣金',
      field: 'amount',
      amount: true
    }, {
      title: '发生时间',
      field: 'createDatetime',
      type: 'date',
      render: dateTimeFormat,
      rangedate: ['createStartDatetime', 'createEndDatetime'],
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629645,
      searchParams: {
        status: '1',
        userId: getUserId()
      }
    });
  }
}

export default Settled;
