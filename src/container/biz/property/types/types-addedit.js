import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class TypesAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '名称',
      field: 'name',
      required: true
    }, {
      title: '上级编号',
      field: 'parentCode',
      type: 'select',
      listCode: '629007',
      keyName: 'code',
      valueName: 'name'
    }, {
      title: '图片',
      field: 'pic',
      type: 'img',
      single: true,
      required: true
    }, {
      title: '次序',
      field: 'orderNo',
      help: '数字越小，排序越靠前',
      integer: true,
      required: true
    }, {
      title: '备注',
      field: 'remark',
      maxlength: 250
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629006,
      addCode: 629000,
      editCode: 629001
    });
  }
}

export default TypesAddEdit;
