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
      title: '区域',
      field: 'province',
      type: 'citySelect',
      required: true
    }, {
      title: '部门',
      field: 'department',
      required: true
    }, {
      title: '图片',
      field: 'pic',
      type: 'img',
      single: true,
      required: true
    }, {
          title: '备注',
          field: 'remark'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629676,
      addCode: 629670,
      editCode: 629672
    });
  }
}

export default TppOrdersAddEdit;
