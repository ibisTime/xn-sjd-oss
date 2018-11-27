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
} from '@redux/proxy/users';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

const typeDict = {
  'P': '平台',
  'O': '产权',
  'M': '养护',
  'A': '代理商',
  'S': '业务员',
  'U': 'C端用户',
  'B': '商家'
};

@listWrapper(
  state => ({
    ...state.proxyUsers,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Users extends React.Component {
  render() {
    const fields = [{
      title: '昵称',
      field: 'nickname'
    }, {
      title: '手机号',
      field: 'mobile',
      search: true
    }, {
      title: '推荐人',
      field: 'userReferee',
      render: (v, d) => {
        if (d.refereeUser) {
          return `${d.refereeUser.mobile}(${typeDict[d.userRefereeType]})`;
        }
        return '';
      }
    }, {
      title: '注册时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'userId',
      pageCode: 805120,
      searchParams: {
        agentId: getUserId()
      }
    });
  }
}

export default Users;
