import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class EnchashmentRuleAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      field: 'remark',
      title: '参数名',
      hidden: true
    }, {
      field: 'remark1',
      title: '参数名',
      _keys: ['remark'],
      readonly: true
    }, {
      title: '参数值',
      field: 'cvalue'
    }, {
      title: '最近修改人',
      field: 'updater',
      readonly: true
    }, {
      title: '最近修改时间',
      field: 'updateDatetime',
      type: 'datetime',
      readonly: true
    }];
    return this.buildDetail({
      fields,
      key: 'id',
      code: this.code,
      view: this.view,
      detailCode: '630046',
      editCode: '630042'
    });
  }
}
export default EnchashmentRuleAddEdit;