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
} from '@redux/proxy/subordinates';
import { listWrapper } from 'common/js/build-list';
import { getUserId } from 'common/js/util';

@listWrapper(
  state => ({
    ...state.proxySubordinates,
    parentCode: state.menu.subMenuCode
  }),
  { setTableData, clearSearchParam, doFetching, setBtnList,
    cancelFetching, setPagination, setSearchParam, setSearchData }
)
class Subordinates extends React.Component {
  render() {
    const fields = [{
      title: '用户名',
      field: 'loginName'
    }, {
      title: '联系人',
      field: 'charger',
      render: (v, d) => d.company ? d.company.charger : ''
    }, {
      title: '联系方式',
      field: 'keyword',
      render: (v, d) => d.company ? d.company.chargeMobile : '',
      search: true
    }, {
      title: '等级',
      field: 'level'
    }, {
      title: '辖区',
      field: 'province',
      render: (v, d) => {
        let result = [];
        if (d.company) {
          let prov = d.company.province;
          if (prov) {
              let city = d.company.city ? d.company.city : '全部';
              let area = d.company.area ? d.company.area : '全部';
              result = [prov, city, area];
          } else {
              result = [];
          }
        }
        return result.join(' ');
      }
    }, {
      title: '注册时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.props.buildList({
      fields,
      rowKey: 'userId',
      pageCode: 730085,
      searchParams: {
        type: 0,
        parentUserId: getUserId()
      }
    });
  }
}

export default Subordinates;
