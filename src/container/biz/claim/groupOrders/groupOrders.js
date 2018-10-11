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
      title: '产品小类',
      field: 'categoryCode',
      type: 'select',
      listCode: '629007',
      params: {level: '2'},
      keyName: 'code',
      valueName: 'name',
      render: (v, d) => {
        if (this.props.searchData.categoryCode && d.product) {
          let obj = this.props.searchData.categoryCode.find(c => c.code === d.product.categoryCode);
          return obj ? obj.name : '';
        }
        return '';
      }
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
