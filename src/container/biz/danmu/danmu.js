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
} from '@redux/biz/danmu/danmu';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, showSucMsg, moneyFormat, getUserId } from 'common/js/util';
import fetch from 'common/js/fetch';
import UpDown from 'component/up-down/up-down';

@listWrapper(
  state => ({
    ...state.danmuDanmu,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Danmu extends React.Component {
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
      content: `确认下架该道具吗？`,
      onOk: () => {
        this.props.doFetching();
        return fetch(629383, { code, updater: getUserId() }).then(() => {
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
      title: '内容',
      field: 'content'
    }, {
      title: '图片',
      field: 'pic',
      type: 'img'
    }, {
      title: '状态',
      field: 'status',
      key: 'barrage_status',
      type: 'select'
    }, {
      title: '次序',
      field: 'orderNo'
    }, {
      title: '更新时间',
      field: 'updateDatetime',
      type: 'datetime'
    }];
    return (
      <div>
        {this.props.buildList({
          fields,
          pageCode: 629385,
          btnEvent: {
            // 1已上架、0已下架
            edit: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '0') {
                showWarnMsg('该记录状态不可修改');
              } else {
                this.props.history.push(`/danmu/danmu/addedit?code=${keys[0]}`);
              }
            },
            up: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '0') {
                showWarnMsg('该记录的状态不能上架');
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
              } else if (items[0].status !== '1') {
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
          hideLoc={true}
          biz={629382}
          code={this.state.code}
          onOk={() => {
            that.setModalVisible(false);
            that.props.getPageData();
          }} />
      </div>
    );
  }
}

export default Danmu;
