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
} from '@redux/biz/claim/tppOrders';
import { listWrapper } from 'common/js/build-list';
import { dateTimeFormat, showWarnMsg, getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.claimRightsTppOrders
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class RightsTppOrders extends React.Component {
  constructor(props) {
    super(props);
    this.adoptTreeCode = getQueryString('code', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '碳泡泡数量',
      field: 'quantity',
      amount: true
    }, {
      title: '生成时间',
      field: 'createDatetime',
      type: 'date',
      render: dateTimeFormat,
      rangedate: ['createDatetimeStart', 'createDatetimeEnd'],
      search: true
    }, {
      title: '过期时间',
      field: 'invalidDatetime',
      type: 'datetime'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      data: [{
        dkey: '0',
        dvalue: '待收取'
      }, {
        dkey: '1',
        dvalue: '已收完'
      }, {
        dkey: '2',
        dvalue: '已过期'
      }],
      keyName: 'dkey',
      valueName: 'dvalue',
      search: true
    }, {
      title: '收取人昵称',
      render: (v, d) => d.takeUser ? d.takeUser.nickname : '-'
    }, {
      title: '收取时间',
      field: 'takeDatetime',
      type: 'date',
      render: dateTimeFormat,
      rangedate: ['takeDatetimeStart', 'takeDatetimeEnd'],
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629355,
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
            this.props.history.push(`/claim/rights/tppOrders/addedit?code=${keys[0]}&v=1`);
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

export default RightsTppOrders;
