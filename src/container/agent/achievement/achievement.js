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
} from '@redux/agent/achievement';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.agentAchievement,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Achievement extends React.Component {
  render() {
    const fields = [{
      title: '代理商',
      field: 'userName'
    }, {
      title: '订单编号',
      field: 'code'
    }, {
      title: '认养产品',
      field: 'productName'
    }, {
      title: '认养规格',
      field: 'productSpecsName',
      render: (v, d) => {
        // d.adoptOrder ? d.adoptOrder.productSpecsName : d.presellOrder ? d.presellOrder.specsName
          if(d.adoptOrder) {
            return d.adoptOrder.productSpecsName;
          } else if(d.presellOrder) {
            return d.presellOrder.specsName;
          } else if(d.groupAdoptOrder) {
            return d.groupAdoptOrder.productSpecsName;
          } else if(d.commodityOrder) {
            return d.commodityOrder.specsNames;
          }
      }
    }, {
      title: '认养人',
      field: 'applyUserName'
    }, {
      title: '结算金额',
      field: 'amount',
      amount: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'settle_status'
    }, {
      title: '下单时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629645,
      searchParams: {
        status: '1'
      }
    });
  }
}

export default Achievement;
