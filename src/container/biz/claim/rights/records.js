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
} from '@redux/biz/claim/records';
import { listWrapper } from 'common/js/build-list';
import { dateTimeFormat, showWarnMsg, getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.claimRightsRecords
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class RightsRecords extends React.Component {
  constructor(props) {
    super(props);
    this.adoptTreeCode = getQueryString('code', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '赠送人',
      field: 'userName'
    }, {
      title: '被赠送人',
      field: 'toUserName'
    }, {
      title: '赠送时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629335,
      searchParams: {
        adoptTreeCode: this.adoptTreeCode
      },
      buttons: [{
        name: '详情',
        code: 'detail',
        handler: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/claim/rights/records/addedit?code=${keys[0]}&v=1`);
          }
        }
      }, {
        name: '返回',
        code: 'back',
        handler: () => this.props.history.go(-1)
      }]
    });
  }
}

export default RightsRecords;
