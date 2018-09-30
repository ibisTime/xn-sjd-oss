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
} from '@redux/own/claimOrders';
import { listWrapper } from 'common/js/build-list';
import fetch from 'common/js/fetch';
import { showSucMsg, showWarnMsg, getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ownClaimOrders,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class ClaimOrders extends React.Component {
  render() {
    const fields = [{
      title: '认养订单编号',
      field: 'adoptOrderCode'
    }, {
      title: '订单金额',
      field: 'amount',
      amount: true
    }, {
      title: '认养人',
      field: 'currentHolder'
    }, {
      title: '订单剩余时间',
      field: 'status'
    }, {
      title: '养护方',
      field: 'scientificName1'
    }, {
      title: '订单生成时间',
      field: 'variety1'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629205,
      btnEvent: {
        // 0草稿/1已提交待审核/2审核不通过/3审核通过待上架/4已上架待认养/5已锁定/6已认养/7已下架
        edit: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '0') {
            showWarnMsg('该记录不可编辑');
          } else {
            this.props.history.push(`/own/products/addedit?code=${keys[0]}`);
          }
        },
        up: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '0') {
            showWarnMsg('该记录不是待上架状态');
          } else {
            this.upDown(keys[0]);
          }
        },
        down: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '4') {
            showWarnMsg('该记录不是待下架状态');
          } else {
            this.upDown(keys[0]);
          }
        }
      }
    });
  }
}

export default ClaimOrders;
