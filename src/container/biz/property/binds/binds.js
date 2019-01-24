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
} from '@redux/biz/property/binds';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.propertyBinds,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Binds extends React.Component {
  render() {
    const fields = [{
      title: '产权方',
      field: 'ownerId',
      render: (v, d) => d.ownerUser ? d.ownerUser.mobile : '',
      _keys: ['ownerUser', 'mobile']
    }, {
      title: '产权方',
      field: 'ownerUserName',
      search: true,
      noVisible: true
    }, {
      title: '养护方',
      field: 'maintainId',
      render: (v, d) => d.maintainUser ? d.maintainUser.mobile : '',
      _keys: ['maintainUser', 'mobile']
    }, {
      title: '养护方',
      field: 'maintainUserName',
      search: true,
      noVisible: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      data: [{
        key: '1',
        value: '待审核'
      }, {
        key: '2',
        value: '审核不通过'
      }, {
        key: '3',
        value: '已绑定'
      }, {
        key: '4',
        value: '已解除'
      }],
      keyName: 'key',
      valueName: 'value',
      search: true
    }, {
      title: '更新人',
      field: 'updaterName'
    }, {
      title: '更新时间',
      field: 'updateDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: '629605',
      btnEvent: {
        check: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '1') {
            showWarnMsg('该记录不是待绑定状态');
          } else {
            this.props.history.push(`/property/binds/addedit?code=${keys[0]}&v=1&check=1`);
          }
        }
      }
    });
  }
}

export default Binds;
