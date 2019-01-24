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
} from '@redux/biz/claim/rights-logs';
import { listWrapper } from 'common/js/build-list';
import { dateTimeFormat, getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.claimRightsLogs
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class RightsLogs extends React.Component {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '操作人',
      field: 'userId',
      render: (v, d) => d.userInfo ? d.userInfo.mobile : ''
    }, {
      title: '类型',
      field: 'type',
      type: 'select',
      key: 'biz_log_type',
      search: true
    }, {
      title: '操作时间',
      field: 'createDatetime',
      type: 'date',
      rangedate: ['createDatetimeStart', 'createDatetimeEnd'],
      render: dateTimeFormat,
      search: true
    }];
    return this.props.buildList({
      fields,
      rowKey: 'id',
      pageCode: 629305,
      searchParams: {
        adoptTreeCode: this.code
      },
      buttons: [{
        name: '返回',
        code: 'back',
        handler: () => this.props.history.go(-1)
      }]
    });
  }
}

export default RightsLogs;
