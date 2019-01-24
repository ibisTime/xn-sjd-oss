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
} from '@redux/biz/prop/props';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, showSucMsg, moneyFormat, getUserId } from 'common/js/util';
import fetch from 'common/js/fetch';
import UpDown from 'component/up-down/up-down';

@listWrapper(
  state => ({
    ...state.propProps,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Props extends React.Component {
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
        return fetch(629501, { code, updater: getUserId() }).then(() => {
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
      title: '名称',
      field: 'name'
    }, {
      title: '分类',
      field: 'type',
      type: 'select',
      key: 'tool_type',
      search: true
    }, {
      title: '价格',
      field: 'price',
      render: (v) => `${moneyFormat(v)}积分`
    }, {
      title: '有效时长',
      field: 'validityTerm',
      render: (v) => `${v}小时`
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'tool_status',
      search: true
    }, {
      title: 'UI次序',
      field: 'orderNo'
    }];
    return (
      <div>
        {this.props.buildList({
          fields,
          pageCode: 629505,
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
                this.props.history.push(`/prop/props/addedit?code=${keys[0]}`);
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
          biz={629500}
          code={this.state.code}
          onOk={() => {
            that.setModalVisible(false);
            that.props.getPageData();
          }} />
      </div>
    );
  }
}

export default Props;
