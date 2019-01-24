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
} from '@redux/own/products';
import { listWrapper } from 'common/js/build-list';
import fetch from 'common/js/fetch';
import { showSucMsg, showWarnMsg, getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.ownProducts,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class PreProducts extends React.Component {
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
      title: '预售编号',
      field: 'code',
      search: true
    }, {
      title: '名称',
      field: 'name'
    }, {
      title: '属地',
      field: 'originPlace',
      render: (v, d) => {
        return d.treeList ? d.treeList[0].originPlace : '';
      }
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
        title: '总库存',
        field: 'totalOutput'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629415,
      searchParams: {
        ownerId: getUserId()
      },
      btnEvent: {
        // 编辑
        edit: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '0' && items[0].status !== '2' && items[0].status !== '5') {
            showWarnMsg('该记录不可编辑');
          } else {
            this.props.history.push(`/own/preSaleProducts/addedit?code=${keys[0]}`);
          }
        },
        // 上架申请
        up: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '0' && items[0].status !== '2' && items[0].status !== '5') {
            showWarnMsg('该记录不是待上架状态');
          } else {
            console.log(items[0].orderNo);
           let localtion = `${items[0].longitude},${items[0].latitude}`;
            this.upDown(keys[0], items[0].orderNo, localtion);
          }
        },
        // 树木查看
        viewTrees: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/own/preSaleProducts/viewTrees?&productCode=${keys[0]}`);
          }
        }
      }
    });
  }
}

export default PreProducts;
