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
} from '@redux/public/notice';
import { listWrapper } from 'common/js/build-list';
import fetch from 'common/js/fetch';
import { showWarnMsg, showSucMsg, getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.publicNotice,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Notice extends React.Component {
  back(code) {
    Modal.confirm({
      okText: '确认',
      cancelText: '取消',
      content: `确认回撤该条公告吗？`,
      onOk: () => {
        this.props.doFetching();
        return fetch(805302, { code, updater: getUserId() }).then(data => {
          this.props.getPageData();
          showSucMsg('操作成功');
        }).catch(() => this.props.cancelFetching());
      }
    });
  }
  render() {
    const fields = [{
      title: '标题',
      field: 'title'
    }, {
      field: 'object',
      title: '针对对象',
      type: 'select',
      data: [{
        'dkey': 'C',
        'dvalue': 'C端用户'
      }, {
        'dkey': 'O',
        'dvalue': '产权方'
      }, {
        'dkey': 'M',
        'dvalue': '养护方'
      }, {
        'dkey': 'A',
        'dvalue': '代理商'
      }, {
        'dkey': 'P',
        'dvalue': '平台用户'
      }, {
        'dkey': 'B',
        'dvalue': '商家'
      }],
      keyName: 'dkey',
      valueName: 'dvalue',
      search: true
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'notice_status',
      search: true
    }, {
      title: '发布时间',
      field: 'publishDatetime',
      type: 'datetime',
      required: true
    }, {
      title: '最新修改人',
      field: 'updaterName'
    }, {
      title: '最新更新时间',
      field: 'updateDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: '805305',
      btnEvent: {
        edit: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '0' && items[0].status !== '2') {
            showWarnMsg('该记录不是待发布状态');
          } else {
            this.props.history.push(`/public/notice/addedit?code=${keys[0]}`);
          }
        },
        back: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else if (items[0].status !== '1') {
            showWarnMsg('该记录不是已发布状态');
          } else {
            this.back(keys[0]);
          }
        }
      }
    });
  }
}

export default Notice;
