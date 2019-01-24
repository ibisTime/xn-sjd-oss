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
} from '@redux/biz/claim/articles';
import { listWrapper } from 'common/js/build-list';
import { dateTimeFormat, showWarnMsg, getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.claimRightsArticles
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class RightsArticles extends React.Component {
  constructor(props) {
    super(props);
    this.adoptTreeCode = getQueryString('code', this.props.location.search);
  }
  render() {
    let that = this;
    const fields = [{
      title: '标题',
      field: 'title'
    }, {
      title: '公开程度',
      field: 'openLevel',
      type: 'select',
      key: 'article_open_level',
      search: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'article_status',
      search: true
    }, {
      title: '发布时间',
      field: 'publishDatetime',
      type: 'date',
      render: dateTimeFormat,
      rangedate: ['publishDatetimeStart', 'publishDatetimeEnd'],
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629345,
      searchParams: {
        adoptTreeCode: this.adoptTreeCode
      },
      buttons: [{
        name: '详情',
        code: 'detail',
        handler: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/claim/rights/articles/addedit?code=${keys[0]}&v=1`);
          }
        }
      }, {
        name: '返回',
        code: 'back',
        handler: () => this.props.history.go(-1)
      }]
    });
  }
}

export default RightsArticles;
