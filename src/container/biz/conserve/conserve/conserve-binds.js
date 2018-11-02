import React from 'react';
import { Modal } from 'antd';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/biz/conserve/conserve-binds';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.conserveBinds
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class ConserveBinds extends React.Component {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '帐号',
      field: 'loginName',
      render: (v, d) => d.ownerUser ? d.ownerUser.loginName : ''
    }, {
      title: '公司名称',
      field: 'name',
      render: (v, d) => d.ownerUser.company ? d.ownerUser.company.name : ''
    }, {
      title: '负责人',
      field: 'charger',
      render: (v, d) => d.ownerUser.company ? d.ownerUser.company.charger : ''
    }, {
      title: '联系方式',
      field: 'mobile',
      render: (v, d) => d.ownerUser.company ? d.ownerUser.company.chargeMobile : ''
    }];
    return this.props.buildList({
      fields,
      pageCode: '629605',
      searchParams: {
        maintainId: this.code,
        status: '3'
      },
      buttons: [{
        name: '详情',
        code: 'detail',
        handler: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/conserve/conserve/binds/addedit?code=${items[0].ownerUser.userId}&v=1`);
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

export default ConserveBinds;
