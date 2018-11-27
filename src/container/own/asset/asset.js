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
} from '@redux/own/asset';
import { listWrapper } from 'common/js/build-list';
import fetch from 'common/js/fetch';
import { showSucMsg, showWarnMsg, getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ownAsset,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class OwnAsset extends React.Component {
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
      field: 'code'
    }, {
      title: '产品名称',
      field: 'productName'
    }, {
      title: '产品分类',
      field: 'parentCategoryCode',
      // _keys: ['presellProduct', 'parentCategoryCode'],
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
      // _keys: ['presellProduct', 'categoryCode'],
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
      title: '归属人',
      field: 'ownerInfo',
      render: (v, d) => d.ownerInfo ? d.ownerInfo.nickname || d.ownerInfo.mobile : ''
    }, {
      title: '转让中数量',
      field: 'presellQuantity'
    }, {
      title: '提货中数量',
      field: 'receivingQuantity'
    }, {
      title: '库存',
      field: 'quantity'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'original_group_status',
      search: true
    }];
    return this.props.buildList({
      fields,
      pageCode: 629435,
      searchParams: {
        belongPartId: getUserId()
      },
      btnEvent: {
        // 物流单管理
        wuliudan: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/own/wuliudan?status=${items[0].status}&code=${keys[0]}`);
          }
        }
      }
    });
  }
}

export default OwnAsset;
