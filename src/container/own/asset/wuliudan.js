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
} from '@redux/own/wuliudan';
import { listWrapper } from 'common/js/build-list';
import fetch from 'common/js/fetch';
import { showSucMsg, showWarnMsg, getUserId, getQueryString } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ownWuliudan,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class OwnWuliudan extends React.Component {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.status = getQueryString('status', this.props.location.search);
  }
  upDown(code, orderNo, location, status) {
    Modal.confirm({
      okText: '确认',
      cancelText: '取消',
      content: `确认提交${status === '4' ? '下架' : '上架'}申请？`,
      onOk: () => {
        this.props.doFetching();
        return fetch(629402, {
          code,
          orderNo,
          location,
          updater: getUserId()
        }).then(() => {
          showSucMsg('操作成功');
          this.props.getPageData();
        }).catch(() => this.props.cancelFetching());
      }
    });
  }
  render() {
    const fields = [{
      title: '编号',
      field: 'code',
      search: true
    }, {
      title: '产品名称',
      field: 'name',
      // _keys: ['presellProduct', 'name']
      render: (v, d) => d.presellProduct ? d.presellProduct.name : ''
    }, {
      title: '产品分类',
      field: 'parentCategoryCode',
      _keys: ['presellProduct', 'parentCategoryCode'],
      type: 'select',
      listCode: '629007',
      params: {type: 1},
      keyName: 'code',
      valueName: 'name',
      render: (v, d) => {
        if (this.props.searchData.parentCategoryCode && d.presellProduct) {
          let obj = this.props.searchData.parentCategoryCode.find(c => c.code === d.presellProduct.parentCategoryCode);
          return obj ? obj.name : '';
        }
        return '';
      }
    }, {
      title: '产品小类',
      field: 'categoryCode',
      _keys: ['presellProduct', 'categoryCode'],
      type: 'select',
      listCode: '629007',
      params: {type: 1},
      keyName: 'code',
      valueName: 'name',
      render: (v, d) => {
        if (this.props.searchData.categoryCode && d.presellProduct) {
          let obj = this.props.searchData.categoryCode.find(c => c.code === d.presellProduct.categoryCode);
          return obj ? obj.name : '';
        }
        return '';
      }
    }, {
      title: '发货数量',
      field: 'deliverCount'
    }, {
      title: '省',
      field: 'province'
    }, {
      title: '市',
      field: 'city'
    }, {
      title: '区',
      field: 'area'
    }, {
      title: '详细地址',
      field: 'address'
    }, {
      title: '收货人',
      field: 'receiver'
    }, {
      title: '收货人手机号',
      field: 'receiverMobile'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'presell_logistics_status',
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629465,
      view: false,
      searchParams: {
        originalGroupCode: this.code
      },
      buttons: [{
        name: '发货',
        code: 'fahuo',
        handler: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            if(items[0].status === '0' && this.status === '2') {
              this.props.history.push(`/own/asset/wuliudan/fahuo?v=1&code=${keys[0]}`);
            } else {
              if(items[0].status !== '0') {
                showWarnMsg('该物流单不是待发货状态');
              } else if(this.status !== '2') {
                showWarnMsg('资产不是待收货状态，无法发货');
              }
            }
          }
        }
      }, {
        name: '详情',
        code: 'detail',
        handler: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/own/asset/wuliudan/fahuo?detail=1&v=1&code=${keys[0]}`);
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

export default OwnWuliudan;
