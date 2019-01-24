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
class PreSaleProducts extends React.Component {
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
  };
  downProduct(code) {
    Modal.confirm({
      okText: '确认',
      cancelText: '取消',
      content: `确认下架该产品吗？`,
      onOk: () => {
        this.props.doFetching();
        return fetch(629405, { code, updater: getUserId() }).then(() => {
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
        title: '预售编号',
        field: 'code',
        search: true
    }, {
        title: '名称',
        field: 'name'
    }, {
      title: '产权方',
      field: 'ownerId',
      render: (v, d) => d.ownerInfo ? d.ownerInfo.mobile : ''
    }, {
        title: '产品大类',
        field: 'parentCategoryCode',
        type: 'select',
        listCode: '629007',
        params: {
          status: '1',
          type: '1',
          level: '2'
        },
        keyName: 'code',
        valueName: 'name',
        required: true,
        search: true
    }, {
        title: '产品小类',
        field: 'categoryCode',
        type: 'select',
        listCode: '629007',
        params: {
          status: '1',
          type: '1',
          level: '3'
        },
        keyName: 'code',
        valueName: 'name',
        required: true,
        search: true
    }, {
        title: '状态',
        field: 'status',
        type: 'select',
        key: 'presell_product_status',
        search: true
    }, {
      title: '次序',
      field: 'orderNo'
    }, {
        title: '已售',
        field: 'nowCount'
    }, {
        title: '库存',
        field: 'totalOutput'
    }, {
      title: '备注',
      field: 'remark'
    }];
    let that = this;
    return (
      <div>
        {this.props.buildList({
          fields,
          pageCode: 629415,
          // 0草稿/1已提交待审核/2审核不通过/3审核通过待上架/4已上架待认养/5已锁定/6已认养/7已下架
          btnEvent: {
            // 审核
            auditing: (keys, items) => {
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '1') {
                showWarnMsg('该记录不是待审核状态');
              } else {
                this.props.history.push(`/property/preSaleProducts/addedit?code=${keys[0]}&v=1&check=1`);
              }
            },
            // 上架
            up: (keys, items) => {
              console.log('asdas');
              if (!keys || !keys.length) {
                showWarnMsg('请选择记录');
              } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
              } else if (items[0].status !== '3' && items[0].status !== '5') {
                showWarnMsg('该记录不是待上架状态');
              } else {
                this.setState({
                  updownVisible: true,
                  biz: 629404,
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
              } else if (items[0].status !== '4') {
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
          hideLoc={true}
          onOk={() => {
            that.setModalVisible(false);
            that.props.getPageData();
          }} />
      </div>
    );
  }
}

export default PreSaleProducts;
