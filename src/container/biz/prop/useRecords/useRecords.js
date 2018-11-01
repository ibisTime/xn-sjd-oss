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
} from '@redux/biz/prop/useRecords';
import { listWrapper } from 'common/js/build-list';

@listWrapper(
  state => ({
    ...state.propUseRecords,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class UseRecords extends React.Component {
  render() {
    const fields = [{
      title: '道具名',
      field: 'toolName',
      search: true,
        render: (v, d) => `${d.toolOrderInfo.toolName}`
    }, {
      title: '使用人',
      field: 'userId',
        render: (v, d) => d.userInfo && d.userInfo.nickname ? `${d.userInfo.nickname} ${d.userInfo.mobile}` : `${d.userInfo.mobile}`
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'tool_use_record_type',
      search: true
    }, {
      title: '使用对象',
      field: 'treeNumber',
      render: (v, d) => d.adoptTreeInfo ? d.adoptTreeInfo.treeNumber : ''
    }, {
      title: '使用时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
      title: '失效时间',
      field: 'invalidDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629525
    });
  }
}

export default UseRecords;
