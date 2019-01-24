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
} from '@redux/biz/property/products';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, showSucMsg, getUserId } from 'common/js/util';
import fetch from 'common/js/fetch';
import UpDown from 'component/up-down/up-down';

@listWrapper(
  state => ({
    ...state.propertyProducts,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 上下架窗口是否显示
      updownVisible: false,
      // 上下架产品code
      code: '',
      // 上下架接口号
      biz: ''
    };
  }
  setModalVisible = (updownVisible) => {
    this.setState({ updownVisible });
  }
  downProduct(code) {
    Modal.confirm({
      okText: '确认',
      cancelText: '取消',
      content: `确认下架该产品吗？`,
      onOk: () => {
        this.props.doFetching();
        return fetch(629015, { code, updater: getUserId() }).then(() => {
          this.props.getPageData();
          showSucMsg('操作成功');
        }).catch(() => {
          this.props.cancelFetching();
        });
      }
    });
  }
  render() {
    const fields = [{
      title: '产品编号',
      field: 'code'
    }, {
      title: '名称',
      field: 'name',
      search: true
    }, {
      title: '产权方',
      field: 'ownerId',
      render: (v, d) => d.ownerInfo ? d.ownerInfo.mobile : ''
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'product_status',
      search: true
    }, {
      title: '产品分类',
      field: 'parentCategoryCode',
      type: 'select',
      listCode: '629007',
      params: {level: 1},
      keyName: 'code',
      valueName: 'name'
    }, {
      title: '小类',
      field: 'categoryCode',
      type: 'select',
      listCode: '629007',
      params: {level: '2'},
      keyName: 'code',
      valueName: 'name',
      search: true
    }, {
      title: '认养分类',
      field: 'sellType',
      type: 'select',
      key: 'sell_type'
    }, {
      title: 'UI位置',
      field: 'location',
      type: 'select',
      data: [{
        dkey: '0',
        dvalue: '普通'
      }, {
        dkey: '1',
        dvalue: '热门'
      }],
      keyName: 'dkey',
      valueName: 'dvalue',
      search: true
    }, {
      title: '次序',
      field: 'orderNo'
    }, {
      title: '募集总量',
      field: 'raiseCount'
    }, {
      title: '已募集数量',
      field: 'nowCount'
    }, {
      title: '备注',
      field: 'remark'
    }];
    let that = this;
    return (
      <div>
        {this.props.buildList({
          fields,
          pageCode: 629025,
          // 0草稿/1已提交待审核/2审核不通过/3审核通过待上架/4已上架待认养/5已锁定/6已认养/7已下架
          btnEvent: {
            // 审核
            check: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '1') {
                showWarnMsg('该记录不是待审核状态');
              } else {
                this.props.history.push(`/property/products/addedit?code=${keys[0]}&v=1&check=1`);
              }
            },
            // 上架
            up: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '3' && items[0].status !== '7') {
                showWarnMsg('该记录不是待上架状态');
              } else {
                this.setState({
                  updownVisible: true,
                  biz: 629014,
                  code: keys[0]
                });
              }
            },
            // 下架
            down: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '6' && items[0].status !== '4') {
                showWarnMsg('该记录不可下架');
              } else {
                this.downProduct(keys[0]);
              }
            }
          }
        })}
        <UpDown
          updownVisible={this.state.updownVisible}
          setModalVisible={this.setModalVisible}
          biz={this.state.biz}
          code={this.state.code}
          onOk={() => {
            that.setModalVisible(false);
            that.props.getPageData();
          }} />
      </div>
    );
  }
}

export default Products;
