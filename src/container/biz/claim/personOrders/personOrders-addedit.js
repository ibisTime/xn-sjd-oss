import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class PersonOrdersAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '订单编号',
      field: 'code'
    }, {
      title: '古树学名',
      field: 'name'
    }, {
      title: '古树编号',
      field: 'ownerId'
    }, {
      title: '认养人',
      field: 'applyUser'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'sell_type'
    }, {
      title: '下单时间',
      field: 'applyDatetime',
      type: 'datetime'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629046
    });
  }
}

export default PersonOrdersAddEdit;
