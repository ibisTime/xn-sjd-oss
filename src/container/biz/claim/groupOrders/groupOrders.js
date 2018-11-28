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
      title: '产品名称',
      field: 'name',
      render: (v, d) => d.product ? d.product.name : ''
    }, {
      title: '产品分类',
      field: 'parentCategoryCode',
      type: 'select',
      listCode: '629007',
      params: {level: 1},
      keyName: 'code',
      valueName: 'name',
      render: (v, d) => {
        if (this.props.searchData.parentCategoryCode && d.product) {
          let obj = this.props.searchData.parentCategoryCode.find(c => c.code === d.product.parentCategoryCode);
          return obj ? obj.name : '';
        }
        return '';
      }
    }, {
      title: '规格',
      field: 'productSpecsName'
    }, {
      title: '认养分类',
      field: 'sellType',
      type: 'select',
      key: 'sell_type',
      render: (v, d) => {
        if (this.props.searchData.sellType && d.product) {
          let obj = this.props.searchData.sellType.find(c => c.dkey === d.product.sellType);
          return obj ? obj.dvalue : '';
        }
        return '';
      }
    }, {
      title: '认养数量',
      field: 'quantity'
    }, {
      title: '订单金额',
      field: 'amount',
      amount: true
    }, {
      title: '实际支付金额',
      field: 'payAmount',
      amount: true
    }, {
      title: '抵扣的人民币',
      field: 'cnyDeductAmount',
      amount: true
    }, {
      title: '使用积分数量',
      field: 'jfDeductAmount',
      amount: true
    }, {
      title: '认养人',
      field: 'applyUserName'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'group_adopt_order_status',
      search: true
    }, {
      title: '备注',
      field: 'remark'
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
