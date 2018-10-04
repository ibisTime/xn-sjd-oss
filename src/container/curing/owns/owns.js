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
import { showWarnMsg } from 'common/js/util';

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
      title: '用户编号',
      field: 'ownerId'
    }, {
      title: '手机号',
      field: 'mobile',
      render: (v, d) => d.ownerUser ? d.ownerUser.mobile : ''
    }];
    return this.props.buildList({
      fields,
      pageCode: '629605',
      searchParams: {
        maintainId: this.code,
        status: '3'
      }
    });
  }
}

export default CuringOwns;
