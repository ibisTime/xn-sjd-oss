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
} from '@redux/biz/conserve/projects';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.conserveProjects,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Projects extends React.Component {
  render() {
    const fields = [{
      title: '养护方',
      field: 'maintainId',
      render: (v, d) => d.maintainInfo ? d.maintainInfo.mobile : ''
    }, {
      title: '名称',
      field: 'projectName'
    }, {
      title: '描述',
      field: 'description'
    }, {
      title: '最新更新人',
      field: 'updaterName'
    }, {
      title: '最新更新时间',
      field: 'updateDatetime',
      type: 'datetime'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629625
    });
  }
}

export default Projects;
