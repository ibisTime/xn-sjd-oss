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
} from '@redux/biz/pre/preOrder';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, showSucMsg, getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.prePreOrder,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class PreOrder extends React.Component {
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code'
    }, {
      title: '产品名称',
      field: 'productName'
    }, {
      title: '产品分类',
      field: 'categoryCode',
      type: 'select',
      listCode: '629007',
      params: {type: 1},
      keyName: 'code',
      valueName: 'name',
      render: (v, d) => {
        if (this.props.searchData.categoryCode && d.presellProduct) {
          let obj = this.props.searchData.categoryCode.find(c => c.code === d.presellProduct.categoryCode);
          return obj ? obj.name : '';
        }
        return '';
      }
    }, {
      title: '规格',
      field: 'specsName'
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
      title: '下单人',
      field: 'applyUserName'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'presell_order_status',
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
      pageCode: 629425
    });
  }
}

export default PreOrder;
