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
} from '@redux/biz/claim/groupOrders';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, showSucMsg, getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.claimGroupOrders,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class GroupOrders extends React.Component {
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code'
    }, {
      title: '古树学名',
      field: 'name'
    }, {
      title: '古树编号',
      field: 'ownerId'
    }, {
      title: '认养人',
      field: 'applyUser'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'group_adopt_order_status',
      search: true
    }, {
      title: '下单时间',
      field: 'applyDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629055
    });
  }
}

export default GroupOrders;
