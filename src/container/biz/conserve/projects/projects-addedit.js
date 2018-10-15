import React from 'react';
import { Form } from 'antd';
import { getQueryString, showSucMsg, getUserId } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class ProjectsAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '养护方',
      field: 'maintainId',
      _keys: ['maintainInfo', 'mobile']
    }, {
      title: '名称',
      field: 'projectName',
      required: true,
      maxlength: 30
    }, {
      title: '描述',
      field: 'description',
      required: true,
      type: 'textarea',
      normalArea: true
    }, {
      title: '最新更新人',
      field: 'updaterName'
    }, {
      title: '最新更新时间',
      field: 'updateDatetime',
      type: 'datetime'
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629626
    });
  }
}

export default ProjectsAddEdit;
