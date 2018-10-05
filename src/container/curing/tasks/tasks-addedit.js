import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';
import fetch from 'common/js/fetch';

@Form.create()
class TaskAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.treeNumber = getQueryString('n', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '树木编号',
      field: 'treeNumber1',
      value: this.treeNumber,
      readonly: true
    }, {
      field: 'treeNumber',
      hidden: true,
      value: this.treeNumber
    }, {
      title: '养护项目',
      field: 'projectCode',
      type: 'select',
      listCode: 629627,
      keyName: 'code',
      valueName: 'description',
      required: true
    }, {
      title: '养护人',
      field: 'maintainerCode',
      type: 'select',
      listCode: 629617,
      keyName: 'code',
      valueName: '{{name.DATA}}-{{mobile.DATA}}',
      required: true
    }, {
      title: '养护照片',
      field: 'pic',
      type: 'img',
      required: true
    }, {
      title: '林木养护详细描述',
      field: 'description',
      required: true,
      type: 'textarea',
      normalArea: true
    }];
    return this.buildDetail({
      fields,
      addCode: 629630
    });
  }
}

export default TaskAddEdit;
