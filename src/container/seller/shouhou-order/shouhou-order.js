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
} from '@redux/seller/shouhou-order';
import { listWrapper } from 'common/js/build-list';
import fetch from 'common/js/fetch';
import { showSucMsg, showWarnMsg, getUserId, getCompanyCode } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.sellerShouhouOrder,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class sellerShouhouOrder extends React.Component {
  upDown(code, orderNo, location, status) {
    Modal.confirm({
      okText: '确认',
      cancelText: '取消',
      content: `确认提交${status === '4' ? '下架' : '上架'}申请？`,
      onOk: () => {
        this.props.doFetching();
        return fetch(629402, {
          code,
          orderNo,
          location,
          updater: getUserId()
        }).then(() => {
          showSucMsg('操作成功');
          this.props.getPageData();
        }).catch(() => this.props.cancelFetching());
      }
    });
  }
  render() {
    const fields = [{
      title: '订单编号',
      field: 'orderCode',
      search: true
    }, {
      title: '商品名称',
      field: 'commodityName'
    }, {
      title: '规格名称',
      field: 'specsName'
    }, {
      title: '数量',
      field: 'quantity'
    }, {
      title: '订单金额',
      field: 'amount',
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
        receiver: getUserId()
      },
      btnEvent: {
        // 编辑
        fahuo: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '1') {
            showWarnMsg('该订单不可发货');
          } else {
            this.props.history.push(`/seller/order/addedit?fahuo=1&v=1&code=${keys[0]}`);
          }
        }
      }
    });
  }
}

export default sellerShouhouOrder;
