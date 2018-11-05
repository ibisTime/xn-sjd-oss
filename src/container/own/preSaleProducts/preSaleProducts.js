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
        title: '产品类型',
        field: 'categoryCode',
        type: 'select',
        listCode: '629007',
        params: { status: '1', level: '2' },
        keyName: 'code',
        valueName: 'name',
        required: true,
        search: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      data: [{
        dkey: '0',
        dvalue: '草稿'
      }, {
        dkey: '1',
        dvalue: '已提交待审核'
      }, {
        dkey: '2',
        dvalue: '审核不通过'
      }, {
        dkey: '3',
        dvalue: '审核通过待上架'
      }, {
        dkey: '4',
        dvalue: '已上架待认养'
      }, {
        dkey: '5',
        dvalue: '已锁定'
      }, {
        dkey: '6',
        dvalue: '已认养'
      }, {
        dkey: '7',
        dvalue: '已下架'
      }],
      keyName: 'dkey',
      valueName: 'dvalue',
      search: true
    }, {
        title: '已售',
        field: 'nowCount'
    }, {
        title: '库存',
        field: 'totalOutput'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629415,
      searchParams: {
        ownerId: getUserId()
      },
      btnEvent: {
        // 0草稿/1已提交待审核/2审核不通过/3审核通过待上架/4已上架待认养/5已锁定/6已认养/7已下架
        // 编辑
        edit: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '0' && items[0].status !== '2' && items[0].status !== '7') {
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
          } else if (items[0].status !== '0' && items[0].status !== '2' && items[0].status !== '7') {
            showWarnMsg('该记录不是待上架状态');
          } else {
            console.log(items[0].orderNo);
           let localtion = `${items[0].longitude},${items[0].latitude}`;
            this.upDown(keys[0], items[0].orderNo, localtion);
          }
        }
      }
    });
  }
}

export default PreProducts;
