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
} from '@redux/curing/notices';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.curingNotices,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class CuringNotices extends React.Component {
  render() {
    const fields = [{
      title: '标题',
      field: 'title'
    }, {
      title: '内容',
      field: 'content'
    }, {
      title: '状态',
      field: 'status'
    }, {
      title: '发布时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 805305,
      searchParams: {
        object: 'M'
      }
    });
  }
}

export default CuringNotices;