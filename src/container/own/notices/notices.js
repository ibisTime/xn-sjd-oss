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
} from '@redux/own/notices';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ownNotices,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Notices extends React.Component {
  render() {
    const fields = [{
      title: '标题',
      field: 'title',
      search: true
    },
    //   {
    //   title: '状态',
    //   field: 'status',
    //   type: 'select',
    //   key: 'notice_status'
    // },
      {
      title: '发布时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 805305,
      searchParams: {
        object: 'O',
        status: 1
      }
    });
  }
}

export default Notices;
