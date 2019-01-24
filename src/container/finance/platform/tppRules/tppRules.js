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
} from '@redux/finance/platform/tppRules';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.platformTppRules,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class TppRules extends React.Component {
  render() {
    const fields = [{
      title: '参数值',
      field: 'cvalue'
    }, {
      title: '参数名',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'id',
      pageCode: 630045,
      searchParams: {
        type: 'TPP_RULE'
      }
    });
  }
}

export default TppRules;
