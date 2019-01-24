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
} from '@redux/biz/user/signIn';
import { listWrapper } from 'common/js/build-list';
import { getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.userSignIn
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class UserSignInAll extends React.Component {
  render() {
    const fields = [{
      title: '签到人',
      field: 'userName'
    }, {
      title: '签到时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 805145,
      searchParams: {
        type: 2
      }
    });
  }
}

export default UserSignInAll;
