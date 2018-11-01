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
} from '@redux/biz/prop/buyRecords';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.propBuyRecords,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class BuyRecords extends React.Component {
  render() {
    const fields = [{
      title: '道具名',
      field: 'toolName',
      search: true
    }, {
      title: '购买价格',
      field: 'price',
      amount: true
    }, {
      title: '购买人',
      field: 'userId',
      render: (v, d) => d.userInfo && d.userInfo.nickname ? `${d.userInfo.nickname} ${d.userInfo.mobile}` : `${d.userInfo.mobile}`
    }, {
      title: '购买时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629515
    });
  }
}

export default BuyRecords;
