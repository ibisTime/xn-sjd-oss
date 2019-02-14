import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class visitaddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '认养权编号',
      field: 'adoptTreeCode',
      search: true
    }, {
      title: '来访人id',
      field: 'userId'
    }, {
      title: '来访时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629316
    });
  }
}

export default visitaddedit;
