import React from 'react';
import {
  setTableData,
  setPagination,
  setBtnList,
  setSearchParam,
  clearSearchParam,
  doFetching,
  cancelFetching,
  setSearchData
} from '@redux/biz/claim/rights';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, dateFormat } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.claimRights,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Rights extends React.Component {
  render() {
    const fields = [{
      title: '古树编号',
      field: 'treeNumber',
      render: (v, d) => d.tree.treeNumber
    }, {
      title: '古树学名',
      field: 'scientificName',
      render: (v, d) => d.tree.scientificName
    }, {
      title: '证书编号',
      field: 'code'
    }, {
      title: '认养人',
      field: 'currentHolder',
      render: (v, d) => d.user ? d.user.mobile : ''
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'adopt_order_tree_status',
      search: true
    }, {
      title: '认养期',
      field: 'startDatetime',
      render: (v, d) => `${dateFormat(d.startDatetime)}至${dateFormat(d.endDatetime)}`
    }];
    return this.props.buildList({
      fields,
      pageCode: 629205,
      btnEvent: {
        // 日志查看
        logs: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/claim/rights/logs?code=${keys[0]}`);
          }
        },
        // 发放礼物
        sendGift: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/claim/rights/giveGift?adopt=${keys[0]}`);
          }
        },
        // 礼物订单
        giftOrders: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/claim/rights/giftOrders?code=${keys[0]}`);
          }
        },
        // 转送记录
        records: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/claim/rights/records?code=${keys[0]}`);
          }
        },
        // 对应文章
        article: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/claim/rights/articles?code=${keys[0]}`);
          }
        },
        // 碳泡泡产生订单
        tpp: (keys, items) => {
          if (!keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/claim/rights/tppOrders?code=${keys[0]}`);
          }
        },
          // 证书
        certificate: (keys, items) => {
            if (!keys.length) {
                showWarnMsg('请选择记录');
            } else if (keys.length > 1) {
                showWarnMsg('请选择一条记录');
            } else {
                this.props.history.push(`/claim/rights/certificate?code=${keys[0]}`);
            }
        }
      }
    });
  }
}

export default Rights;
