import React from 'react';
import { Modal } from 'antd';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/biz/emotion/articles';
import { listWrapper } from 'common/js/build-list';
import { dateTimeFormat, showWarnMsg, showSucMsg, getQueryString,
  getUserId } from 'common/js/util';
import fetch from 'common/js/fetch';
import UpDown from 'component/up-down/up-down';

@listWrapper(
  state => ({
    ...state.emotionArticles,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 上架窗口是否显示
      updownVisible: false,
      // 上下架产品code
      code: ''
    };
  }
  setModalVisible = (updownVisible) => {
    this.setState({ updownVisible });
  }
  // 下架文章
  downArticles(code) {
    Modal.confirm({
      okText: '确认',
      cancelText: '取消',
      content: `确认下架该文章吗？`,
      onOk: () => {
        this.props.doFetching();
        return fetch(629344, { code, updater: getUserId() }).then(() => {
          this.props.getPageData();
          showSucMsg('操作成功');
        }).catch(() => {
          this.props.cancelFetching();
        });
      }
    });
  }
  render() {
    let that = this;
    const fields = [{
      title: '标题',
      field: 'title'
    }, {
      title: '关联古树',
      field: 'treeNo'
    }, {
      title: '公开程度',
      field: 'openLevel',
      type: 'select',
      key: 'article_open_level',
      search: true
    }, {
      title: '发布时间',
      field: 'publishDatetime',
      type: 'date',
      render: dateTimeFormat,
      rangedate: ['publishDatetimeStart', 'publishDatetimeEnd'],
      search: true
    }, {
      title: '分类',
      field: 'type',
      type: 'select',
      key: 'article_type',
      search: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'article_status',
      search: true
    }, {
      title: 'UI位置',
      field: 'location'
    }, {
      title: 'UI次序',
      field: 'orderNo'
    }, {
      title: '收藏总数',
      field: 'collectCount'
    }, {
      title: '点赞总数',
      field: 'pointCount'
    }, {
      title: '阅读总数',
      field: 'readCount'
    }];
    return (
      <div>
        {this.props.buildList({
          fields,
          pageCode: 629345,
          btnEvent: {
            // 1草稿、2待审核、3审核不通过、4待上架、5已上架、6已下架
            edit: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '1') {
                showWarnMsg('该记录不是可修改状态');
              } else {
                this.props.history.push(`/emotion/articles/addedit?code=${keys[0]}`);
              }
            },
            check: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '2') {
                showWarnMsg('该记录不是待审核状态');
              } else {
                this.props.history.push(`/emotion/articles/addedit?code=${keys[0]}&check=1&v=1`);
              }
            },
            up: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '4') {
                showWarnMsg('该记录不是待上架状态');
              } else {
                this.setState({
                  updownVisible: true,
                  code: keys[0]
                });
              }
            },
            down: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '5') {
                showWarnMsg('该记录不是已上架状态');
              } else {
                this.downArticles(keys[0]);
              }
            }
          }
        })}
        <UpDown
          updownVisible={this.state.updownVisible}
          setModalVisible={this.setModalVisible}
          biz={629343}
          code={this.state.code}
          onOk={() => {
            that.setModalVisible(false);
            that.props.getPageData();
          }} />
      </div>
    );
  }
}

export default Articles;
