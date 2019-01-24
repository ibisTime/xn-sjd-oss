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
} from '@redux/public/auditnotice';
import { listWrapper } from 'common/js/build-list';
import { SYSTEM_CODE } from 'common/js/config';
import { getCompanyCode } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.publicAuditNotice,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class sellerBanner extends React.Component {
  render() {
    const fields = [{
      title: '名称',
      field: 'name',
      search: true
    }, {
      title: '手机号',
      field: 'mobile',
      search: true
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: '629665',
      deleteCode: '629661'
    });
  }
}

export default sellerBanner;
