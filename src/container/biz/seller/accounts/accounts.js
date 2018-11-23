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
} from '@redux/biz/seller/accounts';
import { listWrapper } from 'common/js/build-list';
import { dateTimeFormat, showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.bizSellerAccounts,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class BizSellerAccounts extends React.Component {
  render() {
    const fields = [{
      field: 'mobileForQuery',
      title: '户名',
      search: true,
      noVisible: true
    }, {
      field: 'mobile',
      title: '户名'
    }, {
      field: 'accountNumber',
      title: '账号'
    }, {
      field: 'currency',
      title: '币种',
      type: 'select',
      key: 'currency',
      search: true
    }, {
      field: 'status',
      title: '状态',
      type: 'select',
      key: 'account_status',
      search: true
    }, {
      field: 'amount',
      title: '余额',
      amount: true
    }, {
      field: 'frozenAmount',
      title: '冻结金额',
      amount: true
    }, {
      field: 'createDatetime',
      title: '创建时间',
      type: 'date',
      render: dateTimeFormat,
      rangedate: ['dateStart', 'dateEnd'],
      search: true
    }];
    return this.props.buildList({
      fields,
      rowKey: 'accountNumber',
      pageCode: 802300,
      searchParams: {
        type: 'B'
      },
      btnEvent: {
        // 流水
        flows: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/seller/biz-accounts/flows?code=${keys[0]}&type=B`);
          }
        }
      }
    });
  }
}

export default BizSellerAccounts;