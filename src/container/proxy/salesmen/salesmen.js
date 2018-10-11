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
} from '@redux/proxy/salesmen';
import { listWrapper } from 'common/js/build-list';
import { C_REGISTER_URL } from 'common/js/config';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.proxySalesmen,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Salesmen extends React.Component {
  render() {
    const fields = [{
      title: '手机号',
      field: 'keyword',
      render: (v, d) => d ? d.mobile : '',
      search: true
    }, {
      title: '分享链接',
      field: 'mobile',
      render: (v) => {
        return `${C_REGISTER_URL}?userReferee=${v}&type=S`;
      }
    }, {
      title: '注册时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'userId',
      pageCode: 730085,
      searchParams: {
        type: 1,
        parentUserId: getUserId()
      }
    });
  }
}

export default Salesmen;
