import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class Certificate extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '证书图片',
      field: 'certificateTemplate',
      type: 'img'
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: true,
      detailCode: 629206
    });
  }
}

export default Certificate;
