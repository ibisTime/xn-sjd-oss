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
} from '@redux/biz/seller/keyword';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.bizSellerKeyword,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Keyword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 上下架窗口是否显示
      updownVisible: false,
      // 上下架产品code
      code: ''
    };
  }
  setModalVisible = (updownVisible) => {
    this.setState({ updownVisible });
  }
  render() {
    const fields = [{
      title: '关键字',
      field: 'word',
      search: true
    }, {
      field: 'reaction',
      title: '反应',
      key: 'keyword_reaction',
      type: 'select'
    }, {
      title: '更新人',
      field: 'realName',
      render: (v, d) => d.sysUser ? d.sysUser.realName : ''
    }, {
      title: '更新时间',
      field: 'updateDatetime',
      type: 'datetime'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'id',
      pageCode: 629765,
      deleteCode: 629761
    });
  }
}

export default Keyword;
