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
} from '@redux/curing/tasks-records';
import { listWrapper } from 'common/js/build-list';
import { showWarnMsg, getQueryString, getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.curingTasksRecords
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.treeNumber = getQueryString('n', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '树木编号',
      field: 'treeNumber'
    }, {
      title: '养护项目',
      field: 'projectCode',
      type: 'select',
      listCode: 629627,
      params: {
        maintainId: getUserId()
      },
      keyName: 'code',
      valueName: 'projectName',
      required: true
    }, {
      title: '养护人',
      field: 'maintainerCode',
      type: 'select',
      listCode: 629617,
      keyName: 'code',
      valueName: '{{name.DATA}}-{{mobile.DATA}}'
    }, {
      title: '养护时间',
      field: 'updateDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629635,
      searchParams: {
        treeNumber: this.treeNumber
      },
      buttons: [{
        name: '详情',
        code: 'detail',
        handler: (keys, items) => {
          if (!keys || !keys.length) {
            showWarnMsg('请选择记录');
          } else if (keys.length > 1) {
            showWarnMsg('请选择一条记录');
          } else {
            this.props.history.push(`/curing/tasks/addedit?n=${items[0].treeNumber}&code=${keys[0]}&v=1`);
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

export default Tasks;
