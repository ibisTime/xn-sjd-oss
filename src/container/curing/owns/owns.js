import React from 'react';
import { Modal } from 'antd';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/curing/owns';
import { listWrapper } from 'common/js/build-list';
import { getUserId, moneyFormat } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.curingOwns
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class CuringOwns extends React.Component {
  render() {
    const fields = [{
      title: '账号',
      field: 'ownerId',
      search: true
    }, {
      title: '联系方式',
      field: 'mobile',
      render: (v, d) => d.ownerUser ? d.ownerUser.mobile : ''
    }, {
        title: '养护树木数量',
        field: 'ownerTreeCount'
    }, {
        title: '累计养护费用',
        field: 'totalAmount',
        render: (v, d) => d.maintainCnyAccount ? moneyFormat(d.maintainCnyAccount.totalAmount) : ''
    }];
    return this.props.buildList({
      fields,
      pageCode: '629605',
      searchParams: {
        maintainId: getUserId(),
        status: '3'
      }
    });
  }
}

export default CuringOwns;
