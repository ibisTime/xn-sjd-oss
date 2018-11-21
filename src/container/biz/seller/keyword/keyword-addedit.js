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
      field: 'reaction',
      title: '反应',
      key: 'keyword_reaction',
      type: 'select'
    }, {
      title: '关键字',
      field: 'word',
      maxlength: 50,
      required: true
    }, {
      title: '备注',
      field: 'remark'
    }];
    return this.buildDetail({
      fields,
      key: 'id',
      code: this.code,
      view: this.view,
      detailCode: 629766,
      addCode: 629760,
      editCode: 629762
    });
  }
}

export default KeywordAddedit;
