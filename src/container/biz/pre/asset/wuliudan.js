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
} from '@redux/own/wuliudan';
import { listWrapper } from 'common/js/build-list';
import { showSucMsg, showWarnMsg, getUserId, getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ownWuliudan,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class OwnWuliudan extends React.Component {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.status = getQueryString('status', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '编号',
      field: 'code',
      search: true
    }, {
      title: '省',
      field: 'province'
    }, {
      title: '市',
      field: 'city'
    }, {
      title: '区',
      field: 'area'
    }, {
      title: '详细地址',
      field: 'address'
    }, {
      title: '收货人',
      field: 'receiver'
    }, {
      title: '收货人手机号',
      field: 'receiverMobile'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'presell_logistics_status',
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629465,
      view: false,
      searchParams: {
        originalGroupCode: this.code
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
            this.props.history.push(`/pre/asset/wuliudan/fahuo?v=1&code=${keys[0]}`);
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

export default OwnWuliudan;
