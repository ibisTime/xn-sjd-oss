import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class AuditnoticeAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      field: 'status',
      hidden: true,
      value: 1
    }, {
      field: 'type',
      value: 2,
      hidden: true
    }, {
      field: 'parentCode',
      value: 0,
      hidden: true
    }, {
      title: '名称',
      field: 'name',
      search: true
    }, {
      title: '手机号',
      field: 'mobile'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      addCode: 629660,
      editCode: 629662,
      detailCode: 629666
    });
  }
}

export default AuditnoticeAddEdit;
