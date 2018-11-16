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
} from '@redux/finance/platform/invitation';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.platformInvitation,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Invitation extends React.Component {
  render() {
    const fields = [{
      title: '参数值',
      field: 'cvalue',
      type: 'img'
    }, {
      title: '参数名',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'id',
      pageCode: 630045,
      searchParams: {
        ckey: 'INVITATION'
      }
    });
  }
}

export default Invitation;
