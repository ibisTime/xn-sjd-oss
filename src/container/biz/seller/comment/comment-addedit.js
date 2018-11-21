import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class KeywordAddedit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    let fields = [{
      field: 'content',
      title: '内容',
      type: 'textarea'
    }, {
      field: 'status',
      title: '状态',
      type: 'select',
      key: 'comment_status',
      search: true
    }, {
      field: 'nickname',
      title: '评论人'
    }, {
      field: 'cName',
      title: '评论对象'
    }, {
      field: 'commentDatetime',
      title: '评论时间',
      type: 'datetime'
    }, {
      field: 'remark',
      title: '审核说明'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 629756
    });
  }
}

export default KeywordAddedit;
