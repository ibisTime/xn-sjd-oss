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
} from '@redux/seller/banner';
import { listWrapper } from 'common/js/build-list';
import { SYSTEM_CODE } from 'common/js/config';
import { getCompanyCode } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.sellerBanner,
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
      title: '顺序',
      field: 'orderNo'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: '630505',
      deleteCode: '630501',
      searchParams: {
        shopCode: getCompanyCode()
      }
    });
  }
}

export default sellerBanner;
