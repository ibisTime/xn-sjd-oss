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
} from '@redux/finance/platform/pre-distributionRules';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.platformPreDistributionRules,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class PreDistributionRules extends React.Component {
  render() {
    const fields = [{
      title: '数值(%)',
      field: 'cvalue',
      render: (v) => (v * 100).toFixed(2)
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'id',
      pageCode: 630045,
      searchParams: {
        type: 'PRESELL_DIST_RATE'
      }
    });
  }
}

export default PreDistributionRules;
