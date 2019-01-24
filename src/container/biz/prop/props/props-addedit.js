import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class TppOrdersAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    let fields = [{
      title: '名称',
      field: 'name'
    }, {
      title: '分类',
      field: 'type',
      type: 'select',
      key: 'tool_type',
      readonly: true
    }, {
      title: '价格(积分)',
      field: 'price',
      amount: true,
      positive: true
    }, {
      title: '有效时长(小时)',
      field: 'validityTerm',
      positive: true
    }, {
      title: '描述',
      field: 'description'
    }];
    if (this.view) {
      fields = fields.concat([{
        title: '状态',
        field: 'status',
        type: 'select',
        key: 'tool_status',
        search: true
      }, {
        title: 'UI次序',
        field: 'orderNo'
      }]);
    }
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629506,
      editCode: 629502
    });
  }
}

export default TppOrdersAddEdit;
