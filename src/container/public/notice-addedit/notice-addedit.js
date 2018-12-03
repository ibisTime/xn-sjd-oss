import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class NoticeAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      field: 'type',
      value: '1',
      hidden: true
    }, {
      field: 'object',
      title: '针对对象',
      type: 'select',
      data: [{
        'dkey': 'C',
        'dvalue': 'C端用户'
      }, {
        'dkey': 'O',
        'dvalue': '产权方'
      }, {
        'dkey': 'M',
        'dvalue': '养护方'
      }, {
        'dkey': 'A',
        'dvalue': '代理商'
      }, {
        'dkey': 'P',
        'dvalue': '平台用户'
      }, {
        'dkey': 'B',
        'dvalue': '商家'
      }],
      keyName: 'dkey',
      valueName: 'dvalue',
      required: true
    }, {
      title: '标题',
      field: 'title',
      maxlength: 50,
      required: true
    }, {
      title: '内容',
      field: 'content',
      type: 'textarea',
      // normalArea: true,
      required: true
    }, {
      title: '发布时间',
      field: 'publishDatetime',
      type: 'datetime',
      required: true
    }, {
      title: '备注',
      field: 'remark',
      maxlength: 30
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      addCode: 805300,
      editCode: 805301,
      detailCode: 805307,
      okText: this.code ? '发布' : '保存'
    });
  }
}

export default NoticeAddEdit;
