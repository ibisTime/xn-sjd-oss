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
import { showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.conserveBinds
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class ConserveBinds extends React.Component {
  render() {
    const fields = [{
      title: '用户编号',
      field: 'ownerId'
    }, {
      title: '真实姓名',
      field: 'realName'
    }, {
      title: '手机号',
      field: 'mobile'
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
            this.props.history.push(`/conserve/conserve/binds/addedit?code=${keys[0]}&v=1`);
          }
        }
      }]
    });
  }
}

export default ConserveBinds;
