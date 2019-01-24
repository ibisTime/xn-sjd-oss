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
} from '@redux/public/banner';
import { listWrapper } from 'common/js/build-list';
import { SYSTEM_CODE } from 'common/js/config';

@listWrapper(
  state => ({
    ...state.publicBanner,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Banner extends React.Component {
  render() {
    const fields = [{
      title: '名称',
      field: 'name',
      search: true
    }, {
      title: '位置',
      field: 'type',
      type: 'select',
      key: 'cnavigate_type',
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
        companyCode: SYSTEM_CODE,
        typeList: [2, 6, 8]
      }
    });
  }
}

export default Banner;
