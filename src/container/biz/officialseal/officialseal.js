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
} from '@redux/biz/officialseal/officialseal';
import { listWrapper } from 'common/js/build-list';
import { showSucMsg, showWarnMsg, getUserId, getCompanyCode } from 'common/js/util';

@listWrapper(
    state => ({
      ...state.officialSeal,
      parentCode: state.menu.subMenuCode
    }),
    { setTableData, clearSearchParam, doFetching, setBtnList,
      cancelFetching, setPagination, setSearchParam, setSearchData }
)
class officialSeal extends React.Component {
  render() {
    const fields = [{
      title: '省',
      field: 'province'
    }, {
      title: '市',
      field: 'city'
    }, {
      title: '区',
      field: 'area'
    }, {
      title: '部门',
      field: 'department'
    }, {
      title: '公章',
      field: 'pic',
      type: 'img'
    }, {
        title: '备注',
         field: 'remark'
    }];
    return this.props.buildList({
      fields,
      pageCode: 629675,
      deleteCode: 629671
     //  searchParams: {
     //  code: this.getCompanyCode()
     // }
      // btnEvent: {
      //   // // 物流单管理
      //   // addedit: (keys, items) => {
      //   //     this.props.history.push(`/officialseal/officialseal/addedit`);
      //   // }
      // }
    });
  }
}

export default officialSeal;
