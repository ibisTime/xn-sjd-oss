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
      title: '订单编号',
      field: 'code'
    }, {
      title: '认养产品',
      field: 'productName'
    }, {
      title: '认养规格',
      field: 'productSpecsName',
      render: (v, d) => d.adoptOrder ? d.adoptOrder.productSpecsName : ''
    }, {
      title: '认养人',
      field: 'applyUserName'
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
      rowKey: 'userId',
      pageCode: 629645,
      searchParams: {
        status: '1'
      }
    });
  }
}

export default Achievement;
