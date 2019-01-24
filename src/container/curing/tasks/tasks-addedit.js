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
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '树木编号',
      field: 'treeNumber',
      _keys: ['treeNumber'],
      value: this.treeNumber,
      readonly: true,
      hidden: this.treeNumber
    }, {
      field: 'treeNumber',
      hidden: true,
      value: this.treeNumber
    }, {
      title: '养护项目',
      field: 'projectCode',
      type: 'select',
      listCode: 629627,
      params: {
        maintainId: getUserId()
      },
      keyName: 'code',
      valueName: 'projectName',
      required: true
    }, {
      title: '养护人',
      field: 'maintainerCode',
      type: 'select',
      listCode: 629617,
      params: {
        maintainId: getUserId()
      },
      keyName: 'code',
      valueName: '{{name.DATA}}-{{mobile.DATA}}',
      required: true,
      hidden: this.view
    }, {
      title: '养护人',
      field: 'maintainerName',
      hidden: !this.view
    }, {
      title: '养护照片',
      field: 'pic',
      type: 'img',
      required: true
    }, {
      title: '林木养护详细描述',
      field: 'description',
      type: 'textarea',
      required: true
    }, {
      title: '养护时间',
      field: 'updateDatetime',
      type: 'datetime'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629636,
      addCode: 629630
    });
  }
}

export default TaskAddEdit;
