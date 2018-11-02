import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class RecordsAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '赠送人',
      field: 'userName'
    }, {
      title: '被赠送人',
      field: 'toUserName'
    }, {
      title: '赠送时间',
      field: 'createDatetime',
      type: 'datetime'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629336
    });
  }
}

export default RecordsAddEdit;
