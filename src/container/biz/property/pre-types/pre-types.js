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
} from '@redux/biz/property/pre-types';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, showSucMsg, getUserId } from 'common/js/util';
import fetch from 'common/js/fetch';

@listWrapper(
  state => ({
    ...state.propertyPreTypes,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class PreTypes extends React.Component {
  upDown(bizCode, code) {
    Modal.confirm({
      okText: '确认',
      cancelText: '取消',
      content: `确认${bizCode === 629002 ? '上架' : '下架'}该分类吗？`,
      onOk: () => {
        this.props.doFetching();
        return fetch(bizCode, { code, updater: getUserId() }).then(() => {
          this.props.getPageData();
          showSucMsg('操作成功');
        }).catch(() => this.props.cancelFetching());
      }
    });
  }
  render() {
    const fields = [{
      title: '名称',
      field: 'name'
    }, {
      title: '上级编号',
      field: 'parentCode',
      type: 'select',
      listCode: '629007',
      params: {status: 1, typeList: [1]},
      keyName: 'code',
      valueName: 'name',
      search: true
    }, {
      title: '图片',
      field: 'pic',
      type: 'img'
    }, {
      title: '次序',
      field: 'orderNo'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'category_status'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: '629005',
      searchParams: {
        typeList: [1]
      },
      btnEvent: {
        edit: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '0') {
            showWarnMsg('该记录不是待上架状态，无法修改');
          } else {
            this.props.history.push(`/pre/preTypes/addedit?code=${keys[0]}`);
          }
        },
        up: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '0') {
            showWarnMsg('该记录不是待上架状态');
          } else {
            this.upDown(629002, keys[0]);
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
            this.upDown(629003, keys[0]);
          }
        }
      }
    });
  }
}

export default PreTypes;
