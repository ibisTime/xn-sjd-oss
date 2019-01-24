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
} from '@redux/seller/postage';
import { listWrapper } from 'common/js/build-list';
import fetch from 'common/js/fetch';
import { showSucMsg, showWarnMsg, getUserId, getCompanyCode } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.sellerPostage,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class sellerPostage extends React.Component {
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
      title: '发货地',
      field: 'deliverPlace',
      type: 'provSelect',
      required: true
    }, {
      title: '收货地',
      field: 'receivePlace',
      type: 'provSelect',
      required: true
    }, {
      title: '价格',
      field: 'price',
      amount: true,
      required: true
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629745,
      deleteCode: 629741,
      searchParams: {
        shopCode: getCompanyCode()
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

export default sellerPostage;
