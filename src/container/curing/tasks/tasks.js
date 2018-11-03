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
} from '@redux/curing/tasks';
import { listWrapper } from 'common/js/build-list';
import { getUserId, showWarnMsg, dateTimeFormat } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.curingTasks,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Tasks extends React.Component {
  render() {
    const fields = [{
      title: '系统编号',
      field: 'code'
    }, {
      title: '树木编号',
      field: 'treeNumber'
    }, {
      title: '分类',
      field: 'productCode'
    }, {
      title: '树龄',
      field: 'age'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'tree_status',
      search: true
    }, {
        title: '认养时间',
        field: 'updateDatetime',
        render: (v, d) => d.updateDatetime ? dateTimeFormat(d.updateDatetime) : ''
    }];
    return this.props.buildList({
      fields,
      pageCode: '629035',
      searchParams: { maintainId: getUserId() },
      btnEvent: {
        // 添加养护记录
        add: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/curing/tasks/addedit?n=${items[0].treeNumber}`);
          }
        },
        // 养护记录查询
        records: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/curing/tasks/records?n=${items[0].treeNumber}`);
          }
        }
      }
    });
  }
}

export default Tasks;
